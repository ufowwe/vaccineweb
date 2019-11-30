<template>
	<view class="main">
		<view class="text_area">
			<view class="title">
				意见反馈
			</view>
			<view class="underline"></view>
		</view>
		<view class="babyInfo">
			<view class="babyInfo-radio">
				<view class="" style="font-size: 36rpx;">选择您遇到的问题类型</view> 
				<van-radio-group :value="radio" @change="onChange">
				  <van-radio name="1" checked-color="#8686F7" label-class="labelCla">产品建议</van-radio>
				  <van-radio name="2" checked-color="#8686F7" label-class="labelCla">账号安全</van-radio>
				  <van-radio name="3" checked-color="#8686F7" label-class="labelCla">功能</van-radio>
				  <van-radio name="4" checked-color="#8686F7" label-class="labelCla">其他</van-radio>
				</van-radio-group>
			</view>
			<view class="babyInfo-message">
				<van-field
				custom-style="min-height:240rpx;"
				    :value="message"
				    type="textarea"
				    placeholder="亲,我们对您提出的建议无比重视,您的宝贵经验将是我们不断成长的动力和源泉,非常感谢"
				    autosize
				  />
			</view>
			<view class="">
				<view style="font-size: 36rpx;color: #666;line-height: 80rpx;">上传照片（{{fileList.length}}/5）</view>
				<van-uploader :file-list="fileList" :max-count="5" @after-read="afterRead"/>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				radio: '1',
				message: '',
				fileList: [
				      { url: 'https://img.yzcdn.cn/vant/cat.jpeg', name: '图片1' },
				      // Uploader 根据文件后缀来判断是否为图片文件
				      // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
				      { url: 'http://iph.href.lu/60x60?text=default', name: '图片2', isImage: true }
				    ]
			};
		},
		onLoad(option){
			
		},
		methods:{
			onChange(event) {
			    this.radio = event.detail
			},
			afterRead(event) {
			  const { file } = event.detail;
			  // 当设置 mutiple 为 true 是 file 是一个数组，mutiple 默认为 false，file 是一个对象
			  wx.uploadFile({
				url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
				filePath: file.path,
				name: 'file',
				formData: { 'user': 'test' },
				success (res){
				  // 上传完成需要更新fileList
				  const { fileList = [] } = this.data;
				  fileList.push({ ...file, url: res.data });
				  this.setData({ fileList });
				}
			  });
			}
		}
	}
</script>

<style lang="less">
.main{
	padding: 20rpx 6%;
	.text_area{
		padding-left: 20rpx;
		.title{
			font-size: 54rpx;
			color: #000;
			position: relative;
			z-index: 9999;
		}
		.underline{
			width: 155rpx;
			height: 24rpx;
			background: #8686F7;
			position: relative;
			top: -22rpx;
			left: 30rpx;
			border-radius: 20rpx;

		}
	}
	.babyInfo{
		margin-top: 40rpx;
		.babyInfo-radio{
			color: #666;
		}
		.labelCla{
			font-size: 28rpx;
			margin:20rpx 20rpx;
		}
		.babyInfo-message{
			height: 300rpx;
		}
	}
}

</style>
