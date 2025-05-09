import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store  from './store'
import Particles from "vue3-particles";
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'



const app = createApp(App)

app.use(router)
app.use(store)
app.use(Particles)
app.use(VueSweetalert2)
app.mount('#app')
