<template>
  <img
    :src="isLoadingSupported && src"
    :alt="alt"
    :width="isLoadingSupported && width"
    :height="isLoadingSupported && height"
    :loading="isLoadingSupported && 'lazy'"
    class="image"
  />
</template>

<!-- prettier-ignore -->
<script lang="ts">
  import VueComponent from './index';
  export default VueComponent;
</script>

<!-- prettier-ignore -->
<style scoped>
  @import './index';
</style>
