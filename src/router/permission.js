/*
 * @Autor: ziyu wang
 * @Date: 2022-02-25 09:37:24
 * @LastEditors: ziyu wang
 * @LastEditTime: 2022-02-25 15:16:46
 * @Description:
 */
import router from './index';
import { myStore } from '@/store';
import { backLogin } from '@/utils/tools/util';
const vuexStore = myStore();
router.beforeEach((to, from, next) => {
	let serviceTicket = to.query['ServiceTicket'] || '';
	let token = localStorage.getItem('token');
	if (serviceTicket && !token) {
		vuexStore.dispatch('userLogin', serviceTicket);
		loginNext(to, next);
	} else {
		if (token) {
			if (!vuexStore.state.user.isCheckToken) {
				vuexStore.dispatch('checkToken', token);
			}
			loginNext(to, next);
		} else {
			backLogin();
			return;
		}
	}
});
function loginNext(to, next) {
	const userRole = localStorage.getItem('userRole') || [];
	const auth = to?.meta?.roles;
	// 角色无权限则跳转至403
	if (auth && !userRole.some((role) => auth.includes(role))) {
		return next({ name: 'noAuth' });
	} else {
		next();
	}
}
