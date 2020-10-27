<template>
  <div class="base-rating-container">
    <span
      v-for="index1 in raiting"
      :key="index1 * elKey()"
      class="good-raiting"
    ></span>
    <span
      v-for="index2 in badRatingCount"
      :key="index2 * elKey()"
      class="bad-raiting"
    ></span>
    <div class="base-rating-review">{{ reviews }}</div>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class BaseRating extends Vue {

  @Prop({ default: 5 })
  private raiting: number

  @Prop({ default: 0 })
  private reviews: number

  private get badRatingCount () {
    return 5 - this.raiting
  }

  private elKey () {
    return Math.random() * (1000 - 1) + 1;
  }
}
</script>

<style lang="scss" >
.base-rating-container {
  display: flex;
  align-items: center;

  .good-raiting::before,
  .bad-raiting::before {
    display: block;
    content: "\2605";
    font-size: 24px;
  }

  .good-raiting::before {
    color: #ffd975;
  }

  .bad-raiting {
    color: #bfc8d1;
  }

  span + span {
    margin-left: 4px;
  }
}
</style>



