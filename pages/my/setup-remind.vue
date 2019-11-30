<template>
	<view class="main">
		<view class="text_area">
			<view class="title">
				提醒设置
			</view>
			<view class="underline"></view>
		</view>
		<view class="babyInfo">
			<view class="babyInfoList">
				<text class="shu"></text>
				提醒模式
				<view class="">
					<!-- <van-cell title="单元格" >
						<view slot="default">
							<van-switch :checked="checked" @change="onChange" />
						</view> 
					</van-cell> -->
				</view>
			</view>
			<view class="babyInfoList">
				<text class="shu"></text>
				提醒时间
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				checked: true
			};
		},
		onLoad(option){
			
		},
		methods:{
			onChange({ detail }) {
			    // 需要手动对 checked 状态进行更新
			    this.checked = detail;
			  }
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
			padding: 15px;
			// width: 100%;
			background: #FAFAFB;
			margin-bottom:30rpx;
			border-radius: 20rpx;
			display: flex;
			flex-direction: row;
		}
		.shu{
			display: inline-block;
			width: 8rpx;
			height: 30rpx;
			background: #8686F7;
			border-radius: 8rpx;
			margin-right: 20rpx;
			margin-top: 5px;
		}
	}
}

</style>
