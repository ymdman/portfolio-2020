<template>
  <div class="container">
    <div class="body">
      <pfo-header />
      <main>
        <router-view />
      </main>
      <pfo-footer />
    </div>
    <div @click="handleIconThreeBarsClick" class="iconThreeBars">
      <PfoIconThreeBars />
    </div>
    <PfoDrawerMenu />
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
