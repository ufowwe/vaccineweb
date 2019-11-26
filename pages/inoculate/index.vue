<template>
	<view>
		<Bar :nav="setNav"></Bar>
		<view class="inocumain">
			<view class="text_area">
				<text class="title">接种保障计划</text>
			</view>
			<view class="contain">
				<view class="text_box"></view>
				<view class="text_box"></view>
				<view class="text_box"></view>
				<view class=".text_main">
					声明：全部疫苗险产品（疫苗接种保障计划）由易安财产保险股份有限公司（简称“易安保险”）承保，面向全国（港澳台地区除外）销售。产品咨询及后期理赔均由易安保险负责。服务方式等相关细节请进入产品详情页查看。
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import Bar from '../components/Bar.vue';

export default {
	components:{
		Bar
	},
	data(){
		return{
			// 自定义导航栏对象
			setNav:{
				'bg':'#fff',  //背景色
				'color':'#fff',  //字体颜色
				'isdisPlayNavTitle':true, //是否显示返回按钮，由于导航栏是共用的，把所有的东西封装好，
				// 然后有些页面不需要的东西通过条件控制进行显示与隐藏
			}
		}
	}
}
</script>

<style lang="less">
.inocumain{
	padding: 20rpx 6%;
	.text_area{
		.title{
			font-size: 54rpx;
			color: #000;
		}
	}
	.contain{
		.text_box{
			width: 100%;
			height: 250rpx;
			margin: 20rpx 0;
			background: #FFF0FB;
		}
		.text_main{
			font-size: 28rpx;
			color: #666666;
		}
	}
}
	/* .content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	} */
</style>
