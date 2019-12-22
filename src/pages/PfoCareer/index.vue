<template>
  <div class="container">
    <h1>Works</h1>
    <p>{{ description }}</p>
    <section v-for="item in list" :key="item.key">
      <h2>{{ item.companyName }}</h2>
      <dl>
        <dt>Job / 職種</dt>
        <dd>{{ item.job }}</dd>
        <dt>Status / 雇用形態</dt>
        <dd>{{ item.status }}</dd>
        <dt>Period / 期間</dt>
        <dd>{{ item.period }}</dd>
      </dl>
      <p>{{ item.description }}</p>
      <ul class="project-list">
        <li v-for="project in item.projects" :key="project.key">
          <figure>
            <div>
              <PfoLazyLoadImg
                :src="project.image.src"
                :alt="project.image.alt"
              />
            </div>
            <figcaption>{{ project.siteName }}</figcaption>
          </figure>
        </li>
      </ul>
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
