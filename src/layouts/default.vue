<template>
  <div class="page-container">
    <TheLayoutHeader></TheLayoutHeader>
    <nuxt></nuxt>
    <TheLayoutFooter v-once></TheLayoutFooter>
    <client-only>
      <BaseBackToTop></BaseBackToTop>
    </client-only>
  </div>
</template>
