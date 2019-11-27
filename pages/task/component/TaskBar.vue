<template>
	<view>
		<view class="header" :style="{'height':titleBarHeight,'padding-top':statusBarHeight,'background-color': '#8686F7'}">
			<view class="leftArrow" @click="showPopup">
				<image class="babyImg" src="../../../static/img/4.jpg" mode=""></image>
				<van-icon color="#fff" size="50rpx" custom-style="margin-top: 15rpx;margin-left: 26rpx;" name="arrow-down" />
			</view>
		</view>
		<view  :style="{'height':titleBarHeight,'padding-top':statusBarHeight}"></view>
		<van-popup
		  :show="show"
		  overlay-style="background:rgba(0,0,0,0.4);"
		  round
		  custom-class="popupCla"
		  @close="onClose"
		>
			<van-radio-group :value="radio" @change="onChange">
			  <van-radio custom-class="radioCla" label-class="labelCla" name="0">我的全部宝宝</van-radio>
			  <van-radio custom-class="radioCla" label-class="labelCla" :name="item.id" v-for="(item,index) in babyList" :key='index'>
			  {{item.nickname}}  ({{item.age}})</van-radio>
			</van-radio-group>
			<view class="btn-content">
				<van-button color="#8686F7" @click="addBaby" 
				custom-style="border-radius: 100rpx 0 0 100rpx;width:50%;border-right-color:#fff;font-size: 28rpx;">添加宝宝</van-button>
				<van-button color="#8686F7" @click="tomyBaby" 
				custom-style="border-radius: 0 100rpx 100rpx 0;width:50%;font-size: 28rpx;">管理宝宝</van-button>
			</view>
		</van-popup>
	</view>
</template>
<script>
	import global from "../../../utils/global.js";
	import babyApi from "../../../service/baby";
	
	export default {
		props:["babyList"],
		data() {
			return {
				statusBarHeight: 0, 
				titleBarHeight: 0, 
				show: false,
				radio: '0',
			}
		},
		created() {
			var  that = this;
			uni.getSystemInfo({
				success: function(res) {
					if (res.model.indexOf('iPhone') !== -1) {
						that.titleBarHeight = 44 + 'px';
					} else {
						that.titleBarHeight = 48  + 'px';
					}
						that.statusBarHeight = res.statusBarHeight  + 'px'
				},
					
			})
		 },
		onLoad(options) {
		 	if(global.getBabyId()){
				this.radio = global.getBabyId();
			}
			debugger
		},
		methods: {
			onChange(event) {
			    this.radio = event.detail;
				global.setBabyId(this.radio);
				this.show = false;
			},
			onClose() {
				this.show = false;
			},
			showPopup(type) {
				this.show = true;
				if(global.getBabyId()){
					this.radio = global.getBabyId();
				}
			},
			addBaby(){
				uni.navigateTo({
				    url:'/pages/baby/addBaby'
				});
			},
			tomyBaby(){
				uni.navigateTo({
				    url:'/pages/my/myBaby'
				});
			},
			// 回到上一页
			back: function(){
				 uni.navigateBack({
				 	delta:1
				 })
			},
		}
	}
</script>

<style lang="less">
	
.header {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	top: 0;
	position: fixed;
	width: 100%;
	z-index: 100;
	left:0;
	.leftArrow{
		display: flex;
		align-items: flex-start;
		flex-direction: row;
		position: absolute;
		left:15upx;
		font-size:30upx;
		padding: 10upx;
		border-radius: 50%;
	}
	.babyImg{
		display: inline-block;
		width: 80rpx;
		height: 80rpx;
		border-radius: 80rpx;
	}
}
.popupCla{
	width:92%;
	padding:6% 8%;
	top: 32%;
}
.radioCla{
	margin-bottom: 60rpx;
}
.labelCla{
	color: #666;
}
</style>
