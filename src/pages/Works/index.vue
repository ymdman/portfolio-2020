<template>
  <div class="l-content">
    <div class="l-content__section">
      <h1 class="c-title c-title--level-1">Works</h1>
      <div class="l-content__body">
        <p class="description">{{ description }}</p>
      </div>
    </div>
    <section
      v-for="item in list"
      :key="item.key"
      class="l-content__section l-content__section--lined"
    >
      <h2 class="c-title c-title--level-2">{{ item.companyName }}</h2>
      <div class="l-content__body">
        <dl class="c-dfn-list">
          <dt class="c-dfn-list__term">職種</dt>
          <dd class="c-dfn-list__desc">{{ item.job }}</dd>
          <dt class="c-dfn-list__term">雇用形態</dt>
          <dd class="c-dfn-list__desc">{{ item.status }}</dd>
          <dt class="c-dfn-list__term">期間</dt>
          <dd class="c-dfn-list__desc">{{ item.period }}</dd>
        </dl>
        <p class="summary">{{ item.summary }}</p>
        <div class="project">
          <ul class="project__list">
            <li
              v-for="project in item.projects"
              :key="project.key"
              class="project__item"
            >
              <router-link
                :to="`/works/${project.key}`"
                class="project__anchor"
              >
                <figure class="project__figure">
                  <div class="project__thumbnail">
                    <div class="project__thumbnail-inner">
                      <v-lazy-load-img
                        v-if="!!project.image"
                        :src="project.image.src"
                        :alt="project.image.alt"
                        :width="600"
                        :height="400"
                        class="project__image"
                      />
                      <div v-else class="project__no-image">No Image</div>
                    </div>
                  </div>
                  <figcaption class="project__caption">
                    {{ project.siteName }}
                  </figcaption>
                </figure>
              </router-link>
            </li>
          </ul>
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
