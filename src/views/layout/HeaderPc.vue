<!--
 * @Autor: ziyu wang
 * @Date: 2022-02-24 14:44:31
 * @LastEditors: ziyu wang
 * @LastEditTime: 2022-03-01 14:20:54
 * @Description: layout
-->
<template>
	<div class="header-pc">
		<div class="header-pc-mark">
			<div class="header-pc-mark__logo"></div>
			<div class="header-pc-mark__title"> Capability Assessment Tool </div>
		</div>
		<div class="header-pc-nav">
			<el-menu
				:default-active="activeRoute"
				:ellipsis="false"
				class="header-menu"
				mode="horizontal"
				router
				v-for="(menu, index) in topMenus"
				:key="index"
			>
				<el-menu-item v-if="!menu.hasSelectMenu" :index="menu.route">{{ menu.title }}</el-menu-item>
				<el-submenu v-else :index="menu.route">
					<template v-slot:title>{{ menu.title }}</template>
					<el-menu-item v-for="(item, ind) in menu.children" :key="ind" :index="item.route">{{
						item.title
					}}</el-menu-item>
				</el-submenu>
			</el-menu>
			<div class="header-pc-nav__avatar">
				<el-popover placement="bottom" trigger="click" popper-class="user-box-wrap">
					<div v-if="store.state.user.userInfo" class="user-box">
						<div class="item">
							<i class="pwc-icon pwc-idcard"> </i>
							{{ store.state.user.userInfo.StaffId }}
						</div>
						<div class="item">
							<i class="pwc-icon pwc-person"> </i>
							{{ store.state.user.userInfo.StaffName }}
						</div>
						<el-divider></el-divider>
						<div class="log-out" @click="logout">
							<i class="pwc-icon pwc-endprocess"></i>
							Log out
						</div>
					</div>
					<template v-slot:reference>
						<el-avatar :size="50" :src="bgImageStyles" class="user-avatar">
							<div class="avatar-error"></div>
						</el-avatar>
					</template>
				</el-popover>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { ref, watch } from 'vue';
	import { backLogin } from '@/utils/tools/util';
	import { useStore } from 'vuex';
	import { useRoute } from 'vue-router';
	const store = useStore();
	const route = useRoute();
	let activeRoute = ref('/home');
	const topMenus = ref([
		{
			title: 'Home',
			route: '/home'
		},
		{
			title: 'View',
			route: '/list'
		}
	]);
	const bgImageStyles = ref(
		'https://vcontacts.asia.pwcinternal.com/ImageWebApi/api/Image/' + store.state.user.userInfo.StaffId + '?type=1'
	);
	watch(route, (newVal) => {
		activeRoute.value = newVal.path;
	});
	const logout = () => {
		backLogin();
	};
</script>
<style lang="scss" scoped>
	.header-pc {
		display: flex;
		flex-shrink: 0;
		align-items: center;
		justify-content: space-between;
		height: 64px;
		padding: 0 16px;
		border-bottom: 1px solid #efeff5;
		&-mark {
			display: flex;
			align-items: flex-end;
			padding-left: 10px;
			&__logo {
				background-image: url(@/assets/img/pwc-logo.svg);
				background-size: cover;
				background-repeat: no-repeat;
				width: 60px;
				height: 46px;
			}
			&__title {
				font-size: 20px;
				margin-left: 20px;
				padding-left: 20px;
				font-family: Georgia, serif;
				color: #272727;
				border-left: 1px solid #272727;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
		&-nav {
			display: flex;
			&__avatar {
				display: flex;
				align-items: center;
				padding-right: 16px;
				margin-left: 20px;
				.user-avatar {
					cursor: pointer;
				}
			}
		}
		.avatar-error {
			width: 50px;
			height: 50px;
			background: #c0c4cc;
			border-radius: 50%;
		}
	}
	:deep(.header-menu) {
		border: none;
	}
	.user-box-wrap {
		padding: 12px 0 0 !important;
		.user-box {
			padding: 5px 10px;
			line-height: 24px;
			.item {
				white-space: nowrap;
			}
			.el-divider--horizontal {
				margin: 5px 0;
			}
			i {
				padding-right: 3px;
			}
			.log-out {
				cursor: pointer;
				font-size: 14px;
				color: #606266;
				i {
					position: relative;
					top: 1px;
				}
				&:hover {
					color: #e0301e;
				}
			}
		}
	}
</style>
