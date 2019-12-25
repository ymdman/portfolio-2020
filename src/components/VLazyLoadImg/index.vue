<template>
  <img
    :src="isLoadingSupported && src"
    :width="width"
    :height="height"
    loading="lazy"
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
  @import './style';
</style>
