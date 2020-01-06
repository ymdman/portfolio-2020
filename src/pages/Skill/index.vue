<template>
  <div class="l-content">
    <section class="l-content__section">
      <h1 class="c-title c-title--level-1">Skill</h1>
      <div class="l-content__body">
        <p>{{ description }}</p>
      </div>
    </section>
    <section class="l-content__section">
      <h2 class="c-title c-title--level-2">Programming + Library</h2>
      <div class="l-content__body">
        <div class="progiraming">
          <ul class="programming__type-list">
            <li
              v-for="item in programming.typeList"
              :key="item.key"
              class="programming__type-list-item"
            >
              <div>{{ item.language }}</div>
              <v-progress-bar
                :glow-width="item.score"
                class="programming__progress-bar"
              />
            </li>
          </ul>
          <dl class="programming__detail-list">
            <template v-for="item in programming.detailList">
              <dt :key="item.title" class="programming__detail-title">
                {{ item.title }}
              </dt>
              <dd :key="item.text" class="programming__detail-text">
                {{ item.text }}
              </dd>
            </template>
          </dl>
        </div>
      </div>
    </section>
    <section class="l-content__section">
      <h2 class="c-title c-title--level-2">Tool</h2>
      <div class="l-content__body">
        <div class="tool">
          <ul class="tool__list">
            <li v-for="item in tool.list" :key="item" class="tool__list-item">
              {{ item }}
            </li>
          </ul>
          <p class="tool__text">{{ tool.description }}</p>
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
