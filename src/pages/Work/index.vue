<template>
  <div class="l-content">
    <the-hero
      :src="!!work.detail.img ? work.detail.img[0].src : ''"
      :alt="!!work.detail.img ? work.detail.img[0].alt : ''"
      :width="1200"
      :height="1200"
      :title="work.title"
      type="dark"
      class="hero l-content__section"
    />
    <section class="l-content__section">
      <h2 class="c-title c-title--level-2">{{ work.title }}</h2>
      <div class="l-content__body">
        <p class="description">{{ work.description }}</p>
        <dl class="summary-list c-dfn-list">
          <dt v-if="work.detail.type === 'web'" class="c-dfn-list__term">
            サイト名
          </dt>
          <dt v-if="work.detail.type === 'flyer'" class="c-dfn-list__term">
            広告名
          </dt>
          <dd class="c-dfn-list__desc">{{ work.detail.name }}</dd>
          <dt class="c-dfn-list__term">担当</dt>
          <dd class="c-dfn-list__desc">{{ work.detail.charge }}</dd>
          <template v-if="!!work.detail.experience">
            <dt class="c-dfn-list__term">期間</dt>
            <dd class="c-dfn-list__desc">{{ work.detail.experience }}</dd>
          </template>
          <dt class="c-dfn-list__term">その他</dt>
          <dd class="c-dfn-list__desc">{{ work.detail.other }}</dd>
        </dl>
        <a
          v-if="!!work.detail.url"
          :href="work.detail.url"
          target="_blank"
          class="anchor"
        >
          <v-button label="Visit This Site" />
        </a>
        <ul v-if="!!work.detail.img" class="image-list">
          <li
            v-if="!!work.detail.img[0]"
            class="image-list__item image-list__item--large"
          >
            <v-lazy-load-img
              :src="work.detail.img[0].src"
              :alt="work.detail.img[0].alt"
              :width="1000"
              :height="1000"
            />
          </li>
          <li
            v-if="!!work.detail.img[1]"
            class="image-list__item image-list__item--small"
          >
            <v-lazy-load-img
              :src="work.detail.img[1].src"
              :alt="work.detail.img[1].alt"
              :width="320"
              :height="320"
            />
          </li>
        </ul>
      </div>
    </section>
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
