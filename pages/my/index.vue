
<template>
	<view class="">
		<!-- <bar :nav="setNav"></bar> -->
		<view class="mymain" style="">
			<view class="myHead" v-if="!isShow" :style="{'background-size': '100%','background': 'url('+imageURL+')'}">
				<van-button round type="default" custom-class="nologin" @click="toLogin">登录 / 注册</van-button>
			</view>
			<view class="myHead" v-if="isShow" :style="{'background-size': '100%','background': 'url('+imageURL+')'}">
				<view class="">
					{{userInfo.nickName}}
				</view>
				<view class="">
					
				</view>
			</view>
			<view class="groupmy">
				<view class="line" v-if="isShow">
					<van-cell title-class="leftclass" @click="toMybaby"
					:border="false" title="我的宝宝" icon="comment-o" is-link />
				</view> 
				<view class="line" v-if="isShow">
					<van-cell title-class="leftclass" @click="toPolicy"
					:border="false" title="我的保单" icon="comment-o" is-link />
				</view> 
				<view class="line">
					<van-cell title-class="leftclass" :border="false" title="邀请好友" icon="friends-o" is-link >
					<!-- <view slot="icon">
					  <image src="../../static/img/invite.png" mode=""></image>
					  <van-icon name="../../static/img/invite.png" />
					</view> -->
				  </van-cell>
				</view>
				<view class="line">
					<van-cell title-class="leftclass" @click="toAdvice"
					 :border="false" title="意见建议" icon="comment-o" is-link />
				</view> 
				<view class="line">
				 	<van-cell title-class="leftclass" @click="toSetup"
					 :border="false" title="设置" icon="setting-o" is-link />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import Bar from '../components/Bar.vue';
import authApi from '../../service/auth';
import global from '../../utils/global.js';

export default {
	components:{
		Bar
	},
	data(){
		return{
			// 自定义导航栏对象
			setNav:{
				'bg':'#5D58FF',  //背景色
				'color':'#fff',  //字体颜色
				'isdisPlayNavTitle':true, //是否显示返回按钮，由于导航栏是共用的，把所有的东西封装好，
				// 然后有些页面不需要的东西通过条件控制进行显示与隐藏
				'navTitle':'标题栏' //导航标题
			},
			isShow: false,
			userInfo: {},
			imageURL: '../../static/img/5.jpg'
		}
	},
	async onLoad(options){
	  const login = await authApi.login();
	  if(login){
		this.userInfo = JSON.parse(global.getUser());
		console.log(this.userInfo);
		this.isShow = true;
	  }else{
		this.isShow = false
	  }
	  
	},
	methods: {
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
			uni.redirectTo({
				url:"/pages/login/login"
			});
		}
	}
}
</script>

<style lang="less">
	.mymain{
		.myHead{
			// background-image:url('../');
			background-size: 100%;
			height: 400rpx;
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
		.groupmy{
			padding: 6%;
			.leftclass{
				color: #666666;
				font-size: 32rpx;
			}
			.line{
				height: 100rpx;
				line-height: 100rpx;
			}
		}
	}
	
	
</style>
