<!--
 * @Autor: ziyu wang
 * @Date: 2022-02-25 16:16:29
 * @LastEditors: ziyu wang
 * @LastEditTime: 2022-03-01 16:13:00
 * @Description: 
-->
<template>
	<div class="list-warp">
		<el-menu class="list-warp-menu" :default-active="active" @select="changeMenu">
			<el-menu-item v-for="(item, index) in menuList" :key="index" :index="item.webpage">
				<i class="el-icon-menu"></i>
				<template v-slot:title
					><span>{{ item.title }}</span></template
				>
			</el-menu-item>
		</el-menu>
		<div class="list-warp-content">
			<router-view v-slot="{ Component }">
				<transition name="scroll-x-transition" mode="in-out">
					<component :is="Component" />
				</transition>
			</router-view>
		</div>
	</div>
</template>
<script setup>
	import { ref, computed } from 'vue';
	import { useStore } from 'vuex';
	import { useRouter } from 'vue-router';
	const store = useStore();
	const router = useRouter();
	const menuData = ref([
		{
			title: 'Self-Assessment',
			webpage: 'capabilityAssessment',
			auth: 'CA'
		},
		{
			title: 'Assessor Assessment',
			webpage: 'assessorAssessment',
			auth: 'AA'
		},
		{
			title: 'Business Unit Review',
			webpage: 'BUResult',
			auth: 'BR'
		},
		{
			title: 'Final Review and Outcome',
			webpage: 'finalReview',
			auth: 'FR'
		},
		{
			title: 'Dashboard',
			webpage: 'selfDashboard',
			auth: 'SD'
		},
		{
			title: 'Outstanding Report',
			webpage: 'report',
			auth: 'OR'
		},
		{
			title: 'Assessment Setting',
			webpage: 'assessmentSetting',
			auth: 'AS'
		},
		{
			title: 'Assessment Reminder',
			webpage: 'reminder',
			auth: 'Email'
		},
		{
			title: 'Admin Review',
			webpage: 'admin',
			auth: 'AR'
		}
	]);
	const menuList = computed(() => {
		const roles = store.state.user.userRole;
		const menus = menuData.value.filter((item) => {
			if (roles.indexOf(item.auth) != -1) {
				return item;
			}
		});
		return menus;
	});
	let active = ref('capabilityAssessment');
	const changeMenu = (path) => {
		if (!path) {
			return;
		}
		router.push({
			path: '/list/' + path
		});
	};
</script>
<style lang="scss" scoped>
	.list-warp {
		height: 100%;
		overflow: hidden;
		display: flex;
		&-menu {
			width: 220px;
		}
		&-content {
			flex: 1;
			flex-shrink: 0;
			overflow-y: auto;
			padding: 20px;
		}
	}
</style>
