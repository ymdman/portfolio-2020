<template>
  <div class="drawerMenu">
    <transition name="overlay">
      <div
        v-show="isDrawerMenuOpened"
        class="overlay"
        @click="handleOverlayClick"
      />
    </transition>
    <transition name="nav">
      <nav v-show="isDrawerMenuOpened" class="nav">
        <div class="iconX" @click="handleIconXClick">
          <v-icon-x />
        </div>
        <h2 class="title">Menu</h2>
        <ul class="items">
          <li class="item">
            <router-link
              to="/"
              class="anchor"
              @click.native="handleRouterLinkClick"
            >
              About
            </router-link>
          </li>
          <li class="item">
            <router-link
              to="/skill"
              class="anchor"
              @click.native="handleRouterLinkClick"
            >
              Skill
            </router-link>
          </li>
          <li class="item">
            <router-link
              to="/works"
              class="anchor"
              @click.native="handleRouterLinkClick"
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
