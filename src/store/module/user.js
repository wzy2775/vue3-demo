/*
 * @Autor: ziyu wang
 * @Date: 2022-01-21 11:27:23
 * @LastEditors: ziyu wang
 * @LastEditTime: 2022-03-01 11:19:45
 * @Description:
 */
import { userLogin, accessPages } from '@/service/user';
import { backLogin } from '@/utils/tools/util';
const user = {
	state() {
		return {
			userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : '',
			token: localStorage.getItem('token'),
			userRole: localStorage.getItem('userRole'),
			isCheckToken: false
		};
	},
	actions: {
		async userLogin({ commit }, ticket) {
			const res = await userLogin(ticket).catch(() => {
				backLogin();
			});
			if (res) {
				let roles = await accessPages({
					token: res.Token
				});
				roles = Array.from(new Set(roles));
				const userInfo = {
					StaffId: res.StaffId,
					StaffName: res.StaffName
				};
				commit('setUser', {
					userInfo,
					token: res.Token,
					roles: res.UserRoles.concat(roles)
				});
			}
		},
		async checkToken({ commit }, token) {
			await accessPages({
				token: token
			});
			commit('setIsCheckToken', true);
		}
	},
	mutations: {
		setIsCheckToken(state, data) {
			state.isCheckToken = data;
		},
		setUser(state, { userInfo, token, roles }) {
			state.userInfo = userInfo;
			state.token = token;
			state.userRole = roles;
			state.isCheckToken = true;
			localStorage.setItem('token', token);
			localStorage.setItem('userInfo', JSON.stringify(userInfo));
			localStorage.setItem('userRole', roles);
		}
	}
};
export default user;
