<template>
  <div class="container">
    <transition name="overlay">
      <div @click="toggleDrawerMenu" v-show="isOpened" class="overlay" />
    </transition>
    <transition name="nav">
      <nav v-show="isOpened" class="nav">
        <h2 class="title">Menu</h2>
        <ul class="items">
          <li class="item">
            <a class="anchor">About</a>
          </li>
          <li class="item">
            <a class="anchor">Skill</a>
          </li>
          <li class="item">
            <a class="anchor">Works</a>
          </li>
        </ul>
      </nav>
    </transition>
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
