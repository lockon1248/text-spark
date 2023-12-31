import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'animate.css'
import Vue3Marquee from 'vue3-marquee'
<<<<<<< HEAD
import { VueFire, VueFireAuth } from 'vuefire' //引入viewFire
import { firebaseApp } from './firebase' //引入viewFire

=======
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
>>>>>>> dev

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'

const vuetify = createVuetify({
  directives,
  components: {
    ...components,
    ...labsComponents,
  },
})


const pinia = createPinia()
const app = createApp(App)
  


app.use(Vue3Marquee)
app.use(router)
app.use(pinia)
<<<<<<< HEAD
=======
app.use(vuetify)
app.mount('#app') 


>>>>>>> dev

//使用viewfire
app.use(VueFire, {
    firebaseApp,
    modules: [
      VueFireAuth(),
    ],
  })

  app.mount('#app')
  