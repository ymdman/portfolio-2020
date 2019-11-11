<template>
  <div class="container">
    <div class="body">
      <pfo-header />
      <main>main</main>
      <pfo-footer />
    </div>
    <transition name="drawer-menu">
      <PfoDrawerMenu v-show="isOpened" class="drawer-menu" />
    </transition>
    <div @click="toggleDrawerMenu" class="menu-icon">Menu Icon</div>
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
