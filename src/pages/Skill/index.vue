<template>
  <div class="skill">
    <div class="l-content">
      <section class="l-content__section">
        <h1 class="c-title c-title--level-1">Skill</h1>
        <div class="l-content__body">
          <p class="description">{{ description }}</p>
        </div>
      </section>
      <section class="l-content__section">
        <h2 class="c-title c-title--level-2">Programming + Library</h2>
        <div class="l-content__body">
          <ul class="graph-list">
            <li
              v-for="item in programming.typeList"
              :key="item.key"
              class="graph-list__item"
            >
              <p class="graph-list__title">{{ item.language }}</p>
              <v-bar-graph :glow-width="item.score" class="graph-list__graph" />
            </li>
          </ul>
          <dl class="detail-list c-dfn-list">
            <template v-for="item in programming.detailList">
              <dt :key="item.title" class="c-dfn-list__term">
                {{ item.title }}
              </dt>
              <dd :key="item.text" class="c-dfn-list__desc">
                {{ item.text }}
              </dd>
            </template>
          </dl>
        </div>
      </section>
      <section class="l-content__section">
        <h2 class="c-title c-title--level-2">Tool</h2>
        <div class="l-content__body">
          <ul class="tool-list">
            <li v-for="item in tool.list" :key="item" class="tool-list__item">
              <V-tag :label="item" />
            </li>
          </ul>
          <p class="tool-description">{{ tool.description }}</p>
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
