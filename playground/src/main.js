import { setupRouter } from '@play/router'
import { setupStore } from '@play/store'
import { createApp } from 'vue'
import App from './App.vue'

import '@play/styles'

const app = createApp(App)

setupStore(app)
setupRouter(app)

app.mount('#app')
