import { createApp, h } from 'vue'
import components from '@/components/UI'
import App from '@/App.vue'
import router from '@/router/router'

const app = createApp({
  render: () => h(App)
})

;(components as any).forEach((component: any) => {
  app.component(component.__name, component)
})

app.use(router).mount('#app')
