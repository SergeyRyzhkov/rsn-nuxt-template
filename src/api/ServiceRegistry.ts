import { BaseService } from './BaseService';
import { Context } from '@nuxt/types/app';
import { AbstractApiRequest } from './base/AbstractApiRequest';
import { fetchApi } from './base/ApiRequestFetch';

class ServiceContainer {
  private context: Context;
  private api: AbstractApiRequest;

  private servicesMap = new Map();
  private defaultService = new BaseService();

  public initialize (context: Context, api?: AbstractApiRequest) {
    this.context = context;
    this.api = !!api ? api : fetchApi;
  }

  public register<T extends BaseService> (type: new () => T) {
    if (!this.servicesMap.get(type)) {
      const service = new type();
      service.apiRequest = this.api;
      service.nuxtContext = this.context;
      this.servicesMap.set(type, service);
    }
    return this;
  }

  public getService<T extends BaseService> (type: new () => T): T {
    const instance = this.servicesMap.get(type);
    return instance || this.defaultService;
  }
}

export const ServiceRegistry = new ServiceContainer();
