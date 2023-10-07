<template>
  <div class="my-notice" v-if="show" @click="onClose">
    <div class="mask"></div>
    <div class="card" @click.stop>
      <div class="card-header">
        <h3>重要通知</h3>
        <Close @click="onClose" />
      </div>
      <div class="card-body">
        <slot />
      </div>

      <footer>
        <div class="card-confirm" @click="onStop">今天不再通知</div>
        <div class="card-confirm" @click="onStop2">以后不再通知</div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import Close from '@/components/Close/index.vue'
import { ref } from 'vue'

const show = ref(true)
show.value =
  !window.localStorage.getItem('ABIN_NOT_NOTICE') ||
  Date.now() - window.localStorage.getItem('ABIN_NOT_NOTICE') * 1 > 86400000

const onClose = () => {
  show.value = false
}

const onStop = () => {
  //设置24小时的有效期
  window.localStorage.setItem('ABIN_NOT_NOTICE', Date.now())
  show.value = false
}

const onStop2 = () => {
  window.localStorage.setItem(
    'ABIN_NOT_NOTICE',
    new Date('2100/01/01 00:00:00').getTime()
  )
  show.value = false
}
</script>

<style scoped lang="scss">
.my-notice {
  position: relative;
  height: 100vh;
  z-index: 999;
  .mask {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .card {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 95%;
    max-width: 640px;
    height: 70vh;
    background-color: #fff;
    border-radius: 3px;
    &-header {
      padding: 20px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-body {
      padding: 0 24px 20px 24px;
      font-size: 14px;
      line-height: 1.8;
      color: rgb(51, 54, 57);
    }
    footer {
      position: absolute;
      bottom: 14px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
    }
    &-confirm {
      font-size: 13px;
      cursor: pointer;
      margin: 0 20px;
    }
  }
}
</style>
