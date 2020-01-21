<template>
  <div class="hero">
    <v-lazy-load-img
      :src="src"
      :alt="alt"
      :width="1200"
      :height="800"
      class="image"
    />
    <div class="overlay" />
    <h1 class="title">{{ title }}</h1>
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
