<template>
  <div class="brc-breadcrumbs mb-3">
    <ul>
      <li v-for="(bread, idx) in breadCrumbs" :key="idx">
        <nuxt-link
          v-if="bread.link !== ''"
          :to="{ name: bread.link, params: bread.params }"
        >
          {{ bread.name }}
        </nuxt-link>
        <span v-else>{{ bread.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import AppStore from '@/store/AppStore'
import { getModule } from 'nuxt-property-decorator'


@Component({
  components: {

  }
})
export default class BreadCrumbs extends Vue {
  public get breadCrumbs () {
    return getModule(AppStore, this.$store).breadCrumbs;
  }
}
</script>

<style lang="scss">
.brc-breadcrumbs {
  ul {
    overflow: hidden;
    list-style: none;
    margin: 0px !important;
    // margin-bottom: 8px !important;
    li {
      white-space: nowrap;
      list-style-type: none;
      font-size: 14px;
      color: $muter-color;
      display: inline !important;
      &:after {
        content: "/";
        padding: 0;
        display: inline;
      }
      a {
        color: $muter-color;
        display: inline !important;
        &:hover {
          color: $purpure-color;
        }
      }
    }
  }
}
</style>

