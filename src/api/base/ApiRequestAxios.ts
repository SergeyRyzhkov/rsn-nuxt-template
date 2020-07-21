import { AbstractApiRequest } from './AbstractApiRequest';
import axios, { AxiosInstance, AxiosPromise, AxiosResponse, AxiosRequestConfig } from 'axios'
import { IApiResponse } from './IApiResponse';

class ApiRequestAxios extends AbstractApiRequest {

  private axiosInstance: AxiosInstance = axios.create();

  protected async processRequest (url: string, config?: any, body?: {}): Promise<IApiResponse> {
    const extConfig = { ...config, ...{ data: body, url } }
    return this.processResponse(this.axiosInstance.request(extConfig));
  }

  private async processResponse (axiosResult: Promise<AxiosResponse<any>>): Promise<IApiResponse> {
    let response: IApiResponse;
    try {
      const result = await axiosResult;
      response = this.createResponse(result);
      this.onSuccess(response);
      return Promise.resolve(response);
    }
    catch (err) {
      response = this.createResponse(!!err.response ? err.response : { data: null, status: 500, statusText: err.message });
      this.onError(response);
      return Promise.reject(response);
    }
  }
}

export const axiosApi = new ApiRequestAxios() 
