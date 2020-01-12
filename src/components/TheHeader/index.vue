<template>
  <header class="header">
    <h1 class="logo">Site Name</h1>
    <div class="icon-three-bars" @click="handleIconThreeBarsClick">
      <v-icon-three-bars v-if="!isDrawerMenuOpened" />
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
