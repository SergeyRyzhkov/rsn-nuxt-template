import { BaseService } from './BaseService';
import { IApiResponse } from './base/IApiResponse';
import { axiosApi } from './base/ApiRequestAxios';

export class ExampleService extends BaseService {

  public async makeError () {
    try {
      throw new Error('ERROR!')
    }
    catch (err) {
      this.errorRedirect(err);
    }
  }

  public async getOpenFoodFacts () {
    this.apiRequest = axiosApi;
    this.apiRequest.baseUrl = ''
    const url = 'https://world.openfoodfacts.org/api/v0/product/04963406';
    try {
      const config = {
        headers: {
          'Accept': 'application/json'
        }
      }
      return await this.apiRequest.get(url, config);
    }
    catch (err) {
      this.errorRedirect(err);
    }
  }

  public async exampleWithBaseUrl () {
    const baseUrl = 'https://www.ekoset.ru/api/2_0';
    const url = '5/services?root=true';
    try {
      this.apiRequest.baseUrl = baseUrl;
      return await this.apiRequest.get(url);
    }
    catch (err) {
      this.errorRedirect(err);
    }
  }
}
