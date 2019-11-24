<template>
	<view>
		<van-popup :show="showPop" position="bottom"  custom-style="height: 60%;">
			<view class="popup-top">
				<van-checkbox class="popup-check" :value="isSelect" checked-color="#8686F7" @change="selcetChange">已接种</van-checkbox>
				<text>{{tipText}}</text>
			</view>
			<van-datetime-picker type="date" :value="currentDate" :min-date="minDate" :max-date="maxDate" @cancel="cancelPop"  @confirm="getTime"></van-datetime-picker>
		</van-popup>
	</view>
</template>

<script>
	import { formatTime } from  "../../utils/index.js";
	export default{
		data(){
			return{
				currentDate: new Date().getTime(),
				minDate:new Date(new Date()).getTime(),
				maxDate:new Date(new Date().getFullYear()+10,1,1).getTime(),
				isSelect:false,
				showPop:true,
				tipText:"选择预约接种日期"	
			}
		},
		methods:{
			setPopData(obj){
				this.checkStatus(obj);
			},
			selcetChange(event){
				this.isSelect = event.detail;
				if(!this.isSelect){
					this.tipText = "选择预约接种日期";
				}else{
					this.tipText = "选择实际接种日期";
				}
			},
			cancelPop(){
				this.$emit("cancel");
			},
			getTime(event){
				const time = formatTime(new Date(event.detail));
				const obj={
					status : this.isSelect,
					curTime : time
				}
				this.$emit("getSelect",obj);
			},
			checkStatus(obj){
				if(obj.status){
					this.isSelect = true;
					this.tipText = "选择实际接种日期";
					this.currentDate = new Date(obj.curTime).getTime() ? new Date(obj.curTime).getTime() : new Date().getTime();
					this.minDate = new Date(new Date().getFullYear()-10,1,1).getTime();
					this.maxDate = new Date().getTime();
				}else{
					this.isSelect = false;
					this.tipText = "选择预约接种日期";
					this.currentDate = new Date().getTime();
					this.maxDate = new Date(new Date().getFullYear()+10,1,1).getTime();
					this.minDate = new Date().getTime();
				}
			}
		},
		mounted(){
			
		},
		watch:{
			isSelect:function(value){
				if(value){
					this.minDate = new Date(new Date().getFullYear()-10,1,1).getTime();
					this.maxDate = new Date().getTime();
					this.currentDate = new Date().getTime();
				}else{
					this.maxDate = new Date(new Date().getFullYear()+10,1,1).getTime();
					this.minDate = new Date().getTime();
					this.currentDate = new Date().getTime();
				}
			}
		}
	}
</script>

<style lang="less">
.popup-top{
	padding:20rpx;
	overflow: hidden;
	.popup-check{
		margin-right:30rpx;
		display:inline-block;
	}
	&::after{
		clear:both;
	}
	
}
</style>

