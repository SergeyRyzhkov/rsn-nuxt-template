
// import AuthStore from '@/store/AuthStore'
import { getModule } from 'vuex-module-decorators'
import { Middleware, Context } from '@nuxt/types'

const requiresAuthorize: Middleware = (ctx: Context) => {
  const isAuthRoute = ctx.route.matched.some(record => record.meta!.requiresAuth);

  // if (process.client) {
  //  getModule(AuthStore, ctx.store).updateSessionUser()
  // }

  // if (process.client && isAuthRoute && !getModule(AuthStore, ctx.store).isAuthenticated) {
  //    return ctx.redirect('/auth/login')
  // }


  if (isAuthRoute) {
    ctx.redirect(
      {
        name: 'auth-login',
        params: {
          mode: 'login'
        }
      });
  }
}

export default requiresAuthorize
