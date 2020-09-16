import { Context } from "@nuxt/types";
import { Location } from "vue-router";
import { AbstractApiRequest } from "@/api/core/AbstractApiRequest";
import { axiosApi } from '@/api/core/AxiosRequest';

export class BaseService {
  private api: AbstractApiRequest;
  private context: Context;

  public injectNuxtContext (ctx: Context) {
    this.context = ctx;
  }

  public set apiRequest (api: AbstractApiRequest) {
    this.api = api;
  }

  public get apiRequest () {
    return this.api || axiosApi;
  }

  public notAuthRedirect () {
    this.safePushRoute({ name: "auth-login", params: { mode: "login" } });
  }

  public notFoundRedirect ({ status, statusText }) {
    this.safePushRoute({ name: "not-found", params: { status, statusText } });
  }

  public errorRedirect ({ status, statusText, message }) {
    this.safePushRoute({
      name: "error-page",
      params: { status, statusText: !!statusText ? statusText : message },
    });
  }

  public safePushRoute (rawLocation: Location) {
    if (this.context.route.name !== rawLocation.name) {
      this.context.app.router?.push(rawLocation);
    }
  }

  protected getIdBySlug (slug: string) {
    let result = 0;
    if (!!slug && slug.indexOf("-") > -1) {
      const tryGet = Number(slug.split("-").pop());
      result = Number.isNaN(tryGet) ? 0 : tryGet;
    }
    return result;
  }
}
