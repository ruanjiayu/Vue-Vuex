import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios'
Vue.prototype.axios = axios;

import store from './store'
import router from './router'

import App from './App'


Vue.config.productionTip = false;

// 路由跳转前
router.beforeEach((to,from,next) => {
  let isLogin = sessionStorage.getItem('isLogin');

  if(to.path === '/logOut'){
    sessionStorage.clear();
    next({path: '/login'});
  }else if (to.path === '/login'){
    if (isLogin !== null){
      next({path: '/main'})
    }
  }else if ( isLogin === null){
    next({path: '/login'})
  }
  next();
});
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
