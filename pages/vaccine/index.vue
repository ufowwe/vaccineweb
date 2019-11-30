<template>
	<view class="">
		<VaccBar ref="bar" :babyList="babyList" :navStatus="isShow" :babyShow="babyShow" :nav="setNav" @changePage="changePage"></VaccBar>
		<VaCertificate @changePage="changePage" v-if="isShow == 1"></VaCertificate>	
		<VaPlan :scrollTop="scrollTop" @changePage="changePage"  v-if="isShow == 2"></VaPlan>	
	</view>
</template>

<script>
	import VaccBar from './component/VaccBar.vue';
	import VaCertificate from './component/VaCertificate.vue';
	import VaPlan from './component/VaPlan.vue';
	import authApi from '../../service/auth';
	import babyApi from "../../service/baby";
	
	export default {
		components:{
			VaccBar,
			VaCertificate,
			VaPlan,
		},
		onPageScroll(obj){
			this.scrollTop = obj.scrollTop;
		},
		data(){
			return{
				scrollTop:0,
				// 自定义导航栏对象
				setNav:{
					'bg':'#8686F7',  //背景色
					'color':'#fff',  //字体颜色
					'vaCertificate':'接种证', //导航标题
					'vaPlan':'接种方案', //导航标题
				},
				isShow: 1,
				babyShow: true,
				babyList: [],
			}
		},
		// onLoad() {
		// 	if(this.checkLogin('pages/vaccine/index','nav')){
		// 		this.babyShow = true;
		// 		this.getbabyList();
		// 	}
		// },
		async onLoad(options){
		  const login = await authApi.login();
		  const isHaveBaby = await babyApi.isHaveBaby();
		  if(login&&isHaveBaby){
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
