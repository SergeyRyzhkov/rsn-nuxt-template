import { BaseService } from './services/BaseService'
import { Context } from '@nuxt/types'

export type ConstructorOf<T extends BaseService> = new (...args: any[]) => T;

export class ServiceRegistry {
  private static _instance: ServiceRegistry = new ServiceRegistry()
  private servicesMap = new Map<ConstructorOf<BaseService>, any>()

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor () { }


  public static get instance () {
    return this._instance
  }

  public updateNuxtContext (ctx: Context) {
    for (const iterServ of this.servicesMap.values()) {
      iterServ.injectNuxtContext(ctx)
    }
  }

  public register<T extends BaseService> (ctor: ConstructorOf<T>, ...args: any[]) {
    const service = new ctor(...args)
    this.servicesMap.set(ctor, service)
    return this
  }

  public getService<T extends BaseService> (ctor: ConstructorOf<T>): T {
    return this.servicesMap.get(ctor) || new BaseService()
  }

  public exists<T extends BaseService> (ctor: new (...args: any[]) => T): boolean {
    return !!this.getService(ctor)
  }
}
