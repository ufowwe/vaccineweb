<template>
	<view class="addBaby">
		<view class="text_area">
			<view class="title">
				添加宝宝
			</view>
			<view class="underline"></view>
		</view>
		<view class="addselect">
			<view class="addselect_title">宝宝性别</view>
			<view class="">
				<view :class="['sexBtn',boyTyp?'boy':'']" @click="sexSelect(1)">
					<image :src="boyTyp?'../../static/img/boy-h.png':'../../static/img/boy.png'" mode=""></image>
					小王子</view>
				<view :class="['sexBtn',girlTyp?'girl':'']" @click="sexSelect(2)">
					<image :src="girlTyp?'../../static/img/gril-h.png':'../../static/img/gril.png'" mode=""></image>
					小公主</view>
			</view>
		</view>
		<view class="addselect">
			<view class="addselect_title">宝宝生日</view>
			<view :class="['birthdayBtn',birthTyp?'birth':'']" @click="showPopup(3)">
				<image :src="birthTyp?'../../static/img/Birthday-h.png':'../../static/img/Birthday.png'" mode=""></image>
				<text>{{birthday}}</text>
			</view>
		</view>
		<view class="addselect">
			<view class="addselect_title">宝宝所在地</view>
			<view :class="['birthdayBtn',localTyp?'birth':'']" @click="showPopup(4)">
				<image :src="localTyp?'../../static/img/local-h.jpg':'../../static/img/local.jpg'" mode=""></image>
				<text>{{local}}</text>
			</view>
		</view>
		<view class="">
			<van-button color="#8686F7" round size="large" @click="savebabyBtn">添加</van-button>
		</view>
		<van-popup
			  :show="show"
			  position="bottom"
			  custom-style="height: 50%;"
			  @close="onClose"
			>
			<van-datetime-picker
			v-if="type==3"
			  type="date"
			  :value="currentDate"
			  :max-date="maxDate"
			  :formatter="formatter"
			  @cancel="onCancel"
			  @confirm="ondateConfirm"
			/>
			<van-area 
			v-if="type==4" 
			:area-list="areaList"
			@confirm="onareaConfirm"/>
		</van-popup>
	</view>
</template>

<script>
	import babyApi from "../../service/baby";
	import city from "../../dataDict/city.js"
	
	export default {
		data() {
			return {
				backUrl:"",
				areaList: city,
				currentDate: new Date().getTime(),
				maxDate: new Date().getTime(),
				formatter(type, value) {
				  if (type === 'year') {
					return `${value}年`;
				  } else if (type === 'month') {
					return `${value}月`;
				  }
				  return value;
				},
				type: 1,
				boyTyp: false,
				girlTyp: false,
				birthTyp: false,
				localTyp: false,
				show: false,
				sexname: '',
				sex: '',
				birthday: '请选择宝宝出生日期',
				local: '请选择宝宝所在地',
				"cityCode": "",
				"cityName": "",
				"countyCode": "",
				"countyName": "",
				"provinceCode": "",
				"provinceName": "",
				
				
			}
		},
		methods: {
			showPopup(type) {
				this.type = type;
				this.show = true;	
			},
			onCancel() {
				this.show = false;
			},
			//生日
			ondateConfirm(event) {
				var date = new Date(event.detail).toLocaleString();
				this.birthday = date.substr(0,date.indexOf(' '))
				this.birthTyp = true;
				this.show = false;
			},
			//地区
			onareaConfirm(event){
				this.cityCode = event.detail.values[1].code;
				this.cityName = event.detail.values[1].name;
				this.countyCode = event.detail.values[2].code;
				this.countyName = event.detail.values[2].name;
				this.provinceCode = event.detail.values[0].code;
				this.provinceName = event.detail.values[0].name;
				this.local = this.provinceName+'/'+this.cityName+'/'+this.countyName;
				this.localTyp = true;
				this.show = false;
			},
			sexSelect(typ){
				if(typ==1){
					this.sex = 1;
					this.boyTyp = true;
					this.girlTyp = false;
				}else if(typ==2){
					this.sex = 2;
					this.boyTyp = false;
					this.girlTyp = true;
				}
			},
			savebabyBtn(){
				if(this.sex == ''){
					uni.showToast({
						icon:"none",
						title: '请选择宝宝性别'
					});
					return;
				}
				if(this.birthday == ''){
					uni.showToast({
						icon:"none",
						title: '请选择宝宝生日'
					});
					return;
				}
				if(this.provinceCode == ''){
					uni.showToast({
						icon:"none",
						title: '请选择宝宝所在地'
					});
					return;
				}
					let obj={
						"birthday": this.birthday,
						"sex": this.sex,
						"cityCode": this.cityCode,
						"cityName": this.cityName,
						"countyCode": this.countyCode,
						"countyName": this.countyName,
						"provinceCode": this.provinceCode,
						"provinceName": this.provinceName,
					};
					babyApi.babySave(obj).then(res=>{
						if(res.code == "0000"){
							console.log(this.backUrl)
							uni.switchTab({
							    url: this.backUrl || '/pages/task/index'
							});
						}else{
							uni.showToast({
								icon:"none",
							    title: res.responseMsg
							});
						}
					});
			}
		},
		onLoad(option){
			if(option.backpath){
				this.backUrl = option.backpath;
			}
		}
	}
</script>

<style lang="less">
.addBaby{
	padding: 20rpx 6%;
	.text_area{
		padding-left: 20rpx;
		margin-bottom:10%;
		.title{
			font-size: 54rpx;
			color: #000;
			position: relative;
			z-index: 9999;
		}
		.underline{
			width: 155rpx;
			height: 24rpx;
			background: #8686F7;
			position: relative;
			top: -22rpx;
			left: 30rpx;
			border-radius: 20rpx;

		}
	}
	.addselect{
		color: #999;
		padding: 0 30rpx;
		margin-bottom: 10%;
		.addselect_title{
			line-height: 100rpx;
			font-size: 36rpx;
			color: #666;
		}
		.sexBtn{
			padding: 20rpx 8%;
			display: inline-block;
			background: #F2F2F2 ;
			border-radius: 50rpx;
			margin-right: 20rpx;
			image{
				width: 38rpx;
				height: 38rpx;
				display:inline-block;
				margin-right:10rpx;
			}
		}
		.boy{
			background: #86D9F0;
			color: #fff;
		}
		.girl{
			background: #E088FF;
			color: #fff;
		}
		.birthdayBtn{
			padding: 20rpx 5%;
			width: 80%;
			background: #F2F2F2 ;
			border-radius: 100rpx;
			margin-right: 20rpx;
			image{
				width: 38rpx;
				height: 38rpx;
				display:inline-block;
				margin-right:10rpx;
			}
		}
		.birth{
			background: #8686F7;
			color: #fff;
		}
	}
}
	
</style>
