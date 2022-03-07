/*
 * @Autor: ziyu wang
 * @Date: 2022-02-25 10:19:57
 * @LastEditors: ziyu wang
 * @LastEditTime: 2022-02-25 10:22:04
 * @Description:
 */
import http from '@/utils/tools/api';

export const userLogin = (ticket) => {
	return http.post('/Account/Login', {
		ServiceTicket: ticket
	});
};
export const accessPages = (data) => {
	return http.post('/User/AccessPages', data);
};
