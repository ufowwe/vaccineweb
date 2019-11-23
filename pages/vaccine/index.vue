<template>
	<view class="">
		<VaccBar :nav="setNav" @changePage="changePage"></VaccBar>
		<VaCertificate v-if="isShow == 1"></VaCertificate>	
		<VaPlan v-if="isShow == 2"></VaPlan>	
	</view>
</template>

<script>
	import VaccBar from './component/VaccBar.vue';
	import VaCertificate from './component/VaCertificate.vue';
	import VaPlan from './component/VaPlan.vue';
	import vaccineApi from "../../service/vaccine"
	
	export default {
	  components:{
			VaccBar,
			VaCertificate,
			VaPlan,
		},
		data(){
			return{
				// 自定义导航栏对象
				setNav:{
					'bg':'#5D58FF',  //背景色
					'color':'#fff',  //字体颜色
					'vaCertificate':'接种证', //导航标题
					'vaPlan':'接种方案', //导航标题
				},
				isShow: true,
				
			}
		},
		async mounted() {
			let obj={
				"provinceId":"0",
				"schemeType":"0"
			};
			await vaccineApi.getRecordNoLogin(obj).then(res=>{
				console.log(res);
			});	
		},
		methods: {
			changePage(val) {
				this.isShow = val;
			}
		}
	}
</script>

<style lang="less">

</style>
