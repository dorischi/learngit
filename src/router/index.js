import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '../components/home'
import film from '../components/film'
import card from '../components/card'
import commingsoon from '../components/commingsoon'
import nowplaying from '../components/nowplaying'
import detial from '../components/detial'
import detail from '../components/detial'
import cardlog from '../components/cardlog'
import cardelec from '../components/cardelec'


export default new Router({
  routes: [
    {
      path: '/home',
      name: '主页',
      component: home
    },
    {
      path: '/film',
      component: film,
      children:[
      		{
      			path:"nowplaying",
      			name:"正在上映",
      			component:nowplaying
      		},
      		{
      			path:"commingsoon",
      			name:"即将上映",
      			component:commingsoon
      		},
          {
            path:"/",
            redirect:"nowplaying"
          }
      ]
    },
    {
      path: '/card',
      component: card,
      children:[
        {
          path:"cardlog",
          name:'卖座卡',
          component:cardlog
        },
        {
          path:"cardelec",
          name:'电子卖座卡',
          component:cardelec
        },
        {
          path:"/",
          redirect:"cardlog"
        }
      ]
    },
    {
      path: '/detial/:id',
      name: '详情页',
      component: detial
      },
      {
        path: '/detail/:id',
        component: detail
        }
        
  ]
})
