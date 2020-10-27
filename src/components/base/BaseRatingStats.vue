<template>
  <div class="p-4">
    <BaseRating
      :raiting="raitingStatistics.raiting"
      :reviews="raitingStatistics.reviewsCount"
    ></BaseRating>
    <div class="d-flex justify-content-between align-items-center mt-4">
      <div class="fs-12 mute-color text-transform-uppercase">5 звёзд</div>
      <div class="border-bottom-doted"></div>
      <div class="base-rating-review">
        {{ raitingStatistics.stars5Percent }}
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center mt-4">
      <div class="fs-12 mute-color text-transform-uppercase">4 звёзды</div>
      <div class="border-bottom-doted"></div>
      <div class="base-rating-review">
        {{ raitingStatistics.stars4Percent }}
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center mt-4">
      <div class="fs-12 mute-color text-transform-uppercase">3 звёзды</div>
      <div class="border-bottom-doted"></div>
      <div class="base-rating-review">
        {{ raitingStatistics.stars3Percent }}
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center mt-4">
      <div class="fs-12 mute-color text-transform-uppercase">2 звёзды</div>
      <div class="border-bottom-doted"></div>
      <div class="base-rating-review">
        {{ raitingStatistics.stars2Percent }}
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center mt-4">
      <div class="fs-12 mute-color text-transform-uppercase">1 звёзда</div>
      <div class="border-bottom-doted"></div>
      <div class="base-rating-review">
        {{ raitingStatistics.stars1Percent }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import RaitingStatistics from '@/models/core/RaitingStatistics'

@Component
export default class BaseRatingStats extends Vue {

  @Prop()
  public raitingStatistics: RaitingStatistics;

}
</script>
