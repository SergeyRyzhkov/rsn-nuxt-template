import { AbstractApiRequest } from './AbstractApiRequest'
import { ApiResponse } from './ApiResponse'
import axios, { AxiosInstance, AxiosResponse } from 'axios'

class AxiosRequest extends AbstractApiRequest {
  withCredentials: true
  private axiosInstance: AxiosInstance = axios.create()

  protected async processRequest (url: string, config?: any, data?: any): Promise<ApiResponse> {
    const extConfig = { ...config, ...{ data, url } }
    return this.processResponse(this.axiosInstance.request(extConfig))
  }

  private async processResponse (axiosResult: Promise<AxiosResponse<any>>): Promise<ApiResponse> {
    let response: ApiResponse
    try {
      const result = await axiosResult
      response = this.createResponse(result)
      return Promise.resolve(response)
    } catch (err) {
      response = this.createResponse(
        !!err.response
          ? err.response
          : { data: null, status: 500, statusText: err.message }
      )
      return Promise.reject(response)
    }
  }
}

export const axiosApi = new AxiosRequest()
