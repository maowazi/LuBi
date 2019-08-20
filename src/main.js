import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store';
import pulic from "./components/pulic/pulic";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Kalendar from 'vue-kalendar'

Vue.use(Kalendar)
Vue.config.productionTip = false
Vue.use(pulic);
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
