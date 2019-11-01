<template>
  <header
    v-if="true"
    class="header"
    data-id="id"
    data-one="one"
    data-two="two"
    data-three="three"
  >
    <span class="header__inner">{{ text }}</span>
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
