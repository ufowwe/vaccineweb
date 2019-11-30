
<template>
	<view class="">
		<!-- <bar :nav="setNav"></bar> -->
		<view class="mymain" style="">
			<view class="myHead" v-if="!isShow" :style="{'background-size': '100%','background': 'url('+imageURL+')'}">
				<van-button round type="default" custom-class="nologin" @click="toLogin">登录 / 注册</van-button>
			</view>
			<view class="myHead" v-if="isShow" :style="{'background-size': '100%','background': 'url('+imageURL+')'}">
				<view class="myname">
					<view class="myname-box">
						<view class="myname-box-name">{{userInfo.nickName}}</view>
						<view class="myname-box-sex">({{userInfo.gender==1?'宝爸':'宝妈'}})</view>
					</view>  
					<view class="myImg">
						<image :src="userInfo.avatarUrl" mode=""></image>
					</view>
				</view>
				<view class="babybox">
					<view class="babybox-sum">
						<view class="">{{babyList}}</view>
						<view class="babybox-sum-name">宝宝数</view>
					</view>
					<view class="babybox-sum">
						<view class="">10</view>
						<view class="babybox-sum-name">任务数</view>
					</view>
				</view>
			</view>
			<view class="groupmy">
				<view class="line" v-if="isShow">
					<van-cell @click="toMybaby" :border="false" is-link >
					  <view slot="title">
						<image class="cellImg" src="../../static/img/我的宝宝.png" mode=""></image>
						<text class="celltext">我的宝宝</text>
					  </view>
					</van-cell>
				</view> 
				<view class="line" v-if="isShow">
					<van-cell @click="toPolicy" :border="false" is-link >
					<view slot="title">
						<image class="cellImg" src="../../static/img/我的保单.png" mode=""></image>
						<text class="celltext">我的保单</text>
					  </view>
					</van-cell>
				</view> 
				<view class="line">
					<van-cell :border="false" is-link >
					  <view slot="title">
						<image class="cellImg" src="../../static/img/invite.png" mode=""></image>
						<text class="celltext">邀请好友</text>
					  </view>
					</van-cell>
				</view>
				<view class="line">
					<van-cell @click="toAdvice" :border="false" is-link >
					   <view slot="title">
					 	<image class="cellImg" src="../../static/img/意见建议.png" mode=""></image>
					 	<text class="celltext">意见建议</text>
					   </view>
					 </van-cell>
				</view> 
				<view class="line">
				 	<van-cell @click="toSetup" :border="false" is-link >
					   <view slot="title">
					 	<image class="cellImg" src="../../static/img/设置.png" mode=""></image>
					 	<text class="celltext">设置</text>
					   </view>
					 </van-cell>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import Bar from '../components/Bar.vue';
import authApi from '../../service/auth';
import global from '../../utils/global.js';
import babyApi from "../../service/baby";

export default {
	components:{
		Bar
	},
	data(){
		return{
			// 自定义导航栏对象
			setNav:{
				'bg':'#8686F7',  //背景色
				'color':'#fff',  //字体颜色
				'isdisPlayNavTitle':true, //是否显示返回按钮，由于导航栏是共用的，把所有的东西封装好，
				// 然后有些页面不需要的东西通过条件控制进行显示与隐藏
				'navTitle':'' //导航标题
			},
			isShow: false,
			userInfo: {},
			imageURL: '../../static/img/5.jpg',
			babyList: 0
		}
	},
	async onLoad(options){
	  const login = await authApi.login();
	  if(login){
		this.userInfo = JSON.parse(global.getUser());
		console.log(this.userInfo);
		this.getbabyList();
		this.isShow = true;
	  }else{
		this.isShow = false
	  }
	  
	},
	methods: {
		//列表
		getbabyList(){
		 	babyApi.getBabyList().then(res=>{
		 		if(res.code == "0000"){
		 			this.babyList = res.data.length;
		 		}else{
		 			uni.showToast({
		 				icon:"none",
		 				title: res.responseMsg
		 			});
		 		}
		 	});
		},
		toMybaby(){
			if(this.checkLogin("/pages/baby/babyInfo")){
				uni.navigateTo({
					url: "/pages/my/myBaby"
				});
			}
		},
		toPolicy(){
			if(this.checkLogin("/pages/my/insurancePolicy")){
				uni.navigateTo({
					url: "/pages/my/insurancePolicy"
				});
			}
		},
		toSetup(){
			uni.navigateTo({
				url: "/pages/my/setup"
			});
		},
		toAdvice(){
			uni.navigateTo({
				url: "/pages/my/advice"
			});
		},
		toLogin(){
			uni.navigateTo({
				url:"/pages/login/login"
			});
		},
		toceshi(){
			uni.navigateTo({
				url:"/pages/vaccine/vaccKnow"
			});
		},
	}
}
</script>

<style lang="less">
	.mymain{
		.myHead{
			padding: 140rpx 100rpx 20rpx;
			background-size: 100%;
			height: 300rpx;
			color: #fff;
			image{
				width: 100%;
				height: 100%;
			}
			.nologin{
				width: 50%;
				text-align: center;
				font-size: 32rpx;
				color: #666666;
				position:relative;
				top:40%;
				left:25%;
			}
		}
		.myname{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.myname-box{
				height: 120rpx;
				.myname-box-name{
					display: inline-block;
					font-size: 54rpx;
				}
				.myname-box-sex{
					display: inline-block;
					margin-left: 20rpx;
					font-size: 30rpx;
				}
			}
			.myImg{
				width: 100rpx;
				height: 100rpx;
				image{
					border-radius: 100rpx;
				}
			}
		}
		.babybox{
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			.babybox-sum{
				text-align: center;
				margin-right: 40rpx;
				height: 100rpx;
				font-size: 54rpx;
			}
			.babybox-sum-name{
				font-size: 28rpx;
			}
		}
		.groupmy{
			padding: 6%;
			border-radius: 30rpx;
			margin-top: -30rpx;
			background: #fff;
			.line{
				height: 100rpx;
				line-height: 100rpx;
			}
		}
		.cellImg{
			width: 50rpx;
			height: 50rpx;
			display: inline-block;
		}
		.celltext{
			color: #666666;
			font-size: 32rpx;
			display: inline-block;
			vertical-align: top;
			margin-left: 20rpx;
		}
	}
	
</style>
