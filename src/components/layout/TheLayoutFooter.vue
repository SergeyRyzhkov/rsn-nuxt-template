<template>
  <footer class="footer-wrapper"></footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class TheLayoutFooter extends Vue {
}
</script>

<style lang="scss" scoped>
.footer-wrapper {
  height: 106px;
  background-color: lightcoral;
  border-top: 1px solid $delimeter-color;
}
</style>