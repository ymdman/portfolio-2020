<template>
  <header class="header" :class="{ 'header--white': isHeroVisible }">
    <h1 class="logo">19790620.com</h1>
    <div class="icon-three-bars" @click="handleIconThreeBarsClick">
      <v-icon-three-bars />
    </div>
  </header>
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
