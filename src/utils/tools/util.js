/*
 * @Autor: ziyu wang
 * @Date: 2022-02-24 16:20:39
 * @LastEditors: ziyu wang
 * @LastEditTime: 2022-02-25 10:30:32
 * @Description:
 */
export const backLogin = () => {
	localStorage.removeItem('userInfo');
	localStorage.removeItem('token');
	localStorage.removeItem('userRole');
	const href = location.href;
	let url = '';
	if (href.indexOf('ServiceTicket') == -1) {
		url = encodeURIComponent(location.href);
	} else {
		const pars = location.search.substring(1).split('&');
		for (let i = 0; i < pars.length; i++) {
			if (pars[i].indexOf('ServiceTicket') != -1) {
				pars.splice(i, 1);
				i--;
			}
		}
		url = location.href.split('?')[0] + `${pars.join('&') ? '?' : ''}` + pars.join('&');
		url = encodeURIComponent(url);
	}
	location.href = import.meta.env.VITE_APP_LOGIN + 'appcode=cat&ReturnUrl=' + url;
};
