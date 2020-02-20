<template>
  <div>
    <the-hero
      :src="!!work.detail.img ? work.detail.img[0].src : ''"
      :alt="!!work.detail.img ? work.detail.img[0].alt : ''"
      :title="work.title"
      type="blurry"
    />
    <div class="l-content">
      <div class="l-content__section">
        <h2 class="c-title c-title--level-2">{{ work.title }}</h2>
        <div class="l-content__body">
          <div class="work">
            <p>{{ work.description }}</p>
            <dl class="work__summary-list">
              <dt
                v-if="work.detail.category === 'web'"
                class="work__summary-title"
              >
                サイト名
              </dt>
              <dt
                v-if="work.detail.category === 'flyer'"
                class="work__summary-title"
              >
                広告名
              </dt>
              <dd class="work__summary-text">{{ work.detail.name }}</dd>
              <dt class="work__summary-title">担当</dt>
              <dd class="work__summary-text">{{ work.charge }}</dd>
              <dt class="work__summary-title">期間</dt>
              <dd class="work__summary-text">{{ work.experience }}</dd>
              <dt class="work__summary-title">その他</dt>
              <dd class="work__summary-text">{{ work.other }}</dd>
            </dl>
            <p v-if="!!work.detail.url" class="work__button">
              <a
                :href="work.detail.url"
                target="_blank"
                class="work__button-anchor"
              >
                Visit This Site
              </a>
            </p>
            <ul v-if="!!work.detail.img" class="work__images">
              <li
                v-if="!!work.detail.img[0]"
                class="work__image-item work__image-item--large"
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
                class="work__image-item work__image-item--small"
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
        </div>
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
