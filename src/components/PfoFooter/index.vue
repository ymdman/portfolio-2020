<template>
  <footer v-if="isDesktop" class="footer">
    <span @click="handleClick" class="footer__inner">Footer component</span>
  </footer>
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
