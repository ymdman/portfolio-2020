<template>
  <div>
    <the-hero
      :src="work.site.img[0].src"
      :alt="work.site.img[0].alt"
      :title="work.title"
    />
    <div class="l-content">
      <div class="l-content__section">
        <h2 class="c-title c-title--level-2">{{ work.title }}</h2>
        <div class="l-content__body">
          <div class="work">
            <p>{{ work.description }}</p>
            <dl class="work__summary-list">
              <dt class="work__summary-title">Site / サイト</dt>
              <dd class="work__summary-text">{{ work.site.name }}</dd>
              <dt class="work__summary-title">Charge / 担当</dt>
              <dd class="work__summary-text">{{ work.charge }}</dd>
              <dt class="work__summary-title">Experience / 期間</dt>
              <dd class="work__summary-text">{{ work.experience }}</dd>
              <dt class="work__summary-title">Library etc. / ライブラリ等</dt>
              <dd class="work__summary-text">{{ work.other }}</dd>
            </dl>
            <ul class="work__images">
              <li class="work__image-item work__image-item--large">
                <v-lazy-load-img
                  :src="work.site.img[0].src"
                  :alt="work.site.img[0].alt"
                  :width="1000"
                  :height="1000"
                />
              </li>
              <li class="work__image-item work__image-item--small">
                <v-lazy-load-img
                  :src="work.site.img[1].src"
                  :alt="work.site.img[1].alt"
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
