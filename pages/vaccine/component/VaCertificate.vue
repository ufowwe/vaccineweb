<template>
	<view>
		<view class="card-header">
			<view v-if="!isLogin || !isHaveBaby">
				<text class="card-top-tip">您还没有添加宝宝，无法为您推荐接种方案。</text>
				<van-button @click="doAddBabyOrLogin" custom-class="card-top-btn" color="#8686F7" round icon="add" type="info">添加宝宝，获取接种方案</van-button>
			</view>
			<view v-else>
				<view v-if="!isHavePlan">
					<view class="card-top-tip">请在下面完善【<text> 宝宝昵称</text>】的接种记录，为您推荐后续接种方案</view>
					<van-button @click="setPlan" custom-class="card-top-btn" color="#8686F7" round icon="add" type="info">直接去设置接种方案</van-button>
				</view>
				<view v-else>
					<text class="card-top-tip">如接种点未接入本应用，请自行修改预约如期并更新接种记录</text>
					<van-checkbox custom-class="card-top-btn" :value="isMe" @change="selectMy">只显示我选择的疫苗</van-checkbox>
				</view>
			</view>
		</view>
		<!-- <view :class="['certmain',index%2?'':'certmainb']" :key="index" v-for="(item,index) in data.data.vaccineRecordGroupList">
			<view class="certmain_title">{{item.vaccinationAge}}</view>
			<view class="certmain_box" :key="idx" v-for="(itm,idx) in item.vaccineRecordDetailList">
				<van-button size="mini" color="#4BD2B6">免费</van-button>
				<text class="linemain">{{itm.name}}</text>
				<text></text>
				<text></text>
			</view>
		</view> -->
		<!--未登录 或者无宝宝状态下 不可点击 点击跳转登录页或者添加宝宝页面-->
		<view v-if="!isLogin || !isHaveBaby" @click="doAddBabyOrLogin">
			<view :class="['certmain',index%2?'':'certmainb']" :key="index" v-for="(item,index) in noLoginList">
				<view class="certmain_title">{{item.vaccinationAge}}</view>
				<view class="certmain_box" :key="idx" v-for="(itm,idx) in item.vaccineRecordDetailList">
					<van-button v-if="itm.freeStatus == 1" size="mini" color="#4BD2B6">免费</van-button>
					<van-button v-if="itm.freeStatus == 2" size="mini" color="#E088FF">自费</van-button>
					<view class="linemain">{{itm.name}}
						<text class="linemaindesc">(第{{itm.currTimes}}/{{itm.totalTimes}}剂)</text>
					</view>
					<view class="time-img-box">
						<text class="itm-time">2017-01-01</text>
						<van-image class="itm-img" v-if="!itm.vaccinationStatus" round width="40rpx" height="40rpx" src="/static/img/my.png" />
						<van-image class="itm-img" v-if="itm.vaccinationStatus" round  src="/static/img/myActive.png" />
					</view>
				</view>
			</view>
		</view>
		
		<!--登录状态下 有宝宝-->
		<view v-else>
			<view :class="['certmain',index%2?'':'certmainb']" :key="index" v-for="(item,index) in loginList">
				<view class="certmain_title">{{item.vaccinationAge}}</view>
				<view class="certmain_box" :key="idx" v-for="(itm,idx) in item.vaccineRecordDetailList">
					<van-button v-if="itm.freeStatus == 1" size="mini" color="#4BD2B6">免费</van-button>
					<van-button v-if="itm.freeStatus == 2" size="mini" color="#E088FF">自费</van-button>
					<view class="linemain">{{itm.name}}
						<text class="linemaindesc">(第{{itm.currTimes}}/{{itm.totalTimes}}剂)</text>
					</view>
					<view class="time-img-box">
						<text class="itm-time">2017-01-01</text>
						<van-image class="itm-img" v-if="!itm.vaccinationStatus" round width="40rpx" height="40rpx" src="/static/img/my.png" />
						<van-image class="itm-img" v-if="itm.vaccinationStatus" round  src="/static/img/myActive.png" />
					</view>
				</view>
			</view>
		</view>
		<timer-picker :show="showPopup"></timer-picker>
	</view>
</template>

<script>
	import authApi from "../../../service/auth";
	import babyApi from "../../../service/baby";
	import vaccineApi from "../../../service/vaccine";
	import timerPicker from "../../components/timePicker";
	export default {
		data() {
			return {
				isLogin:false,     //是否已登陆
				isHaveBaby:false,  //是否有宝宝
				isHavePlan:false,  //是否有接种方案
				isMe:false,        //只显示我选择的疫苗
				noLoginList:[],    //没有登录 或者 没有宝宝的时候 页面显示的数据
				loginList:[],      //有宝宝的时候 页面显示的数据
				showPopup:false
			};
		},
		components:{
			timerPicker
		},
		async mounted() {
			this.isLogin = await authApi.login();
			if(this.isLogin){
				this.isHaveBaby = await babyApi.isHaveBaby();
				if(!this.isHaveBaby){
					this.getNoLoginList();
				}
			}else{
				this.getNoLoginList();
			}
		},
		methods: {
			getNoLoginList(){
				let obj={
					"provinceId":"0",
					"schemeType":"0"
				};
				vaccineApi.getRecordNoLogin(obj).then(res=>{
					if(res.code == "0000"){
						if(res.data.vaccineRecordGroupList && res.data.vaccineRecordGroupList.length > 0){
							this.noLoginList = res.data.vaccineRecordGroupList;
						}else{
							this.noLoginList = [];
						}
					}else{
						uni.showToast({
							icon:"none",
						    title: res.responseMsg
						});
					}
				});	
			},
			changePage(val) {
				this.isShow = val;
			},
			doAddBabyOrLogin(){
				this.checkLogin("/pages/vaccine/index");
			},
			//调用接口 只显示我选择的疫苗
			selectMy(event){
				this.isMe = event.detail;
			},
			//直接去设置接种方案
			setPlan(){
				this.$emit("changePage",2);
			}
		}
	}
</script>

<style lang="less">
.certmain{
	padding: 30rpx;
	background: #fff;
	.certmain_title{
		color: #666666;
		font-size: 26rpx;
	}
	.certmain_box{
		color: #666666;
		font-size: 30rpx;
		line-height: 70rpx;
		margin:15rpx 0;
		.linemain{
			margin-left: 20rpx;
			display:inline-block;
			.linemaindesc{
				color:#3f3f3f;
			}
		}
		.time-img-box{
			display:inline-block;
			float:right;
		}
		.itm-img{
			margin-top:12rpx;
			vertical-align: sub;
		}
		.itm-time{
			margin-right:10rpx;
		}
	}
}
.certmainb{
	background: #FAFAFB;
}
.card-header{
	width:100%;
	box-sizing: border-box;
	padding:34rpx;
	padding-bottom: 0;
	.card-top-tip{
		line-height:42rpx;
		color:#E088FF;
		font-size:30rpx;
	}
	.card-top-btn{
		font-size:28rpx;
		height:60rpx;
		margin:30rpx 0;
	}
}
</style>
