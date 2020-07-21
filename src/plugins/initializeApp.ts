
import { Context, Plugin } from '@nuxt/types'
import { ServiceRegistry } from '@/api/ServiceRegistry';
import { fetchApi } from '@/api/base/ApiRequestFetch';
import { ExampleService } from '@/api/ExampleService';


const initializeApp: Plugin = (ctx: Context, inject: (key: string, value: any) => void) => {

  ServiceRegistry.initialize(ctx, fetchApi);
  ServiceRegistry.register(ExampleService);

  // inject('serviceRegistry', ServiceRegistry);
}

export default initializeApp;