<template>
  <div
    :class="['vue-back-to-top', {active: isVisible}, ...getWrapperClasses]"
    @click="scrollToWindowTop"
  >
    <slot>
      <span class="vue-back-to-top_text__default">
        <svg
          class="icon-svg icon-svg_scroll-up"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          aria-hidden="true"
          version="1.1"
          role="img"
          fill="red"
        >
          <path
            d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm8.412 19.523c-.517.512-1.355.512-1.872 0L16 13.516l-6.54 6.01c-.518.51-1.356.51-1.873 0-.516-.513-.517-1.343 0-1.855l7.476-7.326c.517-.512 1.356-.512 1.873 0l7.476 7.327c.516.513.516 1.342 0 1.854z"
          />
        </svg>
      </span>
    </slot>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Watch, Vue, Emit } from 'nuxt-property-decorator'

@Component
export default class BaseBackToTop extends Vue {
  @Prop({ default: '^' })
  public text: string

  @Prop({ default: 40 })
  public offsetTopStart: number

  @Prop()
  private wrapperClasses: string

  public isVisible = false

  private getWrapperClasses (): string[] {
    return !!this.wrapperClasses ? this.wrapperClasses.split(' ') : [];
  }

  public mounted () {
    window.addEventListener('scroll', this.catchScroll)
  }

  public destroyed () {
    window.removeEventListener('scroll', this.catchScroll);
  }

  public catchScroll () {
    this.isVisible = window.pageYOffset > this.offsetTopStart
  }

  @Emit()
  private scrollToWindowTop () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
}


</script>

<style lang="scss">
@import "@/styles/variables.scss";
@import "@/styles/typography.scss";

.vue-back-to-top {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  z-index: 1000;
  bottom: calc(100vh / 2);
  right: 20px;

  transition: all 0.4s ease-in-out;

  opacity: 0;
  transform: translateX(120%);
  background-color: transparent;
  height: 40px;
  text-align: center;
  width: 40px;

  &.active {
    opacity: 1;
    transform: none;
  }

  .vue-back-to-top_text__default {
    font-size: 20px;
    font-weight: $font-medium;
    color: white;
    text-align: center;
    margin: auto;
  }

  @media (max-width: 1024px) {
    bottom: 30px;
  }
}
</style>