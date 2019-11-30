<template>
	<view>
		<!--头部文字提示-->
		<view class="card-header">
			<view v-if="!isLogin || !isHaveBaby">
				<text class="card-top-tip">您还没有添加宝宝，无法为您推荐接种方案。</text>
				<van-button @click="doAddBabyOrLogin" custom-class="card-top-btn" color="#8686F7" round icon="add" type="info">添加宝宝，获取接种方案</van-button>
			</view>
			<view v-else>
				<view v-if="!isHavePlan">
					<view class="card-top-tip">请在下面完善【<text v-if="baby.data && baby.data.nickname">{{baby.data.nickname}}</text><text v-else>宝宝昵称</text>】的接种记录，为您推荐后续接种方案</view>
					<van-button @click="setPlan" custom-class="card-top-btn" color="#8686F7" round icon="add" type="info">直接去设置接种方案</van-button>
				</view>
				<view v-else>
					<text class="card-top-tip">如接种点未接入本应用，请自行修改预约如期并更新接种记录</text>
					<van-checkbox custom-class="card-top-btn" :value="isMe" @change="selectMy">只显示我选择的疫苗</van-checkbox>
				</view>
			</view>
		</view>
		<!--未登录 或者无宝宝状态下 不可点击 点击跳转登录页或者添加宝宝页面-->
		<view v-if="!isLogin || !isHaveBaby" @click="doAddBabyOrLogin">
			<view :class="['certmain',index%2?'':'certmainb']" :key="index" v-for="(item,index) in noLoginList">
				<view class="certmain_title">{{item.vaccinationAge}}</view>
				<view class="certmain_box" :key="idx" v-for="(itm,idx) in item.vaccineRecordDetailList">
					<van-button class="certmain_btn" v-if="itm.freeStatus == 1" size="mini" color="#4BD2B6">免费</van-button>
					<van-button class="certmain_btn" v-if="itm.freeStatus == 2" size="mini" color="#E088FF">自费</van-button>
					<view class="linemain">{{itm.name}}
						<text class="linemaindesc">(第{{itm.currTimes}}/{{itm.totalTimes}}剂)</text>
					</view>
					<view class="time-img-box">
						<!-- <text class="itm-time">2017-01-01</text> -->
						<van-image class="itm-img" v-if="itm.status == 0" round  width="40rpx" height="40rpx" src="/static/img/unselected.png" />
						<van-image class="itm-img" v-if="itm.status == 1" round  width="40rpx" height="40rpx" src="/static/img/selected.png" />
						<van-image class="itm-img" v-if="itm.status == 2" round  width="40rpx" height="40rpx" src="/static/img/same_effect_selected.png" />
						<van-image class="itm-img" v-if="itm.status == 3" round  width="40rpx" height="40rpx" src="/static/img/same_effect_vaccinated.png" />
						<van-image class="itm-img" v-if="itm.status == 4" round  width="40rpx" height="40rpx" src="/static/img/part_vaccinated.png" />
						<van-image class="itm-img" v-if="itm.status == 5" round  width="40rpx" height="40rpx" src="/static/img/vaccinated.png" />
						<van-image class="itm-img" v-if="itm.status == 6" round  width="40rpx" height="40rpx" src="/static/img/missed.png" />
					</view>
				</view>
			</view>
		</view>
		
		<!--登录状态下 有宝宝-->
		<view v-else>
			<view :class="['certmain',index%2?'':'certmainb']" :key="index" v-for="(item,index) in loginList">
				<view class="certmain_title">{{item.vaccinationAge}}</view>
				<view class="certmain_box" :key="idx" v-for="(itm,idx) in item.vaccineRecordDetailList">
					<van-button class="certmain_btn" v-if="itm.freeStatus == 1" size="mini" color="#4BD2B6">免费</van-button>
					<van-button class="certmain_btn" v-if="itm.freeStatus == 2" size="mini" color="#E088FF">自费</van-button>
					<view class="linemain">{{itm.name}}
						<text class="linemaindesc">(第{{itm.currTimes}}/{{itm.totalTimes}}剂)</text>
					</view>
					<view class="time-img-box">
						<text @click="setTime(itm)" v-if="itm.vaccinationDate" class="itm-time">{{itm.vaccinationDate}}</text>
						
						<van-image @click="setTime(itm)"  class="itm-img" v-if="itm.status == 0" round  width="40rpx" height="40rpx" src="/static/img/unselected.png" />
						<van-image class="itm-img" v-if="itm.status == 1" round  width="40rpx" height="40rpx" src="/static/img/selected.png" />
						<van-image class="itm-img" v-if="itm.status == 2" round  width="40rpx" height="40rpx" src="/static/img/same_effect_selected.png" />
						<van-image class="itm-img" v-if="itm.status == 3" round  width="40rpx" height="40rpx" src="/static/img/same_effect_vaccinated.png" />
						<van-image @click="cancelTime(itm)" class="itm-img" v-if="itm.status == 4" round  width="40rpx" height="40rpx" src="/static/img/part_vaccinated.png" />
						<van-image @click="cancelTime(itm)" class="itm-img" v-if="itm.status == 5" round  width="40rpx" height="40rpx" src="/static/img/vaccinated.png" />
						<van-image class="itm-img" v-if="itm.status == 6" round  width="40rpx" height="40rpx" src="/static/img/missed.png" />
					</view>
				</view>
			</view>
		</view>
		<t-picker ref="pop" v-if="showPopup" @cancel="showPopup=false" @getSelect="getSelect"></t-picker>
		<van-dialog
		  :show="showCancelDialog"
		  show-cancel-button
		  message="取消当前状态将清除之前设置的接种时间,确定修改？"
		  @close="showCancelDialog = false"
		  @confirm="doClear"
		>
		  <image src="https://img.yzcdn.cn/1.jpg" />
		</van-dialog>
	</view>
</template>

<script>
	import global from "../../../utils/global.js";
	import authApi from "../../../service/auth";
	import babyApi from "../../../service/baby";
	import vaccineApi from "../../../service/vaccine";
	import tPicker from "../../components/timePicker";
	export default {
		data() {
			return {
				top:0,
				isLogin:false,     //是否已登陆
				isHaveBaby:false,  //是否有宝宝
				baby:{},           //宝宝详情
				isHavePlan:false,  //是否有接种方案
				isMe:false,        //只显示我选择的疫苗
				noLoginList:[],    //没有登录 或者 没有宝宝的时候 页面显示的数据
				loginList:[],      //有宝宝的时候 页面显示的数据
				selectItem:{},     //当前编辑的疫苗
				popData:{
					status:"",
					curTime:""
				},
				showPopup:false,
				showCancelDialog:false
			};
		},
		components:{
			tPicker
		},
		async mounted() {
			this.isLogin = await authApi.login();
			if(this.isLogin){
				this.isHaveBaby = await babyApi.isHaveBaby();
				//this.isHaveBaby = true;
				if(!this.isHaveBaby){
					this.getNoLoginList();
				}else{
					const obj={
						id:global.getBabyId()
					};
					this.baby = await babyApi.getBabyDetail(obj);
					console.log(this.baby);
					this.getLoginList();
				}
			}else{
				this.getNoLoginList();
			}
		},
		methods: {
			//用户登录后 有宝宝调用接口
			getLoginList(){
				let obj={
					babyId:global.getBabyId()
				};
				vaccineApi.getRecordByLogin(obj).then(res=>{
					if(res.code == "0000"){
						if(res.data.vaccineRecordGroupList && res.data.vaccineRecordGroupList.length > 0){
							this.loginList = res.data.vaccineRecordGroupList;
						}else{
							this.loginList = [];
						}
					}else{
						uni.showToast({
							icon:"none",
						    title: res.responseMsg
						});
					}
				});
			},
			//用户未登录 或者无宝宝时调用接口
			getNoLoginList(){
				vaccineApi.getRecordNoLogin().then(res=>{
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
			//更新接种证
			updateRecord(obj){
				const param={
					id :this.selectItem.vaccineSchemeId,
					vaccinationDate:obj.status ? obj.vaccinationDate : "",
					status:obj.status ? 5 : 0
				};
				vaccineApi.updateRecord(param).then(res=>{
					if(res.code == "0000"){
						uni.showToast({
							icon:"none",
						    title: "更新成功"
						});
						this.getLoginList();
					}else{
						uni.showToast({
							icon:"none",
						    title: res.responseMsg
						});
					}
				})
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
			},
			//去编辑当前疫苗状态
			setTime(item){
				this.showPopup = true;
				this.selectItem = item;
				const popData ={
					status : item.status,
					curTime: item.vaccinationDate
				};
				this.$nextTick(()=>{
					this.$refs.pop.setPopData(popData);
				})	
			},
			//取消当前疫苗状态
			cancelTime(item){
				this.selectItem = item;
				this.showCancelDialog = true;
			},
			doClear(){
				this.selectItem.status = 0;
				this.selectItem.vaccinationDate = "";
				this.showCancelDialog = false;
			},
			//从时间组件传来的数据
			getSelect(obj){
				if(obj.status){
					this.selectItem.status = 5;
					this.selectItem.vaccinationDate = obj.curTime;
				}else{
					this.selectItem.status = 0;
					this.selectItem.vaccinationDate = obj.curTime;
				}
				this.showPopup = false;
				//更新接种证
				this.updateRecord(this.selectItem);
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
		display:flex;
		align-items: center;
		.certmain_btn{
			flex:0 0 120rpx;
		}
		.linemain{
			margin-left: 20rpx;
			flex:0 0 340rpx;
			display:inline-block;
			.linemaindesc{
				color:#3f3f3f;
			}
		}
		.time-img-box{
			flex:0 0 220rpx;
			display:inline-block;
			text-align:right;
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
