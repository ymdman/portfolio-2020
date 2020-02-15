<template>
  <svg viewBox="0 0 512 512" class="svg">
    <rect y="16" width="512" height="70" />
    <rect y="216.008" width="512" height="70" />
    <rect y="416" width="512" height="70" />
  </svg>
</template>

<!-- prettier-ignore -->
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class ThreeBars extends Vue {}
</script>

<!-- prettier-ignore -->
<style scoped>
  @import './style';
</style>
