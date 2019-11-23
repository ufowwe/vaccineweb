<template>
	<view class="">
		
		<view v-if="!isLogin">
			<LoginIn @isLogin="getLogin"></LoginIn>
		</view>
		<view v-if="isLogin" class="tackmain">
			<view class="header">
				<text class="title">成长任务</text>
				<view class="slider">
					<view class="tags">
						您还没给宝宝设置接种方案，去设置
					</view>
					<van-slider
					  value="50"
					  bar-height="40rpx"
					  active-color="#E088FF"
					/>
					<view class="tab">
						<view class="td">
							<van-icon size="80rpx" name="clock" color="#fff" />
							<text>待完成</text>
						</view>
						<view class="td">
							<van-icon size="80rpx" name="clock" color="#fff" />
							<text>已完成</text>
						</view>
						<view class="td">
							<van-icon size="80rpx" name="clock" color="#fff" />
							<text>全部</text>
						</view>
					</view>
				</view>
			</view>
			<view class="task_box">
				<van-cell title="办理免疫预防接种证" value="2019-10-12" label="linda" :border="false" />
				<van-cell title="办理免疫预防接种证" value="2019-10-12" label="lili" :border="false" />
			</view>
		</view>
	</view>
</template>

<script>
import LoginIn from './component/Login.vue';
import authApi from '../../service/auth';

export default {
	components:{
		LoginIn
	},
	data(){
		return{
			isLogin:false
		}
	},
	methods:{
		//用户登录成功后执行的操作
		getLogin(){
			this.isLogin = true;
		}
	},
	async onLoad(options){
	  const login = await authApi.login();
	  if(login){
		this.isLogin = true;
	  }else{
		this.isLogin = false; 
	  }
	}
}
</script>

<style lang="less">
.tackmain{
	.header{
		background: #8686F7;
		height: 450rpx;
		width: 100%;
		padding: 10rpx 30rpx;
		display: block;
		.title{
			line-height: 120rpx;
			font-size: 54rpx;
			color: #fff;
		}
		.slider{
			width: 80%;
			padding: 36rpx;
			background: #F8F8FB;
			.tags{
				font-size: 28rpx;
			}
			.tab{
				padding: 20rpx 0;
				.td{
					text-align: center;
					width: 33%;
					display: inline-block;
					// width: 50rpx;
					// height: 50rpx;
					// border-radius: 50%;
				}
			}
		}
	}
	.task_box{
		margin: 10rpx 20rpx;
		background: #FAFAFB;
	}
}
</style>
