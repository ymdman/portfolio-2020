<template>
  <div class="menu">
    <transition name="nav">
      <nav v-show="isMenuOpened" class="nav">
        <div class="icon-x" @click="handleIconXClick">
          <v-icon-x />
        </div>
        <ul class="list">
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
    <transition name="overlay">
      <div v-show="isMenuOpened" class="overlay" @click="handleOverlayClick" />
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
  @import './index';
</style>
