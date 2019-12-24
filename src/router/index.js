
import Vue from 'vue'   //引入Vue
//import Index from '@/components/Index.vue'
import Router from 'vue-router'  //引入vue-router
import Login from '@/components/Login.vue'
import Latest from '@/components/Latest.vue'
import Event from '@/components/Event.vue'
import Personal from '@/components/Personal.vue'
import PersonalFollow from '@/components/PersonalFollow.vue'
import PersonalFans from '@/components/PersonalFans.vue'

import PersonalNews from '@/components/PersonalNews.vue'



Vue.use(Router)  //Vue全局使用Router

export default new Router({
  routes: [              //配置路由，这里是个数组
    {                    //每一个链接都是一个对象
      path: '/login',         //链接路径
      name: 'login',     //路由名称，
      component: Login
    },
    {
      path: '/',
      redirect: '/latest'
    },
    {
      path: '/latest',
      name: 'latest',
      component: Latest
    },
    {
      path: '/event',
      name: 'event',
      component: Event
    },
    {
      path: '/user',
      redirect: '/user/all',
      name: 'user',
      component: Personal,
      children: [
        {
          path: '/user/follow',
          component: PersonalFollow
        },
        {
          path: '/user/fans',
          component: PersonalFans
        },
        {
          path: '/user/all',
          component: PersonalNews
        }

      ]
    },

  ],
  mode: 'history',

})

