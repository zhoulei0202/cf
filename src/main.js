// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import echarts from 'echarts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
import importUrl from "../static/setting";
import flex from "raziel-flex"
flex(1920)
import qs from 'qs';
Vue.prototype.$qs = qs;

Vue.prototype.$importUrl = importUrl

// axios.defaults.headers.post['Content-Type'] = 'json';

Vue.prototype.$axios = axios
Vue.prototype.HOME='/api'
// axios.defaults.headers.post["Content-type"]="application/json"

Vue.prototype.$echarts = echarts
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
