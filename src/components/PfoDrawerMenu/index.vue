<template>
  <nav v-if="isDesktop" class="drawer-menu">
    <h2 class="drawer-menu__title">Menu</h2>
    <ul class="drawer-menu__items">
      <li @click="updateSize" class="drawer-menu__item">
        <a class="drawer-menu__anchor">About</a>
      </li>
      <li class="drawer-menu__item">
        <a class="drawer-menu__anchor">Skill</a>
      </li>
      <li class="drawer-menu__item">
        <a class="drawer-menu__anchor">Works</a>
      </li>
    </ul>
  </nav>
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
