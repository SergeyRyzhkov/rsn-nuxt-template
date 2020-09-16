import { AppConfig } from '@/AppConfig';
import { ApiResponse } from './ApiResponse';
import { Pagination } from '@/models/Pagination';
import { Sort } from '@/models/Sort';


// TODO: Скачивание файла
// Интросептеры свой пул use (req,resp).use... использовать

export abstract class AbstractApiRequest {

  private _baseUrl: string

  public set baseUrl (baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  public get baseUrl () {
    return this._baseUrl;
  }

  //FIXME: надо отдельные методы getJSON, getBlob, getText.... 

  public async get (url: string, config?: any, pagination?: Pagination, sort?: Sort): Promise<ApiResponse> {
    return this.processRequest(this.buildUrl(url, pagination, sort), { ...config, ...{ method: 'GET' } });
  }

  public async post (url: string, data?: any, config?: any): Promise<ApiResponse> {
    return this.processRequest(this.buildUrl(url), { ...config, ...{ method: 'POST' } }, data);
  }

  public async postForm (url: string, formData: FormData, config?: any): Promise<ApiResponse> {
    const conf = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    return this.post(url, formData, { ...config, ...conf });
  }

  public async put (url: string, data?: any, config?: any): Promise<ApiResponse> {
    return this.processRequest(this.buildUrl(url), { ...config, ...{ method: 'PUT', data } }, data);
  }

  public async patch (url: string, data?: any, config?: any): Promise<ApiResponse> {
    return this.processRequest(this.buildUrl(url), { ...config, ...{ method: 'PATCH', data } }, data);
  }

  public async delete (url: string, config?: any): Promise<ApiResponse> {
    return this.processRequest(this.buildUrl(url), { ...config, ...{ method: 'DELETE' } });
  }

  protected async abstract processRequest (url: string, config?: any, data?: any): Promise<ApiResponse>


  protected createResponse (resp: any): ApiResponse {
    return {
      data: resp.data,
      status: resp.status,
      statusText: resp.statusText
    }
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
