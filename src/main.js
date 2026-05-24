import { createApp } from 'vue'
import router from './router/index.js'
import App from './App.vue'

import './styles/tokens.css'
import './styles/global.css'

createApp(App).use(router).mount('#app')
