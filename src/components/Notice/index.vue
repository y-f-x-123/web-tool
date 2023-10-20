<template>
  <div class="my-notice" v-if="props.show">
    <div class="mask"></div>
    <div class="card" @click.stop>
      <div class="card-header">
        <h3>
          <slot name="title">重要通知</slot>
        </h3>
        <Close @click="onClose" />
      </div>
      <div class="card-body">
        <slot>
          <div class="inputInfo">
            <div class="input__container">
              <label class="input__label">search name</label>
              <input
                v-model="search.key"
                placeholder="Enter What do you want to search"
                class="input"
                name="text"
                type="text"
                autocomplete="off"
              />
              <p class="input__description">What are you looking for?</p>
            </div>
          </div>
          <div class="search">
            <div class="input__container">
              <div class="shadow__input"></div>
              <button class="input__button__shadow" @click="handleSearch">
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  height="20px"
                  width="20px"
                >
                  <path
                    d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
                    fill-rule="evenodd"
                    fill="#17202A"
                  ></path>
                </svg>
              </button>
              <input
                v-model="search.password"
                type="text"
                name="text"
                class="input__search"
                placeholder="Enter keyword password"
                autocomplete="off"
                @keyup.enter="handleSearch"
              />
            </div>
          </div>
          <div class="result">
            <div class="card">
              <h3 class="card__title">results</h3>
              <p class="card__content">{{ data[index]?.addr }}</p>
              <div class="card__date">keyword：{{ data[index]?.name }}</div>
              <div class="card__arrow" @click="nextpage">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="15"
                  width="15"
                >
                  <path
                    fill="#fff"
                    d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </slot>
      </div>

      <!-- <footer>
        <div class="card-confirm" @click="onStop">今天不再通知</div>
        <div class="card-confirm" @click="onStop2">以后不再通知</div>
      </footer> -->
    </div>
  </div>
</template>

<script setup>
import Close from '@/components/Close/index.vue'
import { reactive, toRefs } from 'vue'

const props = defineProps({
  show: false
})

const emit = defineEmits(['update:show'])

const state = reactive({
  search: {
    key: '',
    password: ''
  },
  data: [{ name: 'null', addr: 'Nothing' }],
  index: 0
})

function handleSearch() {
  const { key, password } = state.search
  if (key === 'vpn' && password === 'showaddress') {
    const vpn = [
      {
        name: 'ikuuu-vpn',
        addr: 'https://ikuuu.art/'
      },
      {
        name: 'ikuuu-vpn',
        addr: 'https://ikuuu.uk'
      }
    ]
    state.data = vpn
  } else {
    state.data = [{ name: key, addr: 'no find anything' }]
  }
}

function nextpage() {
  const datalen = state.data.length - 1
  datalen == state.index ? (state.index = 0) : state.index++
}

const onClose = () => {
  emit('update:show', false)
}

const { data, index, search } = toRefs(state)
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
    box-sizing: border-box;
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

.card-body {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;

  .search {
    width: 260px;
    .input__container {
      position: relative;
      background: rgba(255, 255, 255, 0.664);
      padding: 10px 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      border-radius: 22px;
      max-width: 300px;
      transition: transform 400ms;
      transform-style: preserve-3d;
      transform: rotateX(15deg) rotateY(-20deg);
      perspective: 500px;
    }

    .shadow__input {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      bottom: 0;
      z-index: -1;
      filter: blur(30px);
      border-radius: 20px;
      background-color: #999cff;
      background-image: radial-gradient(
          at 85% 51%,
          hsla(60, 60%, 61%, 1) 0px,
          transparent 50%
        ),
        radial-gradient(at 74% 68%, hsla(235, 69%, 77%, 1) 0px, transparent 50%),
        radial-gradient(at 64% 79%, hsla(284, 72%, 73%, 1) 0px, transparent 50%),
        radial-gradient(at 75% 16%, hsla(283, 60%, 72%, 1) 0px, transparent 50%),
        radial-gradient(at 90% 65%, hsla(153, 70%, 64%, 1) 0px, transparent 50%),
        radial-gradient(at 91% 83%, hsla(283, 74%, 69%, 1) 0px, transparent 50%),
        radial-gradient(at 72% 91%, hsla(213, 75%, 75%, 1) 0px, transparent 50%);
    }

    .input__button__shadow {
      cursor: pointer;
      border: none;
      background: none;
      transition: transform 400ms, background 400ms;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 12px;
      padding: 5px;
    }

    .input__button__shadow:hover {
      background: rgba(255, 255, 255, 0.411);
    }

    .input__search {
      width: 100%;
      border-radius: 20px;
      outline: none;
      border: none;
      padding: 8px;
      position: relative;
    }
  }
  .inputInfo {
    width: 280px;
    .input__container {
      max-width: 400px;
      display: flex;
      flex-direction: column;
      gap: 6px;
      background: rgba(255, 255, 255, 0.3);
      padding: 15px;
      border-radius: 20px;
      position: relative;
    }

    .input__container::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
      filter: blur(25px);
      border-radius: 20px;
      background-color: #e499ff;
      background-image: radial-gradient(
          at 47% 69%,
          hsla(17, 62%, 65%, 1) 0px,
          transparent 50%
        ),
        radial-gradient(at 9% 32%, hsla(222, 75%, 60%, 1) 0px, transparent 50%);
    }

    .input__label {
      display: block;
      margin-left: 0.4em;
      color: #000;
      text-transform: uppercase;
      font-size: 0.9em;
      font-weight: bold;
    }

    .input__description {
      font-size: 0.6em;
      font-weight: bold;
      text-align: center;
      color: rgba(0, 0, 0, 0.5);
    }

    .input {
      border: none;
      outline: none;
      width: 100%;
      padding: 0.6em;
      padding-left: 0.9em;
      border-radius: 20px;
      background: #fff;
      transition: background 300ms, color 300ms;
    }

    .input:hover,
    .input:focus {
      // color: #fff;
    }
  }
  .result {
    margin-top: 50px;
    /* this card is inspired form this - https://georgefrancis.dev/ */
    .card {
      --border-radius: 0.75rem;
      --primary-color: #7257fa;
      --secondary-color: #3c3852;
      width: 300px;
      height: 200px;
      font-family: 'Arial';
      padding: 1rem;
      cursor: pointer;
      border-radius: var(--border-radius);
      background: #f1f1f3;
      box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 3%);
      position: relative;
    }

    .card > * + * {
      margin-top: 1.1em;
    }

    .card .card__content {
      color: var(--secondary-color);
      font-size: 0.86rem;
    }

    .card .card__title {
      padding: 0;
      font-size: 1.3rem;
      font-weight: bold;
      color: var(--primary-color);
    }

    .card .card__date {
      color: #6e6b80;
      font-size: 0.8rem;
    }

    .card .card__arrow {
      position: absolute;
      background: var(--primary-color);
      padding: 0.4rem;
      border-top-left-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
      bottom: 0;
      right: 0;
      transition: 0.2s;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .card svg {
      transition: 0.2s;
    }

    /* hover */
    // .card:hover .card__title {
    //   color: var(--primary-color);
    //   text-decoration: underline;
    // }

    .card:hover .card__arrow {
      background: #111;
    }

    .card:hover .card__arrow svg {
      transform: translateX(3px);
    }
  }
}
</style>
