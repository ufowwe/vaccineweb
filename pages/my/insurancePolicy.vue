<template>
	<view>
		<Bar :nav="setNav"></Bar>
		<van-tabs swipeable @click="onClick">
		  <van-tab title="全部">
			  <PolicyInfo status='全部'></PolicyInfo>
		  </van-tab>
		  <van-tab title="待付款">
			   <PolicyInfo status='待付款'></PolicyInfo>
		  </van-tab>
		  <van-tab title="已生效">
			  <PolicyInfo status='已生效'></PolicyInfo>
		  </van-tab>
		  <van-tab title="已满期">
			  <PolicyInfo status='已满期'></PolicyInfo>
		  </van-tab>
		  <van-tab title="已关闭">
			  <PolicyInfo status='已关闭'></PolicyInfo>
		  </van-tab>
		</van-tabs>
	</view>
</template>

<script>
import Bar from '../components/Bar.vue';
import PolicyInfo from './component/PolicyInfo.vue';

export default {
	components:{
		Bar,
		PolicyInfo
	},
	data(){
		return{
			// 自定义导航栏对象
			setNav:{
				'bg':'#5D58FF',  //背景色
				'color':'#fff',  //字体颜色
				'isdisPlayNavTitle':true, //是否显示返回按钮，由于导航栏是共用的，把所有的东西封装好，
				'navTitle': '我的保单'
				// 然后有些页面不需要的东西通过条件控制进行显示与隐藏
			},
			status: '全部'
		}
	},
	methods: {
		onClick(event) {
			this.status = event.detail.title;
		}
	}
}
</script>

<style lang="less">

</style>