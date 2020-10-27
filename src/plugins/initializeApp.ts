
import { Context, Plugin } from '@nuxt/types'
import { ServiceRegistry } from '@/ServiceRegistry';
import { DictionaryService } from '@/services/DictionaryService';
import { Inject } from '@nuxt/types/app';


declare module 'vue/types/vue' {
  interface Vue {
    $serviceRegistry: ServiceRegistry
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$serviceRegistry inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $serviceRegistry: ServiceRegistry
  }
  // nuxtContext.$serviceRegistry
  interface Context {
    $serviceRegistry: ServiceRegistry
  }
}

declare module 'vuex/types/index' {
  // this.$serviceRegistry inside Vuex stores
  interface Store<S> {
    $serviceRegistry (): ServiceRegistry
  }
}

const initializeApp: Plugin = (ctx: Context, inject: Inject) => {

  inject('serviceRegistry', ServiceRegistry.instance)

  // if (process.server) {
  ServiceRegistry.instance.register(DictionaryService);
  ServiceRegistry.instance.updateNuxtContext(ctx);
  //}
}

export default initializeApp;