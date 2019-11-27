<template>
  <div class="drawerMenu">
    <transition name="overlay">
      <div
        @click="handleOverlayClick"
        v-show="isDrawerMenuOpened"
        class="overlay"
      />
    </transition>
    <transition name="nav">
      <nav v-show="isDrawerMenuOpened" class="nav">
        <h2 class="title">Menu</h2>
        <ul class="items">
          <li class="item">
            <router-link
              @click.native="handleRouterLinkClick"
              to="/"
              class="anchor"
            >
              About
            </router-link>
          </li>
          <li class="item">
            <router-link
              @click.native="handleRouterLinkClick"
              to="/skill"
              class="anchor"
            >
              Skill
            </router-link>
          </li>
          <li class="item">
            <router-link
              @click.native="handleRouterLinkClick"
              to="/career"
              class="anchor"
            >
              Works
            </router-link>
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
