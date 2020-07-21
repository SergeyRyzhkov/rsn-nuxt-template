import Pagination from '@/models/Pagination'
import Sort from '@/models/Sort'
import { AppConfig } from '@/AppConfig';
import { IApiResponse } from './IApiResponse';


export abstract class AbstractApiRequest {

  private endPount: string

  public set baseUrl (baseUrl: string) {
    this.endPount = baseUrl;
  }

  public get baseUrl () {
    return this.endPount;
  }

  public async get (url: string, config?: {}, pagination?: Pagination, sort?: Sort): Promise<IApiResponse> {
    return this.processRequest(this.buildUrl(url, pagination, sort), { ...config, ...{ method: 'GET' } });
  }

  public async post (url: string, body?: {}, config?: {}): Promise<IApiResponse> {
    return this.processRequest(this.buildUrl(url), { ...config, ...{ method: 'POST' } }, body);
  }

  public async postForm (url: string, formData: FormData, config?: {}): Promise<IApiResponse> {
    const conf = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    return this.post(url, formData, { ...config, ...conf });
  }

  public async  put (url: string, body?: {}, config?: {}): Promise<IApiResponse> {
    return this.processRequest(this.buildUrl(url), { ...config, ...{ method: 'PUT', body } }, body);
  }

  public async  delete (url: string, config?: {}): Promise<IApiResponse> {
    return this.processRequest(this.buildUrl(url), { ...config, ...{ method: 'DELETE' } });
  }

  public onSuccess (response: IApiResponse): void {
    if (!!response.data.data) {
      if (!!response.data.data.showNotify) {
        this.showNotify(response.data.data.showNotify.alert, response.data.data.showNotify.title, response.data.data.showNotify.text);
      }
    }
  }

  public onError (response: IApiResponse): void {
  }

  public showNotify (alert: boolean, title: string, text: string) {
  }

  protected async abstract processRequest (url: string, config?: {}, body?: {}): Promise<IApiResponse>

  protected createResponse (resp: any): IApiResponse {
    return {
      data: resp.data,
      status: resp.status,
      statusText: resp.statusText
    }
  }

  тут надо с? решить 1 = 1
  protected buildUrl (query: string, pagination?: Pagination, sort?: Sort): string {
    let url = this.baseUrl ? `${this.baseUrl}/${query}` : query;
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
