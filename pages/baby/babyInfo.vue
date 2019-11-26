<template>
	<view class="main">
		<view class="text_area">
			<view class="title">
				宝宝详情卡
			</view>
			<view class="underline"></view>
		</view>
		<view class="babyInfo">
			<view class="babyInfoList">
				<view class="">
					<view class="" style="display: inline-block;padding: 10px 16px;">宝宝头像</view>
					<image class="babyImg" src="../../static/img/我的宝宝.png"></image>
				</view>
			  <van-field 
				  label="宝宝爱称" 
				  custom-style="height:100rpx;" 
				  input-class="nickCla" 
				  :value="nickname" 
				  placeholder="请输入宝宝爱称" 
				  size="large"/>
			</view>
			<view class="babyInfoList">
			  <van-cell title="宝宝性别" 
				  custom-class="cellCla" 
				  value-class="valueCla" 
				  :value="sexname" 
				  :border="false" 
				  is-link 
				  @click="showPopup(1)" 
				  size="large" />
			  <van-cell title="宝宝生日" 
				  custom-class="cellCla" 
				  value-class="valueCla" 
				  :value="birthday" 
				  is-link 
				  @click="showPopup(2)" 
				  size="large" />
			</view>
			<view class="babyInfoList">
			  <van-cell title="所在地" 
				  custom-class="cellCla"
				  value-class="valueCla" 
				  :value="local" 
				  :border="false" 
				  is-link 
				  @click="showPopup(3)" 
				  size="large" />
			  <van-cell title="接种点" 
				  custom-class="cellCla" 
				  value-class="valueCla" 
				  value="未填写" 
				  size="large" />
			</view>
			
			<van-popup
			  :show="show"
			  position="bottom"
			  custom-style="height: 50%;"
			  @close="onClose"
			>
				<van-picker
				v-if="type==1"
				  show-toolbar
				  :columns="columns"
				  @cancel="onCancel"
				  @confirm="onConfirm"
				/>
				<van-datetime-picker
				v-if="type==2"
				  type="date"
				  :value="currentDate"
				  :max-date="maxDate"
				  :formatter="formatter"
				  @cancel="onCancel"
				  @confirm="ondateConfirm"
				/>
				<van-area 
				v-if="type==3" 
				:area-list="areaList" 
				value="110101"
				@confirm="onareaConfirm"/>
			</van-popup>
		</view>
	</view>
</template>

<script>
	import babyApi from "../../service/baby";
	import city from "../../dataDict/city.js"
	
	export default {
		data() {
			return {
				areaList: city,
				show: false,
				columns: [
					{'text':'男','value':1},
					{'text':'女','value':2}],
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
				nickname: '',
				sexname: '未填写',
				sex: '',
				birthday: '未填写',
				local: '城市/区域',
				"cityCode": "",
				"cityName": "",
				"countyCode": "",
				"countyName": "",
				"provinceCode": "",
				"provinceName": "",
			};
		},
		onLoad(option){
			this.getbabyInfo(option);
		},
		methods:{
			getbabyInfo(id){
				babyApi.getBabyDetail(id).then(res=>{
					if(res.code == "0000"){
						debugger
						console.log(res)
					}else{
						uni.showToast({
							icon:"none",
							title: res.responseMsg
						});
					}
				});
			},
			showPopup(type) {
				this.type = type;
				this.show = true;
			},
			onClose() {
				this.show = false;
			},
			//性别
			onConfirm(event) {
				this.sexname = event.detail.value.text;
				this.sex = event.detail.value.value;
				this.show = false;
			},
			onCancel() {
				this.show = false;
			},
			//生日
			ondateConfirm(event) {
				var date = new Date(event.detail).toLocaleString();
				this.birthday = date.substr(0,date.indexOf(' '))
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
				this.show = false;
			}
		}
	}
</script>

<style lang="less">
.main{
	padding: 20rpx 6%;
	.text_area{
		padding-left: 20rpx;
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
	.babyInfo{
		font-size: 32rpx;
		margin-top: 10%;
		.nickCla{
			text-align: right;
		}
		.cellCla{
			height: 100rpx;
		}
		.babyInfoList{
			margin: 40rpx 0;
		}
		.babyImg{
			display: inline-block;
			width: 100rpx;
			height: 100rpx;
			float: right;
		}
		.valueCla{
			flex:3;
		}
	}
}

</style>
