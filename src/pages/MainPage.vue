<template>
  <main class="page-content">
    <section class="section-wrapper">
      <h1>Загловок</h1>

      <div class="pt-3 pt-md-32">
        <div class="row">
          <div class="col-6">Первая колонка</div>
          <div class="col-6">Вторая колонка</div>
          <div class="col-6">Третья колонка</div>
          <div class="col-6">Четверая колонка</div>
        </div>

        <div class="pt-3 pt-md-32">
          <div class="row">
            <div class="col-6">Первая-1 колонка</div>
            <div class="col-6">Вторая-1 колонка</div>
            <div class="col-6">Третья-1 колонка</div>
            <div class="col-6">Четверая-1 колонка</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'


@Component
export default class MainPage extends Vue {

}

</script>

<style lang="scss">
</style>
