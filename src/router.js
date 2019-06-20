import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index/index'
import Login from './components/login/login'
import Logon from './components/login/logon'
import user from './components/user/user'
import write from './components/write/write'
import cdgs from './components/cont-cdgs/Text.vue'
import zuozheC from './components/zxj/zuozheC'
import xihuan from './components/zxj/xihuan'
import scgz from './components/zxj/scgz'
import center from './components/center/center';
import Home from './components/center/Home.vue';
import Info from './components/center/Info.vue';
import Xihuan from './components/center/xihuan.vue';
import Guanzhu from './components/center/guanzhu.vue';
import Dianzan from './components/center/dianzan.vue';
import Qita from './components/center/qita.vue';
import sc from './components/zt/shoucang'
import gm from './components/zt/goumai'
import qb from './components/qiaobao/qb'
import help from './components/help/help'
import gzz from './components/zxj-2/guanzhu'
import guanzhu2 from './components/zxj-2/guanzhu2'
import guanzhu3 from './components/zxj-2/guanzhu3'
import guanzhu4 from './components/zxj-2/guanzhu4'
import guanzhu5 from './components/zxj-2/guanzhu5'
import guanzhu6 from './components/zxj-2/guanzhu6'
import shezhi from './components/shezhi/shezhi'
import grzl from './components/shezhi/grzl.vue'
import jcsz from './components/shezhi/jcsz.vue'
import hmd from './components/shezhi/hmd.vue'
import zssz from './components/shezhi/zssz.vue'
import zhsz from './components/shezhi/zhsz.vue'
import chulian from './components/chulian/chulian'
import lll from './components/chulian/comment-list.vue'
import geren from './components/lb/lb.vue'
import sjgrzy02 from './components/zxj/sjgrzy02.vue'
import sjgrzy03 from './components/zxj/sjgrzy03.vue'
import sjgrzy04 from './components/zxj/sjgrzy04.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      component:index
    },
    {
      path:'/lll',
      component:lll
    },
    {
      path: '/geren',
      component:geren
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/logon',
      component:Logon
    },
    {
      path:'/user',
      component:user
    },
    {
      path:'/write',
      component:write
    },
    {
      path:'/chulian',
      component:chulian
    },
    {
      path:'/cdgs',
      component:cdgs
    },
    {
      path:'/zuozheC',
      component:zuozheC,
      children:[
        {
        path:'/',
        component:sjgrzy02
      },
      {
        path:'/sjgrzy03',
        component:sjgrzy03
      },
      {
        path:'/sjgrzy04',
        component:sjgrzy04
      }
      ],
    },
    {
      path:'/xihuan',
      component:xihuan
    },
    {
      path:'/scgz',
      component:scgz
    },
    {
      path: '/xx',
      component: center,
      children:[
        {
          path: '/',
          name: 'home',
          component: Home,
        },
        {
          path: '/info',
          name: 'info',
          component: Info,
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './components/center/About'),
        },
        {
          path: '/xh',
          name: 'xihuan',
          component: Xihuan,
        },
        {
          path: '/Guanzhu',
          name: 'Guanzhu',
          component: Guanzhu,
        },
        {
          path: '/dianzan',
          name: 'dianzan',
          component: Dianzan,
        },
        {
          path: '/qita',
          name: 'qita',
          component: Qita,
        },
      ]
    },
    {
      path:'/sc',
      component:sc
    },
    {
      path:'/gm',
      component:gm
    },
    {
      path:'/qb',
      component:qb
    },
    {
      path:'/help',
      component:help
    },
    {
      path:'/gzz',
      component:gzz,
      children:[
        {
          path:'/',
          component:guanzhu2
        },
        {
          path:'/guanzhu3',
          component:guanzhu3
        },
        {
          path:'/guanzhu4',
          component:guanzhu4
        },
        {
          path:'/guanzhu5',
          component:guanzhu5
        },
        {
          path:'/guanzhu6',
          component:guanzhu6
        }
      ]
    },
    {
      path:'/shezhi',
      component:shezhi,
      children:[
        {
          path:'/',
          component:jcsz
        },
        {
          path:'/grzl',
          component:grzl
        },
        {
          path:'/hmd',
          component:hmd
        },
        {
          path:'/zssz',
          component:zssz
        },
        {
          path:'/zhsz',
          component:zhsz
        }
      ]
    }
  ]
})
