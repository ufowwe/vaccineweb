<template>
	<view class="main">
		<view class="text_area">
			<view class="title">
				用户协议
			</view>
			<view class="underline"></view>
		</view>
		<view class="babyInfo">
			<view class="">
				宝育之家用户协议
			</view>
			<view class="babyInfoList">
				【审慎阅读】您在申请注册流程中点击同意前，应当认真阅读以下协议。请您务必审慎阅读、充分理解协议中相关条款内容，其中包括：

1、与您约定免除或限制责任的条款；
2、与您约定法律适用和管辖的条款；
3、其他以粗体下划线标识的重要条款。
如您对协议有任何疑问，可向设计小咖网站发起咨询。

【特别提示】当您按照注册页面提示填写信息、阅读并同意协议且完成全部注册程序后，即表示您已充分阅读、理解并接受协议的全部内容。如您因网站服务与设计小咖网站发生争议的，适用《设计小咖服务协议》处理。如您在使用网站服务过程中与其他用户发生争议的，依您与其他用户达成的协议处理。
阅读协议的过程中，如果您不同意相关协议或其中任何条款约定，您应立即停止注册程序。
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
