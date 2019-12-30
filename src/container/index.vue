<template>
  <div class="container">
    <div class="body">
      <the-header />
      <main :class="{ main: !isTopPage }">
        <router-view />
      </main>
      <the-footer />
    </div>
    <the-drawer-menu />
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
