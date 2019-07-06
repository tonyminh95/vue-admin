import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
// import './registerServiceWorker'
// import ArgonDashboard from './plugins/argon-dashboard'

Vue.use(Buefy)

Vue.config.productionTip = false

// Vue.use(ArgonDashboard)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
