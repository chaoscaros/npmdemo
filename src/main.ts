import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui'//element-ui 框架
import 'element-ui/lib/theme-chalk/index.css'//element-ui 框架css
import TestDemo from "testzcx01"
import 'testzcx01/lib/testzcx01.css';


Vue.config.productionTip = false;
Vue.use(ElementUI)
Vue.use(TestDemo)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
