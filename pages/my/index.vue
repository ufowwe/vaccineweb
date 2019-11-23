
<template>
	<view class="">
		<!-- <bar :nav="setNav"></bar> -->
		<view class="mymain" style="">
			<view class="myHead">
				<image src="../../static/img/desktop.jpg" mode=""></image>
			</view>
			<view class="groupmy">
				<view class="line">
					<van-cell title-class="leftclass" :border="false" title="邀请好友" icon="friends-o" is-link >
					<!-- <view slot="icon">
					  <image src="../../static/img/invite.png" mode=""></image>
					  <van-icon name="../../static/img/invite.png" />
					</view> -->
				  </van-cell>
				</view>
				<view class="line">
					<van-cell title-class="leftclass" :border="false" title="意见建议" icon="comment-o" is-link />
				</view> 
				<view class="line">
				 	<van-cell title-class="leftclass" :border="false" title="设置" icon="setting-o" is-link />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import Bar from '../../components/Bar.vue';

export default {
	components:{
		Bar
	},
	data(){
		return{
			// 自定义导航栏对象
			setNav:{
				'bg':'#5D58FF',  //背景色
				'color':'#fff',  //字体颜色
				'isdisPlayNavTitle':true, //是否显示返回按钮，由于导航栏是共用的，把所有的东西封装好，
				// 然后有些页面不需要的东西通过条件控制进行显示与隐藏
				'navTitle':'标题栏' //导航标题
			}
		}
	}
}
</script>

<style lang="less">
	.mymain{
		.myHead{
			height: 400rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.groupmy{
			padding: 6%;
			.leftclass{
				color: #666666;
				font-size: 32rpx;
			}
			.line{
				height: 100rpx;
				line-height: 100rpx;
			}
		}
	}
	
	
</style>
