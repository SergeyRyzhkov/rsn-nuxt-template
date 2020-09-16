
import { Context, Plugin } from '@nuxt/types'
import { ServiceRegistry } from '@/ServiceRegistry';
import { ExampleService } from '@/services/ExampleService';

const initializeApp: Plugin = (ctx: Context) => {

  // if (process.server) {
  ServiceRegistry.instance.register(ExampleService);
  ServiceRegistry.instance.updateNuxtContext(ctx);
  //}

}

export default initializeApp;