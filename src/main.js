import Vue from 'vue'
import App from './App.vue'
import AppIcon from './components/AppIcon.vue'

Vue.component("AppIcon", AppIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
