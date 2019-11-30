<template>
	<view class="jiemain">
		<view class="jiebox">
			<view class="box-text">
				{{info.vaccineDesc}}
			</view>
			<view class="">
				<view class="box-title">
					<text class="shu"></text>
					预防疾病
				</view>
				<view class="box-text">
					{{info.disease}}
				</view>
			</view>
			<view class="">
				<view class="box-title">
					<text class="shu"></text>
					接种对象
				</view>
				<view class="box-text">
					{{info.vaccineChildren}}
				</view>
			</view>
			<view class="">
				<view class="box-title">
					<text class="shu"></text>
					接种方式
				</view>
				<view class="box-text">
					{{info.vaccinationWay}}
				</view>
			</view>
			<view class="">
				<view class="box-title">
					<text class="shu"></text>
					接种禁忌
				</view>
				<view class="box-text">
					{{info.contraindication}}
				</view>
			</view>
			<view class="">
				<view class="box-title">
					<text class="shu"></text>
					注意事项
				</view>
				<view class="box-text">
					{{info.attention}}
				</view>
			</view>
		</view>
		<view class="">
			<view class="" @click="toKnowmore">
				<van-button custom-style="height:55rpx;font-size:28rpx;" round color="#8686F7">疫苗相关知识</van-button>
				<text class="more">更多</text>
			</view>
			<view class="question">
				<view>* 什么是国家一类疫苗？</view>
				<view>* 一类疫苗与二类疫苗有何区别？</view>
				<view>* 该如何选择？</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			info:{
				type: Object,
				default:()=>({})
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			toKnowmore(){
				uni.navigateTo({
					url: "/pages/vaccine/vaccKnow"
				});
			}
		},
		mounted() {
			
		}
	}
</script>

<style lang="less">
.jiemain{
	width: 100%;
	.jiebox{
		border-radius: 30rpx;
		background: #FAFAFB;
		padding: 30rpx;
	}
	.box-text{
		color: #999;
		font-size: 30rpx;
		margin-bottom: 40rpx;
	}
	.shu{
		display: inline-block;
		width: 8rpx;
		height: 30rpx;
		background: #8686F7;
		border-radius: 8rpx;
		margin-right: 20rpx;
	}
	.box-title{
		color: #666;
		font-size: 36rpx;
		line-height: 60rpx;
	}
	.more{
		color: #8686F7;
		font-size: 26rpx;
		float: right;
	}
	.question{
		padding: 40rpx 20rpx;
		font-size: 30rpx;
		color: #666;
	}
}
</style>
