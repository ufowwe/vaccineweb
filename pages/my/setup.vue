<template>
	<view class="main">
		<view class="text_area">
			<view class="title">
				设置
			</view>
			<view class="underline"></view>
		</view>
		<view class="babyInfo">
			<view class="babyInfoList">
				<van-cell @click="toRemind" :border="false" is-link size="large" custom-class="cellCla" >
				  <view slot="title">
					<image class="cellImg" src="../../static/img/提醒设置.png" mode=""></image>
					<text class="celltext">提醒设置</text>
				  </view>
				</van-cell>
				<van-cell @click="toUseragree" :border="false" is-link size="large" custom-class="cellCla" >
				  <view slot="title">
					<image class="cellImg" src="../../static/img/用户协议.png" mode=""></image>
					<text class="celltext">用户协议</text>
				  </view>
				</van-cell>
				<van-cell @click="toConceal" :border="false" is-link size="large" custom-class="cellCla" >
				  <view slot="title">
					<image class="cellImg" src="../../static/img/隐私政策.png" mode=""></image>
					<text class="celltext">隐私政策</text>
				  </view>
				</van-cell>
				<van-cell @click="toAboutus" :border="false" is-link size="large" custom-class="cellCla" >
				  <view slot="title">
					<image class="cellImg" src="../../static/img/关于我们.png" mode=""></image>
					<text class="celltext">关于我们</text>
				  </view>
				</van-cell>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				
			};
		},
		onLoad(option){
			
		},
		methods:{
			toRemind(){
				uni.navigateTo({
					url: "/pages/my/setup-remind"
				});
			},
			toUseragree(){
				uni.navigateTo({
					url: "/pages/my/setup-useragree"
				});
			},
			toConceal(){
				uni.navigateTo({
					url: "/pages/my/setup-conceal"
				});
			},
			toAboutus(){
				uni.navigateTo({
					url: "/pages/my/setup-aboutus"
				});
			},
		}
	}
</script>

<style lang="less">
.main{
	padding: 20rpx 6%;
	.text_area{
		padding-left: 20rpx;
		.title{
			font-size: 54rpx;
			color: #000;
			position: relative;
			z-index: 9999;
		}
		.underline{
			width: 55rpx;
			height: 24rpx;
			background: #8686F7;
			position: relative;
			top: -22rpx;
			left: 30rpx;
			border-radius: 20rpx;

		}
	}
	.babyInfo{
		font-size: 32rpx;
		margin-top: 10%;
		.nickCla{
			text-align: right;
		}
		.cellCla{
			height: 120rpx;
		}
		.babyInfoList{
			margin: 40rpx 0;
		}
		.babyImg{
			display: inline-block;
			width: 100rpx;
			height: 100rpx;
			float: right;
		}
		.cellImg{
			width: 50rpx;
			height: 50rpx;
			display: inline-block;
		}
		.celltext{
			color: #666666;
			font-size: 32rpx;
			display: inline-block;
			vertical-align: top;
			margin-left: 20rpx;
		}
	}
}

</style>
