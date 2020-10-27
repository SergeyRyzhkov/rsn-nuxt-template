import Vue from 'vue'
import Router from 'vue-router'

import BaseError from '@/components/base/BaseError.vue'
import MainPage from '@/pages/MainPage.vue'
import { PublicRoute } from './PublicRoute';

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
        component: MainPage
      },

      {
        name: 'error-page',
        path: '/app/error',
        component: BaseError,
        props: true
      },
      ...PublicRoute
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
