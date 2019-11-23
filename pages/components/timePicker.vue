<template>
	<view>
		<van-popup :show="showPopup" position="bottom"  custom-style="height: 50%;">
			<view>
				<van-checkbox :value="isSelect" checked-color="#8686F7" @change="selcetChange">已接种</van-checkbox>
				<text>{{tipText}}</text>
			</view>
			<van-datetime-picker type="datetime" :value="currentDate" :min-date="minDate" :max-date="maxDate" @confirm="getTime" @input="setTime"></van-datetime-picker>
		</van-popup>
	</view>
</template>

<script>
	export default{
		props:["show"],
		data(){
			return{
				currentDate: new Date().getTime(),
				maxDate:"",
				isSelect:false,
				showPopup:false,
				tipText:""	
			}
		},
		methods:{
			selcetChange(event){
				this.isSelect = event.detail;
				if(!this.isSelect){
					this.tipText = "选择预约接种日期";
					this.maxDate = "";
					this.minDate = new Date().getTime();;
				}else{
					this.tipText = "选择实际接种日期";
					this.maxDate = new Date().getTime();
					this.minDate = "";
				}
			},
			setTime(event){
				this.currentDate = event.detail;
			},
			getTime(value){
				console.log(value);
			}
		},
		watch:{
			show:function(value){
				this.showPopup = value;
			}
		}
	}
</script>

<style>
</style>

