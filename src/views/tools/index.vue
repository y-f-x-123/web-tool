<template>
  <div class="page">
    <div class="navigation-tools">
      <dl>
        <dd
          v-for="(nav, navindex) in toolList"
          :key="navindex"
          :id="navindex"
          :class="{ nav_active: navindex == curIndex }"
        >
          <a :href="`#${nav.id}`" @click="toNav(navindex)">{{ nav.name }}</a>
        </dd>
      </dl>
    </div>
    <div class="tools-box">
      <section v-for="(tool, index) in toolList" :key="index">
        <span :id="tool.id" class="point"></span>
        <header>{{ tool.name }}</header>
        <a
          target="_blank"
          class="tool-item"
          v-for="link in tool.collection"
          :key="link.link"
          :href="link.link"
          ><img
            v-if="!link.isSvg"
            :data-src="link.icon"
            class="img"
            alt=""
            :src="link.icon"
          />

          <svg-icon v-else class="img" :name="link.icon"></svg-icon>
          <span class="tool-name">{{ link.name }}</span></a
        >
      </section>
    </div>

    <!-- <Notice
      >⛅ 本站已使用 nuxt3 重构~<br />
      💥 即日起，本站将不再更新内容!!!<br />
      💌 建议改换使用新站哦～见谅～
      <br /><br />
      🎁 新站地址 ----
      <a
        target="_blank"
        href="https://web-abin.github.io/abinWeb/"
        style="color: #3370ff; text-decoration: underline"
        >https://web-abin.github.io/abinWeb/</a
      >
    </Notice> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import toolList from '@/module/tools'
// import Notice from '@/components/Notice/index.vue'

const curIndex = ref(0)
const toNav = (index) => {
  curIndex.value = index
}
</script>

<style lang="scss" scoped>
.page {
  margin: 0 auto;
  position: relative;
  max-width: 1300px;
}
.navigation-tools {
  position: fixed;
  width: fit-content;
  height: fit-content;
  max-height: calc(100% - 110px);
  padding: 8px 0;
  box-sizing: border-box;
  transition: all 0.2s linear;
  overflow: auto;
  dd {
    margin: 0;
    padding: 6px 0;
    letter-spacing: 0.5px;
    a {
      font-size: 14px;
      color: #5e5d5b;
      display: inline-block;
      padding: 2px 4px;
      transition: 0.1s;
      text-decoration: none;
      &:hover {
        background: #ff5a00;
        border-radius: 3px;
      }
    }
  }
  .nav_active {
    a {
      color: #ff5a00;
      background: transparent !important;
    }
  }
}
.tools-box {
  width: 1080px;
  min-height: 800px;
  margin: 0 auto;
  section {
    position: relative;
    width: 100%;
    min-height: 166px;
    padding: 42px 48px 10px 48px;
    border-radius: 8px;
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 20px;
    background-color: rgba($color: $--color-box, $alpha: 0.6);
    .point {
      position: absolute;
      left: 0;
      top: -60px;
      opacity: 0;
    }
    header {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      line-height: 42px;
      font-size: 15px;
      padding-left: 46px;
      font-weight: 600;
      flex-shrink: 0;
      border-bottom: 0.5px solid $--color-border;
    }
    .tool-item {
      width: 164px;
      height: 42px;
      flex-shrink: 0;
      line-height: 42px;
      cursor: pointer;
      white-space: normal;
      text-overflow: ellipsis;
      overflow: hidden;
      .img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        vertical-align: middle;
      }
      .tool-name {
        font-size: 14px;
        color: $--color-text;
        vertical-align: middle;
      }
    }
  }
}

@media (max-width: 480px) {
  .navigation-tools {
    display: none;
    // top: 0;
    // dl{
    //   display: flex;
    // }
  }
  .tools-box {
    width: unset;
    section {
      padding: 58px 16px 16px 16px;
      header {
        padding: 0 16px;
      }
      .tool-item {
        width: 140px;
      }
    }
  }
}
</style>
