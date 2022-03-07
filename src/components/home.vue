<!--
 * @Autor: ziyu wang
 * @Date: 2021-09-13 15:49:56
 * @LastEditors: ziyu wang
 * @LastEditTime: 2022-02-25 14:43:00
 * @Description: 
-->
<template>
	<p v-for="(item, index) in state.list" :key="index" ref="setItemRef" @click="ck">{{ item }}</p>
	<div>{{ a }}</div>
	<span>111111111111111</span>
</template>
<script setup>
	import { ref, reactive, onMounted, onBeforeUnmount, watch, nextTick, getCurrentInstance } from 'vue';
	// 声明基本类型变量
	let a = ref(1);
	// 声明引用类型变量
	const state = reactive({
		list: [1, 2, 3],
		c: 1
	});
	const { proxy } = getCurrentInstance();
	// let itemRefs = [];
	// // 代替$refs
	// const setItemRef = (el) => {
	//   itemRefs.push(el);
	// };
	const setItemRef = ref(null);
	const stopWatch = watch(
		() => state.c,
		(newVal) => {
			console.log(newVal);
		}
	);
	setTimeout(() => {
		// state.c++;
		// 停止监听
		stopWatch();
	}, 1000);
	onMounted(() => {
		// internalInstance.$api();
		//   console.log(proxy.$options.hello);
		proxy.$bus.on('bus', bus);
	});
	onBeforeUnmount(() => {
		proxy.$bus.off('bus');
	});
	const bus = (res) => {
		console.log(res);
	};
	const ck = () => {
		a.value = -1;
		state.c = -1;
		nextTick(() => {
			// console.log(inject('name'));
			// console.log(setItemRef);
			console.log(proxy.$refs.setItemRef);
		});
	};
</script>
