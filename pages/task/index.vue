<template>
	<view class="">
		
		<view v-if="isLogin==1">
			<LoginIn></LoginIn>
		</view>
		<view v-if="isLogin==2">
			<Nobaby></Nobaby>
		</view>
		<view v-if="isLogin==3" class="tackmain">
			<TaskBar :babyList="babyList"></TaskBar>
			<view class="main_header">
				<text class="title">成长任务</text>
				<view class="slider">
					<view class="tags">
						您还没给宝宝设置接种方案，去设置
					</view>
					<van-slider
					  value="20"
					  bar-height="40rpx"
					  active-color="#E088FF"
					/>
					<view class="tab">
						<view class="td" @click="toList(1)">
							<van-icon size="80rpx" name="clock" :color="listShow==1?'#8686F7':'#fff'" />
							<text :style="{'color':listShow==1?'#8686F7':'#666'}">待完成</text>
						</view>
						<view class="td" @click="toList(2)">
							<van-icon size="80rpx" name="checked" :color="listShow==2?'#8686F7':'#fff'" />
							<text :style="{'color':listShow==2?'#8686F7':'#666'}">已完成</text>
						</view>
						<view class="td" @click="toList(3)">
							<van-icon size="80rpx" name="more" :color="listShow==3?'#8686F7':'#fff'" />
							<text :style="{'color':listShow==3?'#8686F7':'#666'}">全部</text>
						</view>
					</view>
				</view>
			</view>
			<view class="task_box">
				<view v-if="listShow==1" class="cellCla" v-for="item in 3" :key="item">
					<image src="../../static/img/vaccinated.png" mode=""></image>
					<view class="">
						<view class="tit">办理免疫预防接种证</view>
						<view class="">
							<text class="babyname">linda</text>
							<text class="date">2019-10-12</text>
						</view>
					</view>
				</view>
				<view v-if="listShow==2" class="cellCla" v-for="item in 2" :key="item">
					<image src="../../static/img/vaccinated.png" mode=""></image>
					<view class="">
						<view class="tit">办理免疫预防接种证</view>
						<view class="">
							<text class="babyname">linda</text>
							<text class="date">2019-10-12</text>
						</view>
					</view>
				</view>
				<view v-if="listShow==3" class="cellCla" v-for="item in 4" :key="item">
					<image src="../../static/img/vaccinated.png" mode=""></image>
					<view class="">
						<view class="tit">办理免疫预防接种证</view>
						<view class="">
							<text class="babyname">linda</text>
							<text class="date">2019-10-12</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import LoginIn from './component/Login.vue';
import Nobaby from './component/Nobaby.vue';
import TaskBar from './component/TaskBar.vue';
import authApi from '../../service/auth';
import babyApi from "../../service/baby";

export default {
	components:{
		LoginIn,
		Nobaby,
		TaskBar
	},
	data(){
		return{
			isLogin:'',
			babyList: [],
			listShow: 1,
		}
	},
	methods:{
		//用户登录成功后执行的操作
		//列表
		getbabyList(){
		 	babyApi.getBabyList().then(res=>{
		 		if(res.code == "0000"){
		 			this.babyList = res.data;
		 		}else{
		 			uni.showToast({
		 				icon:"none",
		 				title: res.responseMsg
		 			});
		 		}
		 	});
		},
		toList(type){
			if(type==1){
				this.listShow = 1
			}else if(type==2){
				this.listShow = 2
			}else if(type==3){
				this.listShow = 3
			}
		}
	},
	async onLoad(options){
	  const login = await authApi.login();
	  const isHaveBaby = await babyApi.isHaveBaby();
	  if(!login){
		this.isLogin = 1;
	  }else if(!isHaveBaby){
		this.isLogin = 2; 
	  }else{
		this.isLogin = 3;
		this.getbabyList();
	  }
	}
}
</script>

<style lang="less">
.tackmain{
	.main_header{
		background: #8686F7;
		height: 430rpx;
		padding: 10rpx 30rpx;
		display: block;
		.title{
			line-height: 120rpx;
			font-size: 54rpx;
			color: #fff;
		}
		.slider{
			width:90%;
			padding:5%;
			background: #F8F8FB;
			border-radius: 20rpx;
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
		margin: 30rpx;
	}
	.task_box_flex{
		
	}
	.cellCla{
		padding: 15px;
		background: #FAFAFB;
		margin-bottom:30rpx;
		border-radius: 20rpx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		image{
			margin-right: 30rpx;
			height: 40rpx;
			width: 40rpx;
		}
		.tit{
			color: #666;
			font-size: 32rpx;
		}
		.babyname{
			color: #999;
			font-size: 28rpx;
		}
		.date{
			color: #3f3f3f;
			float: right;
			font-size: 26rpx;
		}
	}
}
</style>
