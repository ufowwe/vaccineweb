<template>
	<view class="">
		<VaccBar ref="bar" :babyList="babyList" :babyShow="babyShow" :nav="setNav" @changePage="changePage"></VaccBar>
		<VaCertificate @changePage="changePage" v-if="isShow == 1"></VaCertificate>	
		<VaPlan v-if="isShow == 2"></VaPlan>	
	</view>
</template>

<script>
	import VaccBar from './component/VaccBar.vue';
	import VaCertificate from './component/VaCertificate.vue';
	import VaPlan from './component/VaPlan.vue';
	import babyApi from "../../service/baby";
	
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
				babyShow: true,
				babyList: [],
			}
		},
		onLoad() {
			if(this.checkLogin('pages/vaccine/index','nav')){
				this.babyShow = true;
				this.getbabyList();
			}
		},
		methods: {
			changePage(val) {
				this.isShow = val;
				this.$refs.bar.setcheck(val);
			},
			//列表
			getbabyList(){
			 	babyApi.getBabyList().then(res=>{
			 		if(res.code == "0000"){
			 			this.babyList = res.data;
			 		}else{
			 			uni.showToast({
			 				icon:"none",
			 				title: res.responseMsg
			 			});
			 		}
			 	});
			},
		}
	}
</script>

<style lang="less">

</style>
