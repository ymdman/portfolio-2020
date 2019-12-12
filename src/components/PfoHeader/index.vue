<template>
  <header class="header">
    <h1 class="logo">Site Name</h1>
    <div @click="handleIconThreeBarsClick" class="iconThreeBars">
      <PfoIconThreeBars v-if="!isDrawerMenuOpened" />
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
