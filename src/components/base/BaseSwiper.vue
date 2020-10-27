<template>
  <div class="dsfdsfsdf">
    <h3>Тут будет слайдер vue-agile - In progress</h3>
    <figure class="fit__figure">
      <img src="/images/ClinicSlider.png" />
    </figure>
    <!-- <VueAgile ref="main" :as-nav-for="asNavFor1" :options="opt1">
      <div class="slide">
        <h3>slide 1</h3>
      </div>

      <div class="slide">
        <h3>slide 2</h3>
      </div>

      <div class="slide">
        <h3>slide 3</h3>
      </div>

      <div class="slide">
        <h3>slide 4</h3>
      </div>

      <div class="slide">
        <h3>slide 5</h3>
      </div>

      <div class="slide">
        <h3>slide 6</h3>
      </div>
    </VueAgile>

    <VueAgile ref="thumbnails" :as-nav-for="asNavFor2">
      <div class="slide">
        <h3>slide 1</h3>
      </div>

      <div class="slide">
        <h3>slide 2</h3>
      </div>

      <div class="slide" @click="$refs.main.goTo(3)">
        <h3>slide 3</h3>
      </div>

      <div class="slide">
        <h3>slide 4</h3>
      </div>

      <div class="slide">
        <h3>slide 5</h3>
      </div>

      <div class="slide">
        <h3>slide 6</h3>
      </div>
    </VueAgile> -->
  </div>
</template>


<script lang="ts">

import { Component, Vue } from 'nuxt-property-decorator'
// const VueAgile = () => import('vue-agile/src/Agile.vue')
import VueAgile from 'vue-agile/src/Agile.vue'


@Component({
  components: {
    VueAgile
  }
})
export default class BaseSwiper extends Vue {
  public $refs!: {
    thumbnails: any,
    main: any
  }

  private opt1 = {
    navButtons: false,
    //  autoplay: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: false
        }
      },

      {
        breakpoint: 900,
        settings: {
          navButtons: true,
          dots: true,
          infinite: false,
          slidesToShow: 2
        }
      }
    ]
  }

  private banners = ['/images/pub1.png', '/images/pub2.png', '/images/pub3.png']

  private asNavFor1: any[] = []
  private asNavFor2: any[] = []

  mounted () {
    this.asNavFor1.push(this.$refs.thumbnails)
    this.asNavFor2.push(this.$refs.main)
  }

}
</script>

<style lang="scss" >
// Basic VueAgile styles
.agile {
  &__nav-button {
    background: transparent;
    border: none;
    color: #ccc;
    cursor: pointer;
    font-size: 24px;
    transition-duration: 0.3s;
  }
  .thumbnails {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &--prev {
      left: -45px;
    }

    &--next {
      right: -45px;
    }
  }

  &:hover {
    color: #888;
  }
}

// 	&__dot
// 		margin: 0 10px

// 		button
// 			background-color: #eee
// 			border: none
// 			border-radius: 50%
// 			cursor: pointer
// 			display: block
// 			height: 10px
// 			font-size: 0
// 			line-height: 0
// 			margin: 0
// 			padding: 0
// 			transition-duration: .3s
// 			width: 10px

// 		&--current,
// 		&:hover
// 			button
// 				background-color: #888
// }
// // Slides styles
// .slide
// 	align-items: center
// 	box-sizing: border-box
// 	color: #fff
// 	display: flex
// 	height: 450px
// 	justify-content: center

// 	&--thumbniail
// 		cursor: pointer
// 		height: 100px
// 		padding: 0 5px
// 		transition: opacity .3s

// 		&:hover
// 			opacity: .75

// 	img
// 		height: 100%
// 		object-fit: cover
// 		object-position: center
// 		width: 100%
</style>