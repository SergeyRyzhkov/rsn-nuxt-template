<template>
  <header class="header-wrapper"></header>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'nuxt-property-decorator'

@Component
export default class TheLayoutHeader extends Vue {
}
</script>

<style lang="scss" scoped>
.header-wrapper {
  min-height: 130px;
  background-color: blue;
}
</style>