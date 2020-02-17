<template>
  <div class="hero">
    <div class="content">
      <h1 class="title">{{ updatedTitle }}</h1>
      <p v-if="!!updatedRead" class="read">{{ updatedRead }}</p>
    </div>
    <img
      :src="updatedSrc"
      :alt="updatedAlt"
      :class="!!type && `image--${type}`"
      class="image"
    />
    <div v-if="!!type" class="overlay" />
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
