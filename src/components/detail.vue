<!--
 * @Autor: ziyu wang
 * @Date: 2022-01-27 10:46:54
 * @LastEditors: ziyu wang
 * @LastEditTime: 2022-03-01 16:39:59
 * @Description: 
-->
<template>
	<div>detail</div>
</template>
<script setup>
	import { onMounted } from 'vue';
	import { useRoute } from 'vue-router';
	import { getCurrentInstance } from 'vue';
	const { proxy } = getCurrentInstance();
	const route = useRoute();
	onMounted(() => {
		//   getList();
		console.log(route.query);
	});
</script>
