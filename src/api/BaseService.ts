import { AbstractApiRequest } from './base/AbstractApiRequest';
import { Context } from '@nuxt/types';
import { Location } from 'vue-router';

export class BaseService {
  private api: AbstractApiRequest;
  private context: Context;


  public set nuxtContext (ctx: Context) {
    this.context = ctx;
  }

  public get nuxtContext () {
    return this.context;
  }

  public set apiRequest (api: AbstractApiRequest) {
    this.api = api;
  }

  public get apiRequest () {
    return this.api;
  }

  public notAuthRedirect () {
    this.safePushRoute({ name: 'auth-login', params: { mode: 'login' } });
  }

  public notFoundRedirect ({ status, statusText }) {
    this.safePushRoute({ name: 'not-found', params: { status, statusText } });
  }

  public errorRedirect ({ status, statusText, message }) {
    this.safePushRoute({ name: 'error-page', params: { status, statusText: !!statusText ? statusText : message } });
  }

  public safePushRoute (rawLocation: Location) {
    if (this.nuxtContext.route.name !== rawLocation.name) {
      this.nuxtContext.app.router?.push(rawLocation);
    }
  }

  protected getIdBySlug (slug: string) {
    let result = 0;
    if (!!slug && slug.indexOf('-') > -1) {
      const tryGet = Number(slug.split('-').pop())
      result = Number.isNaN(tryGet) ? 0 : tryGet
    }
    return result
  }

  // protected getFirstEntityInstanceFromJson<T> (plain: {}, classType: new () => T): T {
  //   return ClassTransformer.plainToClassFromExistFirst<T>(plain, classType);
  // }

}