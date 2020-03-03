import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'

/** note: sub-menu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']    will control the page roles (you can set multiple roles)
    title: 'title'               the name show in sub-menu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if true, the page will no be cached(default is false)
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
    affix: true                  if true, the tag will affix in the tags-view
  }
**/
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        // 魔法注释
        // const App = () => import(/* webpackChunkName:'login'*/ '../component/Login.vue');

        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'framework/index'
  },
  {
    path: '/documentation',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation/index'),
        name: 'Documentation',
        meta: { title: 'documentation', icon: 'documentation', affix: true }
      }
    ]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

export const asyncRoutes = [
  {
    path: '/framework',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/framework/index'),
        name: 'Frameworks',
        meta: { title: 'frameworks', icon: 'icon', noCache: true }
      }
    ]
  },

  {
    path: '/project',
    component: Layout,
    redirect: '/project/list',
    name: 'Projects',
    meta: { title: 'projects', icon: 'icon', noCache: true },
    children: [
      {
        path: 'create',
        component: () => import('@/views/project/create'),
        name: 'CreateProject',
        meta: { title: '创建工程', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/project/edit'),
        name: 'EditProject',
        meta: { title: '编辑工程', noCache: true },
        hidden: true
      },
      {
        path: 'createFromFramework/:framework',
        component: () => import('@/views/project/create'),
        name: 'CreateProjectFromFramework',
        meta: { title: '编辑工程', noCache: true },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/project/list'),
        name: 'ProjectList',
        meta: { title: '工程列表', icon: 'list' ,noCache:true}
      }
    ]
  },
  {
    path: '/entity',
    component: Layout,
    redirect: '/entity/list',
    name: 'Entities',
    meta: { title: 'entities', icon: 'icon', noCache: true },
    children: [
      {
        path: 'create',
        component: () => import('@/views/entity/create'),
        name: 'CreateEntity',
        meta: { title: '创建实体', icon: 'edit' },
        hidden: true
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/entity/edit'),
        name: 'EditEntity',
        meta: { title: '编辑实体', noCache: true },
        hidden: true
      },
      {
        path: 'editFromProject/:projectId(\\d+)',
        component: () => import('@/views/entity/edit'),
        name: 'EditEntityFromProject',
        meta: { title: '编辑实体', noCache: true },
        hidden: true
      },
      {
        path: 'createFromProject/:projectId',
        component: () => import('@/views/entity/create'),
        name: 'CreateEntityFromProject',
        meta: { title: '从工程创建实体', noCache: true },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/entity/list'),
        name: 'EntityList',
        meta: { title: '实体列表', icon: 'list',noCache:true }
      }
    ]
  }

  /** When your routing table is too long, you can split it into small modules**/

]
