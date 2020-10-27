import { AbstractApiRequest, ResponseType } from './AbstractApiRequest';
import { ApiResponse } from './ApiResponse';

export default class FetchRequest extends AbstractApiRequest {

  protected async processRequest (url: string, responseType: ResponseType, config?: any, data?: any): Promise<ApiResponse> {

    const reqData = !!data && data instanceof FormData ? data : (!!data ? (Object(data) === data ? JSON.stringify(data) : data) : null)

    if (!!reqData && !(data instanceof FormData)) {
      config.headers = {
        ...config.headers, ...{
          'Content-Type': 'application/json'
        }
      }
    }

    const extConfig = { ...config, ...{ body: reqData } }
    return this.processResponse(responseType, fetch(url, extConfig));
  }

  private async processResponse (responseType: ResponseType, fetchResult: Promise<Response>): Promise<ApiResponse> {
    let response: ApiResponse;
    try {
      const result = await fetchResult;

      response = this.createResponse(result);
      response.data = responseType === ResponseType.JSON ? await result.json() : await result.text();

      if (!result.ok || result.status > 399) {
        return Promise.reject(response);
      }

      return Promise.resolve(response);
    }
    catch (err) {
      return Promise.reject(this.createErrorResponse(err));
    }
  }
}

