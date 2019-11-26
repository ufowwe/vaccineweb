<template>
	<view class="main">
		<view class="text_area">
			<view class="title">
				我的宝宝
			</view>
			<view class="underline"></view>
		</view>
		<view class="babyInfo">
			<view class="babyInfoList" v-for="(item,index) in babaList" :key="index" @click="toBabyInfo(item.id)">
				<image class="head" src="../../static/img/1.jpeg" mode=""></image>
				<view class="">
					<view class="babytop">{{item.nickname}}
						<image v-if="!!item.topStatus" style="width: 40rpx;height: 40rpx;" src="../../static/img/first.png" mode=""></image>
					</view>
					<view class="babybottom">
						<text>{{item.age}}</text>
						<image style="width: 40rpx;height: 40rpx;" src="../../static/img/修改.png" mode=""></image>
						<image @click.stop="del(item.id)" style="width: 40rpx;height: 40rpx;" src="../../static/img/删除.png" mode=""></image>
						<text class="nofirst" v-if="!!!item.topStatus">我要优先</text>
					</view>
				</view>
			</view>
			<view class="babyInfoList" @click="toaddBaby()">
			  <image class="head" src="../../static/img/invite.png" mode=""></image>
			  <text style="line-height: 90rpx;">添加宝宝</text>
			</view>
		</view>
	</view>
</template>

<script>
	import babyApi from "../../service/baby";
	
	export default {
		data() {
			return {
				babaList: []
			};
		},
		onLoad(option){
			this.getbabyList();
		},
		methods:{
			//列表
			getbabyList(){
				babyApi.getBabyList().then(res=>{
					if(res.code == "0000"){
						this.babaList = res.data;
					}else{
						uni.showToast({
							icon:"none",
							title: res.responseMsg
						});
					}
				});
			},
			del(id){
				
			},
			toBabyInfo(id){
				uni.navigateTo({
					url: '/pages/baby/babyInfo?id='+id
				});
			},
			toaddBaby(){
				uni.navigateTo({
					url: '/pages/baby/addBaby'
				});
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
			padding: 15px 0;
			width: 100%;
			// height: 110rpx;
			background: #FAFAFB;
			margin-bottom:30rpx;
			border-radius: 20rpx;
			display: flex;
			flex-direction: row;
			.head{
				width: 100rpx;
				height: 100rpx;
				border-radius: 200rpx;
				margin-left: 30rpx;
				margin-right: 10rpx;
			}
			.babytop{
				font-size: 32rpx;
				color: #666;
				line-height: 70rpx;
			}
			.babybottom{
				
				font-size: 26rpx;
				image{
					margin: 0 10rpx;
				}
				.nofirst{
					margin-left: 15%;
					color: #8686F7;
					position:absolute;
					// left:30rpx;
				}
			}
		}
	}
}

</style>
