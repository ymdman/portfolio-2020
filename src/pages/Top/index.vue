<template>
  <div>
    <div class="hero">
      Lorem, ipsum dolor.
    </div>
    <div class="l-content">
      <section class="l-content__section">
        <h1 class="c-title c-title--level-1">About</h1>
        <div class="l-content__body">
          <p v-html="description" />
        </div>
      </section>
      <section class="l-content__section">
        <h2 class="c-title c-title--level-2">Point</h2>
        <div class="l-content__body">
          <ul class="point-list">
            <li v-for="item in pointList" :key="item">{{ item }}</li>
          </ul>
        </div>
      </section>
      <section class="l-content__section l-content__section--lined">
        <h2 class="c-title c-title--level-2">Profile</h2>
        <div class="l-content__body">
          <div class="profile">
            <div class="profile__image">
              <v-lazy-load-img
                :src="profile.image.src"
                :alt="profile.image.alt"
                :width="396"
                :height="396"
              />
            </div>
            <div class="profile__body">
              <h3 class="profile__name">{{ profile.name }}</h3>
              <h4 class="profile__job">{{ profile.job }}</h4>
              <ul class="profile__sns-list">
                <li class="profile__sns-item">
                  <a
                    href="https://github.com/ymdman"
                    target="_blank"
                    class="profile__anchor"
                  >
                    <VIconGitHub class="profile__github" />
                  </a>
                </li>
                <li class="profile__sns-item">
                  <a
                    href="https://qiita.com/ymdman"
                    target="_blank"
                    class="profile__anchor"
                  >
                    <VIconQiita class="profile__qiita" />
                  </a>
                </li>
              </ul>
              <p class="profile__description">{{ profile.description }}</p>
            </div>
          </div>
        </div>
      </section>
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
