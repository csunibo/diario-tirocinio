import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { storeSettings, key } from '@/store'

// Save settings to localstorage every time there is a mutation
storeSettings.subscribe((_, state) => {
  localStorage.setItem('timeAsButton', JSON.stringify(state.timeAsButton))
})

createApp(App).use(storeSettings, key).mount('#app')
