<template>
  <div class="container">
    <div class="body">
      <pfo-header />
      <main>main</main>
      <pfo-footer />
    </div>
    <PfoDrawerMenu />
    <div @click="handleMenuClick" class="menu">
      <transition name="menu" mode="out-in">
        <PfoIconX v-if="isDrawerMenuOpened" class="menu__icon-x" />
        <PfoIconThreeBars v-else class="menu__icon-three-bars" />
      </transition>
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
