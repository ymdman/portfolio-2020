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
        <ul class="programming-list">
          <li
            v-for="item in programmingList"
            :key="item.key"
            class="programming-list__item"
          >
            <div>{{ item.language }}</div>
            <v-progress-bar
              :glow-width="item.score"
              class="programming-list__progress-bar"
            />
          </li>
        </ul>
        <dl class="detail-list">
          <template v-for="item in skillDetailList">
            <h3 :key="item.title" class="detail-list__title">
              {{ item.title }}
            </h3>
            <dd :key="item.text" class="detail-list__text">
              {{ item.text }}
            </dd>
          </template>
        </dl>
      </div>
    </section>
    <section class="l-content__section">
      <h2 class="c-title c-title--level-2">Tool</h2>
      <div class="l-content__body">
        <ul>
          <li v-for="item in toolList" :key="item">
            {{ item }}
          </li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus est
          laborum id officiis minus modi veniam amet illum vero nisi pariatur
          eos sapiente, voluptatem dicta sit incidunt, consectetur, similique
          ea.
        </p>
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
