import { AbstractApiRequest } from './AbstractApiRequest';
import { ApiResponse } from './ApiResponse';

class FetchRequest extends AbstractApiRequest {

  protected async processRequest (url: string, config?: any, data?: any): Promise<ApiResponse> {
    const reqData = !!data ? (Object(data) === data ? data : JSON.stringify(data)) : null
    const extConfig = { ...config, ...{ body: reqData } }
    return this.processResponse(fetch(url, extConfig));
  }

  private async processResponse (fetchResult: Promise<Response>): Promise<ApiResponse> {
    let response: ApiResponse;
    try {
      const result = await fetchResult;
      response = this.createResponse(result);

      //FIXME: 399 ? может более 299 ?
      if (!result.ok || response.status > 399) {
        return Promise.reject(response);
      }
      response.data = await result.json();
      return Promise.resolve(response);
    }
    catch (err) {
      response = this.createResponse(!!err.response ? err.response : { data: null, status: 500, statusText: err.message });
      return Promise.reject(response);
    }
  }
}


export const fetchApi = new FetchRequest();

