import Vue from 'vue'
import Router from 'vue-router'
import { AuthRoutes } from './AuthRoutes';

import BaseError from '@/components/base/BaseError.vue'
import ExampleHome from '@/pages/ExampleHome.vue'
import ExampleProtectedPage from '@/pages/ExampleProtectedPage.vue'

Vue.use(Router);

export function createRouter () {
  return new Router({
    mode: 'history',

    routes: [
      {
        name: 'not-found',
        path: '*',
        component: BaseError,
        props: { status: 404 }
      },

      {
        name: 'main',
        path: '/',
        component: ExampleHome
      },

      {
        name: 'error-page',
        path: '/app/error',
        component: BaseError,
        props: true
      },

      {
        name: 'protected',
        path: '/protected',
        component: ExampleProtectedPage,
        props: true,
        meta: {
          requiresAuth: true
        }
      },

      ...AuthRoutes
    ],

    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
  })
}
