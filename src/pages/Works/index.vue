<template>
  <div class="container">
    <h1>Works</h1>
    <p>{{ description }}</p>
    <section v-for="item in list" :key="item.key" class="section">
      <h2 class="c-title c-title--level-2">{{ item.companyName }}</h2>
      <dl class="work-list">
        <dt class="work-list__title">Job / 職種</dt>
        <dd class="work-list__label">{{ item.job }}</dd>
        <dt class="work-list__title">Status / 雇用形態</dt>
        <dd class="work-list__label">{{ item.status }}</dd>
        <dt class="work-list__title">Period / 期間</dt>
        <dd class="work-list__label">{{ item.period }}</dd>
      </dl>
      <p class="description">{{ item.description }}</p>
      <div class="project">
        <ul class="project__list">
          <li
            v-for="project in item.projects"
            :key="project.key"
            class="project__item"
          >
            <figure class="project__detail">
              <div class="project__image">
                <v-lazy-load-img
                  :src="project.image.src"
                  :alt="project.image.alt"
                  :width="600"
                  :height="400"
                />
              </div>
              <figcaption class="project__caption">
                {{ project.siteName }}
              </figcaption>
            </figure>
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
