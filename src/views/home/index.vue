<!--
 * @Autor: ziyu wang
 * @Date: 2022-02-25 15:47:40
 * @LastEditors: ziyu wang
 * @LastEditTime: 2022-02-25 16:22:57
 * @Description: 
-->
<template>
	<div class="home">
		<div class="home-bg">
			<h1>Capability</h1>
			<h1>Assessment Tool</h1>
		</div>
		<div class="home-menus">
			<ul class="home-menus-list">
				<li
					v-for="(item, index) in menuList"
					:key="index"
					@click="openNew(item.webpage)"
					:style="{ background: item.background, color: item.color }"
				>
					<img :src="item.img" alt="" />
					<strong>{{ item.title }}</strong>
				</li>
			</ul>
		</div>
	</div>
</template>
<script setup>
	import { ref, computed } from 'vue';
	import { useStore } from 'vuex';
	import { useRouter } from 'vue-router';
	import sa from '@/assets/img/sa.png';
	import aa from '@/assets/img/aa.png';
	import bu from '@/assets/img/bu.png';
	import fn from '@/assets/img/fn.png';
	import db from '@/assets/img/db.png';
	import as from '@/assets/img/as.png';
	import email from '@/assets/img/email.png';
	import ar from '@/assets/img/ar.png';
	import or from '@/assets/img/or.png';
	const store = useStore();
	const router = useRouter();
	const menuData = ref([
		{
			title: 'Self-Assessment',
			webpage: 'capabilityAssessment',
			auth: 'CA',
			img: sa,
			background: '#EB8C00',
			color: '#000'
		},
		{
			title: 'Assessor Assessment',
			webpage: 'assessorAssessment',
			auth: 'AA',
			img: aa,
			background: '#E0301E',
			color: '#fff'
		},
		{
			title: 'Business Unit Review',
			webpage: 'BUResult',
			auth: 'BR',
			img: bu,
			background: '#FFB600',
			color: '#000'
		},
		{
			title: 'Final Review and Outcome',
			webpage: 'finalReview',
			auth: 'FR',
			img: fn,
			background: '#464646',
			color: '#fff'
		},
		{
			title: 'Dashboard',
			webpage: 'selfDashboard',
			auth: 'SD',
			img: db,
			background: '#D04A02',
			color: '#fff'
		},
		{
			title: 'Outstanding Report',
			webpage: 'report',
			auth: 'OR',
			img: or,
			background: '#000',
			color: '#fff'
		},
		{
			title: 'Assessment Setting',
			webpage: 'assessmentSetting',
			auth: 'AS',
			img: as,
			background: '#DB536A',
			color: '#fff'
		},
		{
			title: 'Assessment Reminder',
			webpage: 'reminder',
			auth: 'Email',
			img: email,
			background: '#DEDEDE',
			color: '#000'
		},
		{
			title: 'Admin Review',
			webpage: 'admin',
			auth: 'AR',
			img: ar,
			background: '#7D7D7D',
			color: '#fff'
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
	const openNew = (path) => {
		router.push({
			path: '/list/' + path
		});
	};
</script>
<style lang="scss" scoped>
	.home {
		display: flex;
		width: 100%;
		height: 100%;
		overflow: hidden;
		&-bg {
			height: 100%;
			width: 50%;
			background: url('@/assets/img/homebg1.png') no-repeat;
			background-size: 100% 100%;
			position: relative;
			h1 {
				color: #fff;
				text-align: center;
				background: #e0301e 0% 0% no-repeat padding-box;
				font: normal normal normal 67px/76px Georgia;
				padding: 20px 40px;
				&:first-child {
					position: absolute;
					top: 52%;
					left: 0;
					z-index: 1;
				}
				&:last-child {
					position: absolute;
					top: 64%;
					left: 150px;
				}
			}
		}
		&-menus {
			width: 50%;
			height: 100%;
			padding: 30px;
			overflow-y: auto;
			li {
				display: flex;
				align-items: center;
				padding: 0 40px;
				margin-bottom: 14px;
				cursor: pointer;
				flex: 1;
				min-height: 80px;
				max-height: 120px;
				&:last-child {
					margin-bottom: 50px;
				}
				img {
					width: 60px;
					height: 60px;
					margin-right: 46px;
				}
				strong {
					text-align: left;
					overflow-y: hidden;
					padding: 0 10px;
					font: normal normal bold 26px/40px Helvetica;
				}
			}
		}
	}
</style>
