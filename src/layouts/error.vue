<template functional>
  <main>
    <BaseError
      :status="props.error.statusCode"
      :statusText="props.error.message"
      :error="props.error"
    ></BaseError>
  </main>
</template>

<style lang="scss">
@import "@/styles/variables.scss";
@import "@/styles/typography.scss";
</style>
