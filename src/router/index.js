import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'home',
      component:()=>import('@/views/Home'),
      meta:{
        isFooterShow:true
      }
    },
    {
      path:'/search',
      name:'search',
      component:()=>import('@/views/Search'),
      meta:{
        isFooterShow:true
      }
    },
    {
      path:'/order',
      name:'order',
      component:()=>import("@/views/Order"),
      meta:{
        isFooterShow:true
      }
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('@/views/Login')
    },
    {
      path:'/my',
      name:'my',
      component:()=>import('@/views/my'),
      meta:{
        isFooterShow:true
      }
    }
  ]
})
