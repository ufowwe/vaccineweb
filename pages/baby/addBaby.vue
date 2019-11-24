<template>
	<view class="addBaby">
		<view class="title">
			<text>添加宝宝</text>
			<text></text>
		</view>
		<view class="addselect">
			<text class="addselect_title">宝宝性别</text>
			<view class="">
				<text class="sexBtn">小王子</text>
				<text class="sexBtn">小公主</text>
			</view>
		</view>
		<view class="addselect">
			<text class="addselect_title">宝宝生日</text>
			<view class="">
				<van-field
					:value="value"
					placeholder="请输入宝宝出生日期"
					:border="false"
					:focus="onChange"
				  />
				<!-- <van-overlay :show="isShow" bind:click="onClickHide" > -->
					<van-datetime-picker
					  type="date"
					  :value="currentDate"
					  bind:input="onInput"
					  :min-date="minDate"
					  v-if="isShow"
					  :formatter="formatter"
					/>
				<!-- </van-overlay> -->
			</view>
		</view>
		<view class="">
			<van-button color="#8686F7" round size="large" @click="savebabyBtn">添加</van-button>
		</view>
	</view>
</template>

<script>
	import babyApi from "../../service/baby";
	
	export default {
		data() {
			return {
				currentDate: new Date().getTime(),
				minDate: new Date().getTime(),
				formatter(type, value) {
				  if (type === 'year') {
					return `${value}年`;
				  } else if (type === 'month') {
					return `${value}月`;
				  }
				  return value;
				},
				backUrl:"",
				isShow: false,
			}
		},
		methods: {
			onChange(){
				this.isShow = true;
			},
			onInput(event) {
				this.setData({
				  currentDate: event.detail
				});
			},
			savebabyBtn(){
					let obj={
						"birthday": "2019-11-24",
						"sex": 0
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
	padding: 28rpx 50rpx;
	.title{
		font-size: 54rpx;
		color: #000;
		margin-bottom: 20%
	}
	.addselect{
		padding: 0 30rpx;
		margin-bottom: 10%;
		.addselect_title{
			font-size: 36rpx;
			color: #666;
		}
		.sexBtn{
			width: 50%;
		}
	}
}
	
</style>
