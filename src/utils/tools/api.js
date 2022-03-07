/*
 * @Autor: ziyu wang
 * @Date: 2022-01-27 15:44:10
 * @LastEditors: ziyu wang
 * @LastEditTime: 2022-02-25 14:42:06
 * @Description:
 */
import axios from 'axios';
import store from '@/store';
import { backLogin } from '@/utils/tools/util';
const BASEURL = import.meta.env.VITE_BASE_API;
const service = axios.create({
	baseURL: BASEURL,
	timeout: 10000
});
service.interceptors.request.use((config) => {
	if (config.url.indexOf('/Account/Login') == -1) {
		const token = config.data.get('token') || store.state.user.token;
		if (token) {
			config.headers.Authorization = 'Bearer ' + token;
		}
	}
	return config;
});
service.interceptors.response.use(
	(res) => {
		return new Promise((resolve, reject) => {
			let success = res.status >= 200 && res.status < 300;
			let data = res.data;
			if (success) {
				if (data.Token) {
					resolve(data);
				} else if (data.Success) {
					resolve(data.Data);
				} else if (data && res.statusText && res.config.responseType == 'blob') {
					resolve({
						data: data,
						config: res.headers['content-disposition']
					});
				} else {
					// if (data.Message) {
					//   this.$message.error(data.Message);
					// }
					reject(data);
				}
			} else {
				//   this.$notify.error({
				//     title: "Http Request Error",
				//     message: "StatusCode: " + res.status,
				//   });
				reject(data);
			}
		});
	},
	(err) => {
		let res = err.response;
		if (res.status == 400) {
			// let errors = res.data.errors;
			// let key = Object.keys(errors)[0];
			// this.$message.error(errors[key][0]);
		} else if (res.status == 403) {
			// this.$notify.error({
			// 	title: 'Request Forbidden',
			// 	message: 'You do not have permission to access'
			// });
		} else if (res.status == 401) {
			// this.$notify.error({
			// 	title: 'Not auth',
			// 	message: 'Not auth'
			// });
			// router.replace({
			// 	path: '/403'
			// });
		} else if (res.status == 600 || err.status == 600) {
			// this.$notify.error({
			// 	title: 'Login status is invalid',
			// 	message: 'Login is invalid, please refresh the page'
			// });
			backLogin();
		} else {
			// this.$notify.error({
			// 	title: 'Request Error',
			// 	message: 'Application Server Exception'
			// });
		}
		return Promise.reject(res);
	}
);
const http = {
	get(url, data) {
		return service.get(url, data);
	},
	post(url, data, config) {
		let formData = new FormData();
		for (let key in data) {
			let obj = data[key];
			if (typeof obj == 'object' && key != 'file') {
				obj = JSON.stringify(obj);
			}
			formData.append(key, obj);
		}
		return service.post(url, formData, config);
	}
};
export default http;
