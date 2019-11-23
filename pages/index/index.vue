<template>
    <view>
        <!-- #ifdef MP-WEIXIN -->
        <view>
            <view v-if="!isLogin">
                <view class='header'>
                    <image src='../../static/img/logo.png'></image>
                </view>
                <view class='content'>
                    <view>申请获取以下权限</view>
                    <text>获得你的公开信息(昵称，头像、地区等)</text>
                </view>
				
				<button open-type="getUserInfo" @getuserinfo="bindGetUserInfo" withCredentials="true" class='bottom' type='primary' lang="zh_CN">
				    授权登录
				</button>
            </view>
			<view v-if="isLogin">
				用户已登录
			</view>
        </view>
        <!-- #endif -->
    </view>
</template>

<script>
	import authApi from '../api/auth';
	export default {
        data() {
            return {
				isLogin:false
            };
        },
        onLoad(options){
          const login = authApi.login();
		  console.log(login);
		  if(login){
			  this.isLogin = true;
		  }else{
			  this.isLogin = false;
		  }
        },
        methods: {
          async bindGetUserInfo(res) {
			  console.log(res);
		  }
        }
    }
</script>

<style>
	.header {
        margin: 90rpx 0 90rpx 50rpx;
        border-bottom: 1px solid #ccc;
        text-align: center;
        width: 650rpx;
        height: 500rpx;
        line-height: 450rpx;
    }

    .header image {
        width: 200rpx;
        height: 300rpx;
    }

    .content {
        margin-left: 50rpx;
        margin-bottom: 90rpx;
    }

    .content text {
        display: block;
        color: #9d9d9d;
        margin-top: 40rpx;
    }

    .bottom {
        border-radius: 80rpx;
        margin: 70rpx 50rpx;
        font-size: 35rpx;
    }
	
</style>
