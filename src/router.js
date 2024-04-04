import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './home/home-view.vue';

const routes = [
	{ path: '/', component: HomeView }
]

const router = createRouter({
	history: createMemoryHistory(),
	routes,
})

export default router