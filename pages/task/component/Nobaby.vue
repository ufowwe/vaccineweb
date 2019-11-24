<template>
	<view class="content">
		<!-- <image class="logo" src=""></image> -->
		<view class="header">
			<image src="../../../static/img/pic.png" mode=""></image>
		</view>
		<view class="header">
			<van-button custom-class="loginBtn" @click="loginIn" round color="#8686F7">添加宝宝</van-button>
		</view>
	</view>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    loginIn(){
		uni.redirectTo({
			url:"/pages/baby/addBaby"
		});
	}
  }
};	
</script>

<style lang="less">
.header {
	display:flex; 
	justify-content: center;
	image {
		display: block;
		width: 500rpx;
		height: 700rpx;
	}
	.loginBtn{
		width: 470rpx;
		height: 110rpx;
		font-size: 40rpx;
	}
}

</style>
