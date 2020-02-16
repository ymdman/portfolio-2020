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
        <div class="works">
          <dl class="works__summary-list">
            <dt class="works__summary-title">Job / 職種</dt>
            <dd class="works__summary-text">{{ item.job }}</dd>
            <dt class="works__summary-title">Status / 雇用形態</dt>
            <dd class="works__summary-text">{{ item.status }}</dd>
            <dt class="works__summary-title">Period / 期間</dt>
            <dd class="works__summary-text">{{ item.period }}</dd>
          </dl>
          <p class="works__description">{{ item.description }}</p>
          <div class="works__project">
            <ul class="works__project-list">
              <li
                v-for="project in item.projects"
                :key="project.key"
                class="works__project-item"
              >
                <router-link
                  :to="`/works/${project.key}`"
                  class="works__project-anchor"
                >
                  <figure class="works__project-detail">
                    <div class="works__project-image">
                      <v-lazy-load-img
                        v-if="!!project.image"
                        :src="project.image.src"
                        :alt="project.image.alt"
                        :width="600"
                        :height="400"
                      />
                      <div v-else class="works__project-no-image">No Image</div>
                    </div>
                    <figcaption class="works__project-caption">
                      {{ project.siteName }}
                    </figcaption>
                  </figure>
                </router-link>
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
