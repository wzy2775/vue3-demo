/*
 * @Autor: ziyu wang
 * @Date: 2022-01-19 15:02:41
 * @LastEditors: ziyu wang
 * @LastEditTime: 2022-02-25 13:57:33
 * @Description:
 */
import { createStore } from 'vuex';
import user from './module/user';
const store = createStore({
	modules: {
		user: user
	}
});
export const myStore = function () {
	return store;
};
export default store;
