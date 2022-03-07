/*
 * @Autor: ziyu wang
 * @Date: 2021-09-13 15:48:39
 * @LastEditors: ziyu wang
 * @LastEditTime: 2022-03-01 16:10:10
 * @Description: vue路由
 */
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.VITE_BASE_PATH),
	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			name: 'Home',
			component: () => import('@/views/home/index.vue')
		},
		{
			path: '/list',
			name: 'List',
			redirect: '/list/capabilityAssessment',
			component: () => import('@/views/list/List.vue'),
			children: [
				{
					path: '/list/capabilityAssessment',
					name: 'CapabilityAssessment',
					component: () => import('@/views/capability/index.vue')
				}
			]
		}
	]
});
export default router;
