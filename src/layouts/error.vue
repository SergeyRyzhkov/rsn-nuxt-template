<template functional>
  <BaseError
    :status="props.error.statusCode"
    :status-text="props.error.message"
    :error="props.error"
  ></BaseError>
</template>
