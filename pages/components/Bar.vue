<template>
	<view>
		<view class="header" :style="{'height':titleBarHeight,'padding-top':statusBarHeight,'background-color': nav.bg}">
			<text class="iconfont leftArrow header-back " 
			  :style="{'border-right-color':nav.color,'border-top-color':nav.color}" @click="back"></text>
			<view class="header-title weight" :style="{'color':nav.color}">{{nav.navTitle}}</view>
		</view>
		<view  :style="{'height':titleBarHeight,'padding-top':statusBarHeight}"></view>
	</view>
</template>
<script>
	export default {
		props:["nav"],
		data() {
			return {
				statusBarHeight: 0, 
				titleBarHeight: 0, 
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
		methods: {
			 // 回到上一页
			 back: function(){
				 uni.navigateBack({
				 	delta:1
				 })
			 }
		}
	}
</script>

<style>
	
	.header {
		display: flex;
		align-items: center;
		top: 0;
		position: fixed;
		width: 100%;
		z-index: 100;
		left:0;
	}
	
	.header .header-title {
		position: absolute;
		left: 50%;
		font-size: 38rpx;
		transform: translateX(-50%);
	}
	.header-back{
		position: absolute;
		left:30rpx;
	}
	.leftArrow{
		border-right: 2px solid #000000;
		border-top: 2px solid #000000; 
		height: 20rpx; 
		width: 20rpx; 
		transform: rotate(-135deg);
		-webkit-transform: rotate(-135deg); 
		border-left: 2px solid transparent;
		border-bottom: 2px solid transparent; 
		display: inline-block;
		-moz-transform: rotate(-135deg); 
		-ms-transform: rotate(-135deg);
		-o-transform: rotate(-135deg);
	}
</style>
