<template>
	<view>
		<van-panel v-for="item in 2" :key="item" custom-class="panelClass" header-class="headerClass" title="易安少儿疫无忧快乐版" :status="status" use-footer-slot>
		  <view>
			    <van-card
				  :thumb="imageURL"
				>
				  <view slot="tags">
					<view class="">订单号：</view>
					<view class="">被保险人：</view>
					<view class="">生效日期：</view>
					<view class="">保证期限：</view>
					<view class="">合同金额：</view>
				  </view>
				</van-card>
		  </view>
		  <view slot="footer">
			<text v-if="status=='待付款'">取消订单</text>
			<text v-if="status=='已生效'||status=='已满期'">查阅保险合同</text>
			<text v-if="status=='已关闭'">删除订单</text>
			<van-button v-if="status=='待付款'" color="#8686F7">付款</van-button>
			<van-button v-if="status=='已生效'" color="#8686F7">理赔</van-button>
			<van-button v-if="status=='已满期'" color="#8686F7">再次投保</van-button>
			<van-button v-if="status=='已关闭'" color="#8686F7">重新投保</van-button>
		  </view>
		</van-panel>
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
}
.headerClass{
	background: #FAFAFB;
	color: #666666;
}
</style>
