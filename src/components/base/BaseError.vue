<template functional>
  <section>
    <template v-if="props.status === 404">
      <h2>404. Not found !</h2>
      <nuxt-link :to="{ name: 'main'}">Main page</nuxt-link>
    </template>
    <template v-else>
      <h3>Error</h3>
      <br />
      <div>Status: {{ props.status }}</div>
      <div>Message: {{ props.statusText }}</div>
      <br />
      <nuxt-link :to="{ name: 'main'}">MainPage</nuxt-link>
    </template>
  </section>
</template>


<style lang="scss">
@import "@/styles/variables.scss";
@import "@/styles/typography.scss";
</style>


