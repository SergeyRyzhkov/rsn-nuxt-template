<template>
  <main class="rsn-example-container">
    <h1>rsn-nuxt-template</h1>
    <button @click="makeError">Redirect to Error page</button>
    <button @click="updateOpenFoodFacts">Open Food Facts</button>
    <button @click="exampleWithBaseUrl">Servise with base url (end point)</button>
    <nuxt-link :to="{ name: 'protected'}">Protected page</nuxt-link>
    <textarea v-model="cocaColaData"></textarea>
    <textarea v-model="exampleWithBase"></textarea>
  </main>
</template>

<script lang="ts">
import { ServiceRegistry } from '@/ServiceRegistry';
import { ExampleService } from '@/services/ExampleService';
import { Component, Vue } from 'nuxt-property-decorator'


@Component
export default class ExampleHome extends Vue {

  private cocaColaData = {}
  private exampleWithBase = {}

  public async fetch () {
    await this.updateOpenFoodFacts();
  }

  public async makeError () {
    await ServiceRegistry.instance.getService(ExampleService).makeError();
  }

  public async updateOpenFoodFacts () {
    const serv = ServiceRegistry.instance.getService(ExampleService);
    const result = await serv.getOpenFoodFacts();
    this.cocaColaData = result?.data
  }
  public async exampleWithBaseUrl () {
    const result = await ServiceRegistry.instance.getService(ExampleService).exampleWithBaseUrl();
    this.exampleWithBase = result?.data
  }
}

</script>

<style lang="scss">
@import "@/styles/variables.scss";

.rsn-example-container {
  * {
    display: block;
  }
}
</style>
