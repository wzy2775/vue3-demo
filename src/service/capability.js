/*
 * @Autor: ziyu wang
 * @Date: 2022-03-01 16:17:23
 * @LastEditors: ziyu wang
 * @LastEditTime: 2022-03-01 16:17:25
 * @Description:
 */
import http from '@/utils/tools/api';

export const userLogin = (data) => {
	return http.post('/User/GetSelfList', data);
};
