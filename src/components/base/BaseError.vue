<template functional>
  <main class="page-container">
    <section class="section-wrapper">
      <div class="section-container">
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
      </div>
    </section>
  </main>
</template>

