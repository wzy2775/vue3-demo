/*
 * @Autor: ziyu wang
 * @Date: 2021-09-13 15:40:44
 * @LastEditors: ziyu wang
 * @LastEditTime: 2022-02-25 10:19:04
 * @Description:
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import './router/permission';
import mitt from 'mitt';
import directives from './utils/directive';
import store from './store';
import http from './utils/tools/api';
import ElementPlus from 'element-plus';
import './assets/scss/index.scss';
const app = createApp(App);

app.use(router);
app.use(directives);
app.use(store);
app.use(ElementPlus);
// 错误信息捕捉
app.config.errorHandler = (err, vm, info) => {
	console.log(err);
	console.log(vm);
	console.log(info);
};
// 警告信息捕捉，生产环境忽略
app.config.warnHandler = function () {};
// 在prototype上添加属性
app.config.globalProperties.$api = http;
app.config.globalProperties.$bus = new mitt();

/* 全局mixin */
// app.config.optionMergeStrategies.hello = (parent, child) => {
// 	return `Hello, ${child}`;
// };
// app.mixin({
// 	hello: 'Vue'
// });

app.mount('#app');
