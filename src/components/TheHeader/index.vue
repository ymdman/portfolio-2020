<template>
  <header class="header" :class="{ 'header--white': isHeroVisible }">
    <p class="logo">
      <router-link to="/" class="anchor">19790620.com</router-link>
    </p>
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
