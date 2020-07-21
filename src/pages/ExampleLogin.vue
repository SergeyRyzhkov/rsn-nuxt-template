<template functional>
  <div class="rsn-login">
    <h2>Login</h2>
    <span>Redirected from requiresAuthorize middleware</span>
    <span>Passed static prop from router: {{props.staticProp}}</span>
    <span>Execution the function (passed by prop as Fn from the router) :{{props.propFn()}}</span>
    <nuxt-link :to="{ name: 'main'}">Main page</nuxt-link>
  </div>
</template>

<style lang="scss">
@import "@/styles/variables.scss";

.rsn-login {
  span {
    display: block;
    margin-bottom: 15px;
  }
}
</style>