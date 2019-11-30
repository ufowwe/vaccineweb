<template>
	<view>
		<Bar :nav="setNav"></Bar>
		<view class="infomain">
			<view class="infomain-header">
				<view class="text-title">{{detail.name}}</view>
				<view class="text-status">
					<text v-if="detail.freeStatus==1" class="type zistatus">免费</text>
					<text v-if="detail.freeStatus==2" class="type mianstatus">自费</text>
					<text v-if="detail.freeStatus==3" class="type bistatus">必打</text>
					<text class="textright">{{getStatus(detail.status)}}</text>
				</view>
			</view>
			<view class="infomain-box">
				<view class="infomain-boxtop">
					<van-tabs :border="false" color="#8686F7" 
					line-width="30" line-height="4" 
					@click="onClick">
					  <van-tab title-style="font-size:32rpx;" title="疫苗介绍">
						  <Infojieshao :info="info" v-if="detail.id"></Infojieshao>
					  </van-tab>
					  <van-tab title-style="font-size:32rpx;" title="接种剂次">
						  <Infojici :timesList="timesList" v-if="detail.id"></Infojici>
					  </van-tab>
					  <van-tab title-style="font-size:32rpx;" title="同效疫苗">
						  <Infoyimiao :sameEffectList="sameEffectList" v-if="detail.id"></Infoyimiao>
					  </van-tab>
					</van-tabs>
				</view>
				<view class="infomain-boxbottom">
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import Bar from '../components/Bar.vue';
import vaccineApi from "../../service/vaccine";
import Infojieshao from "./component/Infojieshao"
import Infojici from "./component/Infojici"
import Infoyimiao from "./component/Infoyimiao"

export default {
	components:{
		Bar,
		Infojieshao,
		Infojici,
		Infoyimiao,
	},
	data(){
		return{
			// 自定义导航栏对象
			setNav:{
				'bg':'#8686F7',  //背景色
				'color':'#fff',  //字体颜色
				'isdisPlayNavTitle':true, //是否显示返回按钮，由于导航栏是共用的，把所有的东西封装好，
				'navTitle': '疫苗详情'
				// 然后有些页面不需要的东西通过条件控制进行显示与隐藏
			},
			detail: {},
			info: {},
			timesList: [],
			sameEffectList: [],
		}
	},
	onLoad(options) {
		this.getvaccDetail(options.babyid,options.vaccineDetailId)
	},
	methods: {
		onClick(event) {
		    // wx.showToast({
		    //   title: `点击标签 ${event.detail.name}`,
		    //   icon: 'none'
		    // });
		},
		getvaccDetail(babyid,vaccineDetailId){
			let obj={
				"babyid": babyid,
				"vaccineDetailId":vaccineDetailId
			}
			vaccineApi.getvaccDetail(obj).then(res=>{
				if(res.code == "0000"){
					if(res.data){
						this.detail = res.data;
						this.info = {
							vaccineDesc: this.detail.vaccineDesc,
							disease: this.detail.disease,
							vaccineChildren: this.detail.vaccineChildren,
							vaccinationWay: this.detail.vaccinationWay,
							contraindication: this.detail.contraindication,
							attention: this.detail.attention,
						};
						this.timesList = this.detail.timesList;
						this.sameEffectList = this.detail.sameEffectList;
					}else{
						
					}
				}else{
					uni.showToast({
						icon:"none",
					    title: res.responseMsg
					});
				}
			});
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
	}
}
</script>

<style lang="less">
.infomain{
	padding: 30rpx;
	.infomain-header{
		margin-bottom: 50rpx;
		.text-title{
			color: #666;
			font-size: 40rpx;
		}
	}
}
.infomain-box{
}
.textright{
	color: #666;
	font-size: 26rpx;
	float: right;
	margin-right: 20rpx;
}
.type{
	width: 66rpx;
	height: 30rpx;
	font-size: 20rpx;
	display: inline-block;
	text-align: center;
	line-height: 30rpx;
	color: #fff;
}
.zistatus{
	background: #4BD2B6;
}
.mianstatus{
	background: #E088FF;
}
.bistatus{
	background: #FF8465;
}
</style>