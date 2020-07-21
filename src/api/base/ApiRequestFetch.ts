import { AbstractApiRequest } from './AbstractApiRequest';
import { IApiResponse } from './IApiResponse';

class ApiRequestFetch extends AbstractApiRequest {

  protected async processRequest (url: string, config?: {}, body?: {}): Promise<IApiResponse> {
    const extConfig = { ...config, ...{ body: !!body ? (String(body) === body ? body : JSON.stringify(body)) : null } }
    return this.processResponse(fetch(url, extConfig));
  }


  private async processResponse (fetchResult: Promise<Response>): Promise<IApiResponse> {
    let response: IApiResponse;
    try {
      const result = await fetchResult;
      response = this.createResponse(result);

      if (!result.ok || response.status > 399) {
        this.onError(response);
        return Promise.reject(response);
      }
      а если это put или post может и не быть json ?
        response.data = await result.json();
      this.onSuccess(response)
      return Promise.resolve(response);
    }
    catch (err) {
      response = this.createResponse(!!err.response ? err.response : { data: null, status: 500, statusText: err.message });
      this.onError(response);
      return Promise.reject(response);
    }
  }
}


export const fetchApi = new ApiRequestFetch();

