<template>
  <img
    :src="isLoadingSupported && src"
    loading="lazy"
    width="500"
    height="1000"
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
