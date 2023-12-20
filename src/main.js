import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import './module/tools/index'

import SvgIcon from '@/components/Icons/index.vue'
import 'virtual:svg-icons-register'
import './animation/ribbon'
import './animation/emojiCursor'

createApp(App).use(router).component('svg-icon', SvgIcon).mount('#app')
