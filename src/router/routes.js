import HomeView from '../views/HomeView.vue'


const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'NoAuthLogin',
      component: () => import(/* webpackChunkName: "about" */ '../views/member/LoginView.vue')
    },
    {
      path: '/join',
      name: 'NoAuthJoin',
      component: () => import(/* webpackChunkName: "about" */ '../views/member/JoinView.vue')
    },
    {
      path: '/video',
      name: 'videoMain',
      component: () => import(/* webpackChunkName: "about" */ '../components/youtube/VideoMain.vue')
    },
    {
      path: '/modifyPassword/:hash',
      name: 'NoAuthModifyPassword',
      component: () => import(/* webpackChunkName: "modifyPassword" */ '../views/member/ModifyPassword.vue')
    },
    {
      path: '/*',
      name: 'Error',
      component: () => import(/* webpackChunkName: "about" */ '../views/ErrorView.vue')
    },
  
  ]

  export default routes;