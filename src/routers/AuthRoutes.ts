import ExampleLogin from '@/pages/ExampleLogin.vue'

const propFn = () => {
  return `Now: ${new Date()}`;
}

export const AuthRoutes = [
  {
    name: 'auth-login',
    path: '/auth/:mode(login|registration)',
    props: { defauult: true, staticProp: 'Any static prop', propFn },
    component: ExampleLogin,
  },
  {
    name: 'auth-change',
    path: '/user/password/:mode(change|reset)',
    props: true,
    // component: ChangePasswordForm,
    meta: {
      requiresAuth: true
    }
  },
  {
    name: 'auth-restore',
    path: '/auth/restore',
    // component: RestorePasswordForm
  },
  {
    name: 'auth-callback',
    path: '/auth/callback/:mode(login|registration|logoff)',
    props: true,
    // component: AuthCallback
  }
]

