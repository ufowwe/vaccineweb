<template>
	<view>
		<Bar :nav="setNav"></Bar>
		<view class="imgBox">
			<image src="http://47.92.33.214:12800/data/image/u944.png" mode=""></image>
			<image src="http://47.92.33.214:12800/data/image/u945.png" mode=""></image>
			<image src="http://47.92.33.214:12800/data/image/u946.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import Bar from '../components/Bar.vue';
	
	export default {
		components:{
			Bar,
		},
		data() {
			return {
				setNav:{
					'bg':'#8686F7',  //背景色
					'color':'#fff',  //字体颜色
					'isdisPlayNavTitle':true, //是否显示返回按钮，由于导航栏是共用的，把所有的东西封装好，
					'navTitle': '方案说明'
					// 然后有些页面不需要的东西通过条件控制进行显示与隐藏
				},
			};
		}
	}
</script>

<style lang="less">
.imgBox{
	image{
		width: 100%;
		height: 100vh;
		display: block;
	}
}
</style>
