<template>
  <div class="hero">
    <img :src="updatedSrc" :alt="updatedAlt" class="image" />
    <div class="overlay" />
    <h1 class="title">{{ updatedTitle }}</h1>
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
