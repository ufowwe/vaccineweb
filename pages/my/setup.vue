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
			  <van-cell title="提醒设置" 
				  custom-class="cellCla" 
				  :border="false" 
				  @click="toRemind"
				  is-link 
				  size="large" />
			  <van-cell title="用户协议" 
				  custom-class="cellCla"
				  :border="false" 
				  @click="toUseragree"
				  is-link 
				  size="large" />
			  <van-cell title="隐私政策" 
				  custom-class="cellCla"
				  :border="false" 
				  is-link 
				  size="large" />
			  <van-cell title="关于我们" 
				  custom-class="cellCla"
				  :border="false" 
				  is-link 
				  size="large" />
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
	}
}

</style>
