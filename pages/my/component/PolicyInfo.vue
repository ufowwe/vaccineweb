<template>
	<view>
		<view class="">
			<!-- <van-panel custom-class="panelClass" header-class="headerClass" title="易安少儿疫无忧快乐版" :status="status" use-footer-slot> -->
			  <view class="panelClass" v-for="item in 2" :key="item">
				  <van-cell custom-class="headerClass" title="易安少儿疫无忧快乐版" value-class="valcolor" :value="status" />
					<van-card
					  :thumb="imageURL" custom-class="cardradius"
					>
					  <view slot="tags">
						<view class="">订单号：201910171436359102</view>
						<view class="">被保险人：王则人</view>
						<view class="">生效日期：2019-10-17</view>
						<view class="">保证期限：48小时</view>
						<view class="">合同金额：￥20.00</view>
					  </view>
					  <view slot="footer">
						  <view class="policybtn">
							<text class="statusName" v-if="status=='待付款'">取消订单</text>
							<text class="statusName" v-if="status=='已生效'||status=='已满期'">查阅保险合同</text>
							<text class="statusName" v-if="status=='已关闭'">删除订单</text>
							<van-button round v-if="status=='待付款'" color="#8686F7" size="small">付款</van-button>
							<van-button round v-if="status=='已生效'" color="#8686F7" size="small">理赔</van-button>
							<van-button round v-if="status=='已满期'" color="#8686F7" size="small">再次投保</van-button>
							<van-button round v-if="status=='已关闭'" color="#8686F7" size="small">重新投保</van-button>
						  </view>
					  </view>
					</van-card>
			  </view>
			<!-- </van-panel> -->
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			status:{
				type: String
			}
		},
		data() {
			return {
				imageURL: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574711283269&di=91d016b4fc559b8e6c69d069ab203319&imgtype=0&src=http%3A%2F%2Fimg.bx58.com%2Fattached%2Fimage%2F20171012133400_4986.jpg'
			};
		}
	}
</script>

<style lang="less">
.panelClass{
	margin: 30rpx;
	background: #FAFAFB;
	color: #666666;
	border-radius: 20rpx;
}
.headerClass{
	border-radius: 20rpx;
	background: #FAFAFB;
	color: #666666;
}
.policybtn{
	text-align: right;
	.statusName{
		color: #8686F7;
		font-size: 24rpx;
		margin-right: 15rpx;
	}
}
.valcolor{
	color: #E088FF;
}
.cardradius{
	border-radius: 20rpx;
}
</style>
