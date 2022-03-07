<!--
 * @Autor: ziyu wang
 * @Date: 2021-09-13 15:40:44
 * @LastEditors: ziyu wang
 * @LastEditTime: 2022-02-25 15:52:37
 * @Description: 
-->
<template>
	<h1 @click="change">{{ msg }}</h1>
	<button @click="count++">count is: {{ count }}{{ data.a }}</button>
	<div @click="bus">{{ computeCount }}</div>
	<!-- <p>{{ store.state.user.user }}</p> -->
	<slot> </slot>
	<slot name="test"></slot>
</template>

<script setup>
	import { ref, reactive, onMounted, watch, computed, getCurrentInstance, useAttrs, inject } from 'vue';
	import { useStore } from 'vuex';
	import { useRouter } from 'vue-router';
	const props = defineProps({
		msg: {
			type: String
		}
	});
	const emits = defineEmits(['gogo']);
	const attrs = useAttrs();
	// const slots = useSlots();
	const theme = {
		color: 1 > 2 ? 'red' : 'green'
	};

	let count = ref(0);
	const data = reactive({
		a: 'pppp'
	});
	const { proxy } = getCurrentInstance();
	const store = useStore();
	const router = useRouter();
	const computeCount = computed(() => {
		return count.value + 100;
	});
	watch(
		() => data.a,
		(newVal) => {
			console.log(newVal);
		}
	);
	watch([count, data], (newVal) => {
		console.log(newVal[1].a);
	});
	onMounted(() => {
		console.log(inject('name'));
		// console.log('onMounted');
	});
	const change = () => {
		//   data.a = '22222';
		//   store.commit('setUser', 'aaaaaaa');
		//   emits('gogo', data);
		router.push({
			path: '/detail',
			query: {
				id: '11111111'
			}
		});
	};
	const aa = () => {
		console.log('父调用子');
	};
	const bus = () => {
		proxy.$bus.emit('bus', 'busbusbus');
	};
	defineExpose({
		count,
		aa
	});
</script>
<style scoped lang="scss">
	h1 {
		color: v-bind('theme.color');
	}
	p {
		color: $color;
	}
</style>
