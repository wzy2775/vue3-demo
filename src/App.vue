<!--
 * @Autor: ziyu wang
 * @Date: 2021-09-13 15:40:44
 * @LastEditors: ziyu wang
 * @LastEditTime: 2022-02-25 16:03:58
 * @Description: 
-->
<template>
	<HeaderPc />
	<div class="main">
		<router-view v-slot="{ Component }">
			<transition name="scroll-x-transition" mode="in-out">
				<component :is="Component" />
			</transition>
		</router-view>
	</div>
	<FooterPc />
</template>

<script setup>
	import HeaderPc from '@/views/layout/HeaderPc.vue';
	import FooterPc from '@/views/layout/FooterPc.vue';
</script>
<style lang="scss">
	#app {
		height: 100%;
		min-width: 800px;
		display: flex;
		flex-direction: column;
		.main {
			flex: 1;
			overflow: hidden;
		}
	}
</style>
