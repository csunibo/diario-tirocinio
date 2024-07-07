import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { storeSettings, key } from '@/store'

createApp(App).use(storeSettings, key).mount('#app')
