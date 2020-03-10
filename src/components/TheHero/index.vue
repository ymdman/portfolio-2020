<template>
  <div class="hero">
    <div class="content">
      <h1 class="title">{{ title }}</h1>
      <p v-if="!!subTitle" class="sub-title">{{ subTitle }}</p>
    </div>
    <v-lazy-load-img
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      class="image"
    />
    <div :class="{ overlay: type === 'dark' }" />
  </div>
</template>

<!-- prettier-ignore -->
<script lang="ts">
  import VueComponent from './index';
  export default VueComponent;
</script>

<!-- prettier-ignore -->
<style scoped>
  @import './style';
</style>
