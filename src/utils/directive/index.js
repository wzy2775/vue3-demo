/*
 * @Autor: ziyu wang
 * @Date: 2021-09-15 11:37:55
 * @LastEditors: ziyu wang
 * @LastEditTime: 2022-02-23 13:46:47
 * @Description:
 */

export default {
	install(app) {
		// app是Vue实例。 e.g:  app = createApp()
		app.directive('focus', {
			mounted(el, binding) {
				console.log(el, binding.value);
			}
		});
	}
};
