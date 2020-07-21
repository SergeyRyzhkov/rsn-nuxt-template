<template>
  <main class="rsn-example-container">
    <h1>rsn-nuxt-template</h1>
    <button @click="makeError">Redirect to Error page</button>
    <button @click="updateOpenFoodFacts">Open Food Facts</button>
    <button @click="exampleWithBaseUrl">Servise with base url (end point)</button>
    <nuxt-link :to="{ name: 'protected'}">Protected page</nuxt-link>
    <textarea>{{cocaColaData}}</textarea>
    <textarea>{{exampleWithBase}}</textarea>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue, mixins } from 'nuxt-property-decorator'
import { getModule } from 'vuex-module-decorators'
import { HeadMetaTagsBuilder } from '@/mixins/HeadMetaTagsBuilder'
import { ServiceRegistry } from '@/api/ServiceRegistry';
import { ExampleService } from '@/api/ExampleService';

@Component
export default class ExampleHome extends mixins(HeadMetaTagsBuilder) {

  private cocaColaData = {}
  private exampleWithBase = {}

  public async fetch () {
    await this.updateOpenFoodFacts();
  }

  public async makeError () {
    await ServiceRegistry.getService(ExampleService).makeError();
  }

  public async updateOpenFoodFacts () {
    const result = await ServiceRegistry.getService(ExampleService).getOpenFoodFacts();
    console.log(result);
    this.cocaColaData = result?.data
  }
  public async exampleWithBaseUrl () {
    const result = await ServiceRegistry.getService(ExampleService).exampleWithBaseUrl();
    this.exampleWithBase = result?.data
  }

  private head () {
    return this.createHead();
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
