<template>
  <div :class="searchClass">
    <div class="search-class">
      <input
        class="input-search"
        type="text"
        :name="name"
        :placeholder="placeholder"
      />
      <img class="search-class__img" src="/images/search_24px.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class BaseSearch extends Vue {
  @Prop({ default: "search" })
  private name: string

  @Prop({ default: "Поиск..." })
  private placeholder: string

  @Prop()
  private searchClass: string


}
</script>

<style lang="scss" >
.search-class {
  position: relative;
}

.search-class__img {
  position: absolute;
  right: 4px;
  top: 4px;
  bottom: 0px;
  padding: 6px;
  background: #ff008a;
  border-radius: 50%;
}
</style>