<template>
	<view class="main">
		<view class="text_area">
			<view class="title">
				意见反馈
			</view>
			<view class="underline"></view>
		</view>
		<view class="babyInfo">
			
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
			width: 155rpx;
			height: 24rpx;
			background: #8686F7;
			position: relative;
			top: -22rpx;
			left: 30rpx;
			border-radius: 20rpx;

		}
	}
	.babyInfo{
		margin-top: 60rpx;
		.babyInfoList{
			padding: 15px 0;
			width: 100%;
			background: #FAFAFB;
			margin-bottom:30rpx;
			border-radius: 20rpx;
			display: flex;
			flex-direction: row;
		}
	}
}

</style>
