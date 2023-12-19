<template>
  <header class="header flex">
    <router-link class="navigation-link" to="tools">工具</router-link>
    <router-link class="navigation-link" to="notes">文档</router-link>
    <router-link class="navigation-link" to="games">游戏</router-link>
    <router-link class="navigation-link" to="relax">摸鱼</router-link>
    <MyButton style="height: 28px" @click="show = true">其他工具</MyButton>
  </header>
  <main class="content">
    <router-view v-slot="{ Component, route }">
      <keep-alive>
        <Transition name="contentbox">
          <component :is="Component" :key="route.name" />
        </Transition>
      </keep-alive>
    </router-view>
  </main>
  <Notice v-model:show="show" v-if="show">
    <template #title>其他工具</template>
  </Notice>
</template>

<script setup>
import { reactive, ref } from 'vue'
import MyButton from '../common/MyButton.vue'
import Notice from '@/components/Notice/index.vue'

const show = ref(false)

let siteData = reactive({
  site_pv: 0,
  site_uv: 0
})
if (localStorage.getItem('ABIN_SITE_DATA')) {
  siteData = localStorage.getItem('ABIN_SITE_DATA')
}
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  width: 100%;
  height: $--header-height;
  padding: 0 $--padding-side;
  justify-content: center;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  background-color: rgba($color: $--color-header, $alpha: 0.5);

  .navigation-link {
    position: relative;
    display: flex;
    padding: 12px 18px;
    flex-direction: row;
    align-items: center;
    flex: 0 0 auto;
    transition: color 200ms ease;
    color: #546681;
    font-size: 16px;
    text-decoration: none;

    &:hover {
      color: #333333;
    }

    &:hover::before {
      content: '';
      position: absolute;
      top: auto;
      right: 0;
      bottom: 0;
      left: 1rem;
      height: 2px;
      background-color: #1e80ff;
      width: calc(100% - 2rem);
    }
  }

  .router-link-active {
    color: $--color-menu-active;
    font-weight: bold;
  }
}

.content {
  margin-top: calc($--header-height);
  padding-top: 20px;
  padding-left: $--padding-side;
  padding-right: $--padding-side;
  width: 100%;
  height: calc(100% - $--header-height);
  background: rgba($color: $--color-body, $alpha: 0.8);
  overflow-y: auto;
}

@media (max-width: 480px) {
  header {
    bottom: 0;
    top: unset !important;
    box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.05);
  }

  .content {
    padding-top: 20px;
    padding-bottom: calc($--header-height + 20px);

    &::-webkit-scrollbar {
      display: none;
    }
  }

  footer {
    display: none;
  }
}
@media (max-width: 480px) {
  .navigation-link-pc {
    display: none !important;
  }
}

// 动画
.contentbox-enter-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.contentbox-enter-from {
  transform: scale(0.5);
  opacity: 0;
}
</style>
