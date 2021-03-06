import "bootstrap";
import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/styles/main.css";
import store from "./store";
import VueSkeletonLoader from "skeleton-loader-vue";

Vue.use(axios);
Vue.config.productionTip = false;
Vue.component("vue-skeleton-loader", VueSkeletonLoader);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
