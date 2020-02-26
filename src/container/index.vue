<template>
  <div class="container">
    <the-header />
    <main :class="{ main: !isTopPage && !isWorkPage }">
      <router-view />
    </main>
    <the-footer />
    <the-menu />
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
