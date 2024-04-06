import { createApp } from 'vue'
import BootstrapIcons from 'bootstrap-icons/bootstrap-icons.svg?raw'
import App from './App.vue'
import BootstrapIcon from './components/BootstrapIcon.vue'
import injectBootstrapIcons from './injectBootstrapIcons.ts'
import 'bootstrap/dist/css/bootstrap.min.css'

injectBootstrapIcons(BootstrapIcons)

const app = createApp(App)

app.component('BootstrapIcon', BootstrapIcon)

app.mount('#app')
