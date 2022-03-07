<!--
 * @Autor: ziyu wang
 * @Date: 2022-03-01 16:08:17
 * @LastEditors: ziyu wang
 * @LastEditTime: 2022-03-01 16:33:40
 * @Description: 
-->
<template>
	<el-table :data="list">
		<el-table-column
			v-for="(item, index) in column"
			:key="index"
			:prop="item.prop"
			:label="item.label"
			:width="item.width"
			:min-width="item.minWidth"
		/>
	</el-table>
</template>
<script setup>
	import { ref, onMounted, getCurrentInstance } from 'vue';
	const { proxy } = getCurrentInstance();
	let list = ref([]);
	const column = ref([
		{
			prop: 'Year',
			label: 'Year',
			width: 80
		},
		{
			prop: 'SelfName',
			label: 'Name',
			minWidth: 130
		},
		{
			prop: 'AssessorName',
			label: 'Assessor',
			minWidth: 130
		},
		{
			prop: 'SelfStatusText',
			label: 'Self Status',
			minWidth: 130
		},
		{
			prop: 'ReviewStatusText',
			label: 'Review Status',
			minWidth: 130
		},
		{
			prop: 'opera',
			label: 'Operation',
			width: 120
		}
	]);
	onMounted(() => {
		const params = {
			Tab: 0,
			SearchCondition: {
				year: 0,
				examinationid: 'all'
			},
			PageInfo: {
				pageIndex: 1,
				pageSize: 10
			}
		};
		proxy.$api.post('/User/GetSelfList', params).then((res) => {
			list.value = res.DataList;
			console.log(list);
		});
	});
</script>
