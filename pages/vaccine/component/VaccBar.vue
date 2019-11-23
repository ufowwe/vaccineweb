<template>
	<view>
		<view class="header" :style="{'height':titleBarHeight,'padding-top':statusBarHeight,'background-color': nav.bg}">
			<text class="iconfont leftArrow header-back weight"   :style="{'border':nav.color}" v-if="nav.isdisPlayNavTitle" @click="back"></text>
			<view class="header-title weight">
				<view class="tit" @click="checkTab(1)">
					{{nav.vaCertificate}}
					<text v-show="isCheck == 1" class="heng hengF"></text>
				</view>
				
				<view class="tit" @click="checkTab(2)">
					{{nav.vaPlan}}
					<text v-show="isCheck == 2" class="heng hengS"></text>
				</view>
				
			</view>
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
				isCheck: true,
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
			},
			checkTab(value) {
				this.isCheck = value; 
				this.$emit('changePage',this.isCheck)
			}
		}
	}
</script>

<style lang="less">
	
	.header {
		display: flex;
		align-items: center;
		top: 0;
		position: fixed;
		width: 100%;
		z-index: 100;
		left:0;
		.header-title {
			width: 42%;
			position: absolute;
			left: 50%;
			color: #F1F1F1;
			font-size: 30rpx;
			transform: translateX(-50%);
			.tit{
				display: inline-block;
				font-size: 36rpx;
				color: #FFFFFF;
				margin-right: 10px;
			}
			.heng{
				width: 40rpx;
				height: 6rpx;
				background: #E088FF;
				position: absolute;
				bottom: -10rpx;
			}
			.hengF{
				left: 10%;
			}
			.hengS{
				left: 55%;
			}
		}
	}
	.header-back{
		position: absolute;
		left:15upx;
		font-size:30upx;
		padding: 10upx;
		border-radius: 50%;
	}
</style>
