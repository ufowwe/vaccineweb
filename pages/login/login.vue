<template>
	<view>
		<view class="header header-img">
			<img src="../../static/img/logo.png" />
		</view>
		<view class="btnBox">
			<button open-type="getUserInfo" @getuserinfo="bindGetUserInfo" withCredentials="true" class='loginBtn btn' type='primary' lang="zh_CN">
			    微信授权登录/注册
			</button>
			<van-button @click="cancel" custom-class='cancelLogin btn'>残忍拒绝</van-button>
		</view>
		<van-dialog
			use-slot
			use-title-slot
			
			:show="dialogShow"
			:show-confirm-button="false"
			:show-cancel-button = "false"
		>
			<view class="dialog-title" solt = "title">
				<img src="../../static/img/myActive.png">
			</view>
			<vieiw class="tip-content">
				<text class="dialog-tip">登录成功</text>
			</vieiw>
			<vieiw class="tip-content">
				<text class="dialog-tip2">微信授权登录成功，您现在还没有添加宝宝，现在去添加？</text>
			</vieiw>
			<view class="tip-content btn-content">
				<van-button @click="cancel" custom-class='dialog-btn dialog-btn-cacel'>返回上一页</van-button>
				<van-button @click="addBaby" custom-class='dialog-btn dialog-btn-add'>添加宝宝</van-button>
			</view>
		</van-dialog>
	</view>
</template>

<script>
	import global from '../../utils/global';
	import babyApi from '../../service/baby';
	import authApi from '../../service/auth';
	export default {
		data() {
			return {
				dialogShow:false
			}
		},
		methods: {
			bindGetUserInfo(res){
				if (!res.detail.iv) {
				    uni.showToast({
						icon:"none",
				        title: '您取消了授权，登录失败'
				    });
				    return false;
				}
				global.setUser(JSON.stringify(res.mp.detail.userInfo));
				babyApi.getBabyList().then(res=>{
					if(res.data && res.data.length <= 0){
						this.dialogShow = true;
					}else{
						this.cancel();
					}
				})
			},
			cancel(){
				uni.reLaunch({
				    url:'/pages/task/index'
				});
			},
			addBaby(){
				uni.navigateTo({
				    url:'/pages/baby/addBaby'
				});
			}
		}
	}
</script>

<style lang="less">
.header-img{
	width:750rpx;
	height:998rpx;
	text-align: center;
	img{
		display:inline-block;
		width:313rpx;
		height:463rpx;
		margin-top:280rpx;
	}
}
.btnBox{
	box-sizing: border-box;
	padding: 0 75rpx;
	.btn{
		border-radius:60rpx;
		font-size:30rpx;
		padding:15rpx 0;
		width:100%;
		&::after{
			border:none;
		}
	}
	.cancelLogin{
		margin-top:30rpx;
		color:#666;
	}	
}
.dialog-title{
	height:70rpx;
	text-align: center;
	img{
		display:inline-block;
		width:66rpx;
		height:66rpx;
	}
}
.tip-content{
	padding:0 95rpx;
	text-align: center;
	display:block;
	.dialog-tip{
		text-align:center;
		color:#333;
		font-size:40rpx;
		height:56rpx;
		line-height:56px;
	}
	.dialog-tip2{
		color:#666;
		font-size:28rpx;
		margin-top:16rpx;
	}
	&.btn-content{
		padding:0;
		margin:70rpx 0;
		.dialog-btn{
			width:300rpx;
			border:none;
			&.dialog-btn-cacel{
				border-top-left-radius:60rpx;
				border-bottom-left-radius:60rpx;
				background:#f2f2f2;
				color:#666;
			}
			&.dialog-btn-add{
				background:#8686F7;
				border-top-right-radius:60rpx;
				border-bottom-right-radius:60rpx;
				color:#fff;
			}
		}
	}
}
</style>
