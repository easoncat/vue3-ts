import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import SvgIcon from '@/icons'
import '@/styles/index.scss'

// createApp(App).use(router).use(ElementPlus).mount('#app')
const app = createApp(App)
SvgIcon(app)
app.use(router).mount('#app')
