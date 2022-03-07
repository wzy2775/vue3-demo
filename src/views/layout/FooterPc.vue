<!--
 * @Autor: ziyu wang
 * @Date: 2022-02-24 16:58:17
 * @LastEditors: ziyu wang
 * @LastEditTime: 2022-02-24 17:17:41
 * @Description: 
-->
<template>
	<footer class="footer-pc">
		<div>
			{{ `© ${year} PwC ` }} All rights reserved. PwC refers to the PwC network and/or one or more of its member
			firms, each of which is a separate legal entity. Please see
			<a href="http://www.pwc.com/structure" target="_blank">www.pwc.com/structure</a>&nbsp;for further details.
		</div>
	</footer>
</template>
<script setup>
	import moment from 'moment';
	const year = moment().year();
</script>
<style lang="scss" scoped>
	.footer-pc {
		height: 48px;
		display: flex;
		align-items: center;
		flex-shrink: 0;
		background-color: #2d2d2d;
		color: #fff;
		padding: 8px;
		font-size: 12px;
		line-height: 16px;
		a {
			color: #fff;
		}
	}
</style>
