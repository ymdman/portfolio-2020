<template>
  <div class="l-content">
    <div class="l-content__section">
      <h1 class="c-title c-title--level-1">Work</h1>
      <div class="l-content__body">
        <p>{{ this.$route.params.id }}</p>
      </div>
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
