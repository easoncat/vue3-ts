import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import '@/styles/index.scss'

// createApp(App).use(router).use(ElementPlus).mount('#app')
createApp(App).use(router).mount('#app')
