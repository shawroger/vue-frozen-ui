import Vue from 'vue'

import App from './App.vue';
import FrozenUI  from 'vue-frozen-ui';
Vue.config.productionTip = false

/* eslint-disable */
Vue.use(FrozenUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
