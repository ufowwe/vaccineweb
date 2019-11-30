<template>
	<view class="yimain">
		<view class="yimain-box" v-if="sameEffectList.length>0">
			<van-cell is-link @click="tovaccInfo(item.id)" :border="false" v-for='(item,index) in sameEffectList' :key='index'>
			  <view slot="title">
				  <text v-if="item.freeStatus==1" class="type zistatus">免费</text>
				  <text v-if="item.freeStatus==2" class="type mianstatus">自费</text>
				  <text v-if="item.freeStatus==3" class="type bistatus">必打</text>
				  <view class="van-cell-text">{{item.name}}</view>
			  </view>
			</van-cell>
		</view>
		<view class="nodata" v-if="sameEffectList.length==0">
			暂无数据
		</view>
	</view>
</template>

<script>
	import global from '../../../utils/global.js';
	
	export default {
		props:{
			sameEffectList:{
				type: Array,
				default:()=>([])
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			tovaccInfo(id){
				this.babyId = global.getBabyId()
				uni.navigateTo({
					url:"/pages/vaccine/vaccineInfo?babyid="+this.babyId+"&vaccineDetailId="+id
				});
			}
		},
		mounted() {
			
		}
	}
</script>

<style lang="less">
.yimain{
	.nodata{
		text-align: center;
		line-height: 200rpx;
	}
	.yimain-box{
		margin: 30rpx ;
	}
	.van-cell-text{
		font-size: 36rpx;
		display: inline-block;
		margin-left: 30rpx;
		line-height: 50rpx;
	}
}

</style>
