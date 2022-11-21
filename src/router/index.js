import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

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
    path: '/*',
    name: 'Error',
    component: () => import(/* webpackChunkName: "about" */ '../views/ErrorView.vue')
  },

]

export function createRouter() {
	const router = new VueRouter({
		mode: 'history',
		base: process.env.BASE_URL,
		routes
	});

  
	router.beforeEach((to, from, next)=> {

		next();
	})

	router.afterEach((to, from)=> {

	})

	return router;

}


