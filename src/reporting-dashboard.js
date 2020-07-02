import Vue from 'vue'
import App from './reporting-dashboard.vue'
import "./assets/custom.scss" 

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
