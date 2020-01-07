<template>
  <div class="l-content">
    <div class="l-content__section">
      <h1 class="c-title c-title--level-1">Works</h1>
      <div class="l-content__body">
        <p>{{ description }}</p>
      </div>
    </div>
    <section
      v-for="item in list"
      :key="item.key"
      class="l-content__section l-content__section--lined"
    >
      <h2 class="c-title c-title--level-2">{{ item.companyName }}</h2>
      <div class="l-content__body">
        <div class="work">
          <dl class="work__summary-list">
            <dt class="work__summary-title">Job / 職種</dt>
            <dd class="work__summary-text">{{ item.job }}</dd>
            <dt class="work__summary-title">Status / 雇用形態</dt>
            <dd class="work__summary-text">{{ item.status }}</dd>
            <dt class="work__summary-title">Period / 期間</dt>
            <dd class="work__summary-text">{{ item.period }}</dd>
          </dl>
          <p class="work__description">{{ item.description }}</p>
          <div class="work__project">
            <ul class="work__project-list">
              <li
                v-for="project in item.projects"
                :key="project.key"
                class="work__project-item"
              >
                <figure class="work__project-detail">
                  <div class="work__project-image">
                    <v-lazy-load-img
                      :src="project.image.src"
                      :alt="project.image.alt"
                      :width="600"
                      :height="400"
                    />
                  </div>
                  <figcaption class="work__project-caption">
                    {{ project.siteName }}
                  </figcaption>
                </figure>
              </li>
            </ul>
          </div>
        </div>
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
