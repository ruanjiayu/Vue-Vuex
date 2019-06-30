import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Main from '../views/Main'
import UserProfile from '../views/user/UserProfile'
import UserList from '../views/user/UserList'
import UserManage from '../views/user/UserManage'
import Error from '../views/error/404'

Vue.use(Router);

export default new Router({
  // 去掉URL中的#
  mode: 'history',
  routes: [
    {
      // 登录页面
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      //首页
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {path: '/user/profile/:id',name: 'UserProfile', component: UserProfile},
        {path: '/user/list/:type', name: 'UserList', component: UserList},
        {path: '/user/manage/:manage', name: 'UserManage', component: UserManage, props:true}
      ]
    },
    {
      // 位置的摆放不会影响到其他路由的跳转
      path: '*',
      name: 'Error',
      component: Error
    }
  ]
})
