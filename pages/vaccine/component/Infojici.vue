<template>
	<view class="cimain">
		<view class="" v-if="timesList.length>0">
			<view class="citable" :style="{'color':getcolor(item.status)}" v-for="(item,index) in timesList" :key="index">
				<view class="td">第{{item.times}}剂</view>
				<view class="td">{{item.vaccinationDate?item.vaccinationDate:'空'}}</view>
				<view class="td">{{getStatus(item.status)}}</view>
				<image class="tdimg" v-if="item.status==0" src="../../../static/img/unselected.png" mode=""></image>
				<image class="tdimg" v-if="item.status==1" src="../../../static/img/selected.png" mode=""></image>
				<image class="tdimg" v-if="item.status==2" src="../../../static/img/same_effect_selected.png" mode=""></image>
				<image class="tdimg" v-if="item.status==3" src="../../../static/img/same_effect_vaccinated.png" mode=""></image>
				<image class="tdimg" v-if="item.status==4" src="../../../static/img/part_vaccinated.png" mode=""></image>
				<image class="tdimg" v-if="item.status==5" src="../../../static/img/vaccinated.png" mode=""></image>
				<image class="tdimg" v-if="item.status==6" src="../../../static/img/missed.png" mode=""></image>
			</view>
		</view>
		<view class="nodata" v-if="timesList.length==0">
			暂无数据
		</view>
	</view>
</template>

<script>
	
	export default {
		props:{
			timesList:{
				type: Array,
				default:()=>([])
			}
		},
		watch:{
			
		},
		data() {
			return {
				
			};
		},
		methods:{
			getcolor(value){
				if(value == 0){
					return '#aaa'
				}else if(value == 1){
					return '#666'
				}else if(value == 2){
					return '#666'
				}else if(value == 3){
					return '#999'
				}else if(value == 4||value == 5){
					return '#8686F7'
				}else if(value == 6){
					return '#FF88AA '
				}
			},
			getStatus(value){
				if(value == 0){
					return '未选择'
				}else if(value == 1){
					return '已选未接种'
				}else if(value == 2){
					return '已选同效苗'
				}else if(value == 3){
					return '已种同效苗'
				}else if(value == 4){
					return '已部分接种'
				}else if(value == 5){
					return '已完成接种'
				}else if(value == 6){
					return '遗漏接种'
				}else{
					return '未选择'
				}
			}
		},
		mounted() {
			
		}
	}
</script>

<style lang="less">
.cimain{
	padding: 0 50rpx;
	.citable{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 40rpx 0;
	}
	.tdimg{
		width: 40rpx;
		height: 40rpx;
	}
	.nodata{
		text-align: center;
		line-height: 200rpx;
	}
}
</style>
