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
          <p>{{ work.description }}</p>
          <dl class="hoge">
            <dt>Site / サイト</dt>
            <dd>{{ work.site.name }}</dd>
            <dt>Charge / 担当</dt>
            <dd>{{ work.charge }}</dd>
            <dt>Experience / 期間</dt>
            <dd>{{ work.experience }}</dd>
            <dt>その他</dt>
            <dd>{{ work.other }}</dd>
          </dl>
          <ul class="images">
            <li>
              <v-lazy-load-img
                :src="work.site.img[0].src"
                :alt="work.site.img[0].alt"
                :width="396"
                :height="396"
              />
            </li>
            <li>
              <v-lazy-load-img
                :src="work.site.img[1].src"
                :alt="work.site.img[1].alt"
                :width="396"
                :height="396"
              />
            </li>
          </ul>
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
