<template>
  <div class="container">
    <div class="body">
      <pfo-header />
      <main>main</main>
      <pfo-footer />
    </div>
    <PfoDrawerMenu />
    <div @click="handleMenuIconClick" class="menu-icon">
      <div v-for="(item, i) in items" :key="i" :class="changeClassName(item)" />
    </div>
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
