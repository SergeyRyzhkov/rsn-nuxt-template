import { AppConfig } from '@/AppConfig';
import { ApiResponse } from './ApiResponse';
import { Pagination } from '@/models/core/Pagination';
import { Sort } from '@/models/core/Sort';

export enum ResponseType {
  JSON,
  TEXT,
  ANY
}

export abstract class AbstractApiRequest {

  private _baseUrl?: string

  constructor (options?: any, baseUrl?: string) {
    this._baseUrl = baseUrl
  }

  public set baseUrl (baseUrl: string) {
    this._baseUrl = baseUrl;
  }


  public async getJSON (url: string, config?: any, pagination?: Pagination, sort?: Sort): Promise<ApiResponse> {
    return this.processRequest(this.buildUrl(url, pagination, sort), ResponseType.JSON, { ...config, ...{ method: 'GET' } });
  }

  public async getText (url: string, config?: any, pagination?: Pagination, sort?: Sort): Promise<ApiResponse> {
    return this.processRequest(this.buildUrl(url, pagination, sort), ResponseType.TEXT, { ...config, ...{ method: 'GET' } });
  }

  public async post (url: string, config?: any, data?: any): Promise<ApiResponse> {
    return this.processRequest(this.buildUrl(url), ResponseType.JSON, { ...config, ...{ method: 'POST' } }, data);
  }

  public async postForm (url: string, config?: any, formData?: FormData): Promise<ApiResponse> {
    config.headers = {
      ...config.headers, ...{
        'Content-Type': 'application/json'
      }
    }

    return this.post(url, { ...config }, formData);
  }

  public async put (url: string, config?: any, data?: any): Promise<ApiResponse> {
    return this.processRequest(this.buildUrl(url), ResponseType.JSON, { ...config, ...{ method: 'PUT', data } }, data);
  }

  public async patch (url: string, config?: any, data?: any): Promise<ApiResponse> {
    return this.processRequest(this.buildUrl(url), ResponseType.JSON, { ...config, ...{ method: 'PATCH', data } }, data);
  }

  public async delete (url: string, config?: any): Promise<ApiResponse> {
    return this.processRequest(this.buildUrl(url), ResponseType.JSON, { ...config, ...{ method: 'DELETE' } });
  }

  protected async abstract processRequest (url: string, responseType: ResponseType, config?: any, data?: any): Promise<ApiResponse>


  protected createResponse (resp: any): ApiResponse {
    return {
      data: resp.data,
      status: resp.status,
      statusText: resp.statusText
    }
  }

  protected createErrorResponse (error: any): ApiResponse {
    return this.createResponse(
      !!error.response
        ? error.response
        : { data: null, status: 500, statusText: error.message }
    )
  }

  //FIXME: тут надо с? решить 1 = 1
  protected buildUrl (query: string, pagination?: Pagination, sort?: Sort): string {
    let url = this._baseUrl ? `${this._baseUrl}/${query}` : query;
    if (!!sort && !!sort.sortField) {
      url = url + `&sortfield=${sort.sortField}&sorttype=${sort.sortType || 'DESC'}`;
    }
    if (!!pagination) {
      pagination.limit = pagination.limit > 0 ? pagination.limit : AppConfig.defaultPaginationLimit;
      url = url + `&offset=${(pagination.currentPage - 1) * pagination.limit || 0}&limit=${pagination.limit}`;
    }
    return url;
  }
}
