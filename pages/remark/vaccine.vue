<template>
	<view class="">
		<VaccBar :nav="setNav" @changePage="changePage"></VaccBar>
		<view v-if="isShow" class="" style="">
			接种证
		</view>
		<view v-if="!isShow" class="" style="">
			<!-- <view class="select_box"> -->
				<!-- <view class="select_box">
					<view class="select_one" bindtap="mySelect" data-name="重庆分店">重庆分店</view>
					<view class="select_one" bindtap="mySelect" data-name="东莞南城分店">东莞南城分店</view>
					<view class="select_one" bindtap="mySelect" data-name="东莞总店">东莞总店</view>
				</view> -->
			<!-- </view> -->
			<view class="table">
			  <view class="tr bg-w">
				<view class="th thHead">儿童疫苗</view>
				<view class="th overauto" v-for="(item,index) in data.data.columnList">{{item.vaccinationAge}}</view>
			  </view>
			  <block>
				<view class="tr bg-g" v-for="(item,index) in data.data.schemeVaccineInfoList">
				    <view class="td tdHead ">
					  <van-checkbox :value="checked" @change="onChange">
					    <text>{{item.vaccineName}}</text>
					  </van-checkbox>
				    </view>
					<view class="td overauto" v-for="(it,idx) in data.data.columnList">
					  <view class="" v-if="it.monthNumS == item.cellMap[key].monthNumS" v-for="(value,key,index) in item.cellMap">
						{{key}}
					  </view>
					</view>
				</view>
			  </block>
			</view>
		</view>
	</view>
</template>

<script>
	import VaccBar from './component/vaccBar.vue';
	export default {
	    components:{
			VaccBar
		},
		data(){
			return{
				// 自定义导航栏对象
				setNav:{
					'bg':'#5D58FF',  //背景色
					'color':'#fff',  //字体颜色
					'navTitleLeft':'接种证', //导航标题
					'navTitleRight':'接种方案', //导航标题
				},
				data:{
				  "code": "0000",
				  "responseMsg": "查询成功",
				  "data": {
					"hospitalTimes": 12,
					"totalDosageNum": 24,
					"vaccineNum": 34,
					"diseaseNum": 34,
					"columnList": [
					  {
						"vaccinationAge": "出生",
						"monthNumS": 0,
						"monthNumE": 0
					  },
					  {
						"vaccinationAge": "1月龄",
						"monthNumS": 1,
						"monthNumE": 1
					  },
					  {
						"vaccinationAge": "2月龄",
						"monthNumS": 2,
						"monthNumE": 2
					  },
					  {
						"vaccinationAge": "3月龄",
						"monthNumS": 3,
						"monthNumE": 3
					  },
					  {
						"vaccinationAge": "4月龄",
						"monthNumS": 4,
						"monthNumE": 4
					  },
					  {
						"vaccinationAge": "5月龄",
						"monthNumS": 5,
						"monthNumE": 5
					  },
					  {
						"vaccinationAge": "6月龄",
						"monthNumS": 6,
						"monthNumE": 6
					  },
					  {
						"vaccinationAge": "7月龄",
						"monthNumS": 7,
						"monthNumE": 7
					  },
					  {
						"vaccinationAge": "8月龄",
						"monthNumS": 8,
						"monthNumE": 8
					  },
					  {
						"vaccinationAge": "9月龄",
						"monthNumS": 9,
						"monthNumE": 9
					  },
					  {
						"vaccinationAge": "12月龄",
						"monthNumS": 12,
						"monthNumE": 12
					  },
					  {
						"vaccinationAge": "14月龄",
						"monthNumS": 14,
						"monthNumE": 14
					  },
					  {
						"vaccinationAge": "18~24月龄",
						"monthNumS": 18,
						"monthNumE": 24
					  },
					  {
						"vaccinationAge": "18月龄",
						"monthNumS": 18,
						"monthNumE": 18
					  },
					  {
						"vaccinationAge": "2周岁",
						"monthNumS": 24,
						"monthNumE": 24
					  },
					  {
						"vaccinationAge": "26月龄",
						"monthNumS": 26,
						"monthNumE": 26
					  },
					  {
						"vaccinationAge": "30月龄",
						"monthNumS": 30,
						"monthNumE": 30
					  },
					  {
						"vaccinationAge": "3周岁",
						"monthNumS": 36,
						"monthNumE": 36
					  },
					  {
						"vaccinationAge": "4周岁",
						"monthNumS": 48,
						"monthNumE": 48
					  },
					  {
						"vaccinationAge": "4~6周岁",
						"monthNumS": 48,
						"monthNumE": 72
					  },
					  {
						"vaccinationAge": "5周岁",
						"monthNumS": 60,
						"monthNumE": 60
					  },
					  {
						"vaccinationAge": "6周岁",
						"monthNumS": 72,
						"monthNumE": 72
					  },
					  {
						"vaccinationAge": "7周岁",
						"monthNumS": 84,
						"monthNumE": 84
					  },
					  {
						"vaccinationAge": "8周岁",
						"monthNumS": 96,
						"monthNumE": 96
					  },
					  {
						"vaccinationAge": "9周岁",
						"monthNumS": 108,
						"monthNumE": 108
					  },
					  {
						"vaccinationAge": "9.5周岁",
						"monthNumS": 114,
						"monthNumE": 114
					  }
					],
					"schemeVaccineInfoList": [
					  {
						"vaccineName": "乙肝疫苗",
						"vaccineDetailId": 1,
						"sameEffect": null,
						"relevant": null,
						"cellMap": {
						  "1_0": {
							"vaccineDetailId": 1,
							"vaccineSchemeId": 1,
							"times": null,
							"monthNumS": 0,
							"monthNumE": 0,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "1_1": {
							"vaccineDetailId": 1,
							"vaccineSchemeId": 2,
							"times": null,
							"monthNumS": 1,
							"monthNumE": 1,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "1_6": {
							"vaccineDetailId": 1,
							"vaccineSchemeId": 3,
							"times": null,
							"monthNumS": 6,
							"monthNumE": 6,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "卡介苗",
						"vaccineDetailId": 2,
						"sameEffect": null,
						"relevant": null,
						"cellMap": {
						  "2_0": {
							"vaccineDetailId": 2,
							"vaccineSchemeId": 4,
							"times": null,
							"monthNumS": 0,
							"monthNumE": 0,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "脊灰灭活疫苗(1)",
						"vaccineDetailId": 5,
						"sameEffect": "12",
						"relevant": "12",
						"cellMap": {
						  "5_2": {
							"vaccineDetailId": 5,
							"vaccineSchemeId": 5,
							"times": null,
							"monthNumS": 2,
							"monthNumE": 2,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "脊灰灭活疫苗(2)",
						"vaccineDetailId": 40,
						"sameEffect": null,
						"relevant": "6,12",
						"cellMap": {
						  "40_3": {
							"vaccineDetailId": 40,
							"vaccineSchemeId": 6,
							"times": null,
							"monthNumS": 3,
							"monthNumE": 3,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "40_4": {
							"vaccineDetailId": 40,
							"vaccineSchemeId": 7,
							"times": null,
							"monthNumS": 4,
							"monthNumE": 4,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "40_48": {
							"vaccineDetailId": 40,
							"vaccineSchemeId": 8,
							"times": null,
							"monthNumS": 48,
							"monthNumE": 48,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "脊灰减毒疫苗",
						"vaccineDetailId": 6,
						"sameEffect": "12,40",
						"relevant": "12,40",
						"cellMap": {
						  "6_3": {
							"vaccineDetailId": 6,
							"vaccineSchemeId": 9,
							"times": null,
							"monthNumS": 3,
							"monthNumE": 3,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "6_4": {
							"vaccineDetailId": 6,
							"vaccineSchemeId": 10,
							"times": null,
							"monthNumS": 4,
							"monthNumE": 4,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "6_48": {
							"vaccineDetailId": 6,
							"vaccineSchemeId": 11,
							"times": null,
							"monthNumS": 48,
							"monthNumE": 48,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "Hib结合疫苗",
						"vaccineDetailId": 7,
						"sameEffect": null,
						"relevant": "11,12,28",
						"cellMap": {
						  "7_2": {
							"vaccineDetailId": 7,
							"vaccineSchemeId": 12,
							"times": null,
							"monthNumS": 2,
							"monthNumE": 2,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "7_3": {
							"vaccineDetailId": 7,
							"vaccineSchemeId": 13,
							"times": null,
							"monthNumS": 3,
							"monthNumE": 3,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "7_4": {
							"vaccineDetailId": 7,
							"vaccineSchemeId": 14,
							"times": null,
							"monthNumS": 4,
							"monthNumE": 4,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "7_18": {
							"vaccineDetailId": 7,
							"vaccineSchemeId": 15,
							"times": null,
							"monthNumS": 18,
							"monthNumE": 18,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "百白破疫苗",
						"vaccineDetailId": 8,
						"sameEffect": "11,12",
						"relevant": "11,12",
						"cellMap": {
						  "8_3": {
							"vaccineDetailId": 8,
							"vaccineSchemeId": 16,
							"times": null,
							"monthNumS": 3,
							"monthNumE": 3,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "8_4": {
							"vaccineDetailId": 8,
							"vaccineSchemeId": 17,
							"times": null,
							"monthNumS": 4,
							"monthNumE": 4,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "8_5": {
							"vaccineDetailId": 8,
							"vaccineSchemeId": 18,
							"times": null,
							"monthNumS": 5,
							"monthNumE": 5,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "8_18": {
							"vaccineDetailId": 8,
							"vaccineSchemeId": 19,
							"times": null,
							"monthNumS": 18,
							"monthNumE": 24,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "白破疫苗",
						"vaccineDetailId": 9,
						"sameEffect": null,
						"relevant": null,
						"cellMap": {
						  "9_72": {
							"vaccineDetailId": 9,
							"vaccineSchemeId": 20,
							"times": null,
							"monthNumS": 72,
							"monthNumE": 72,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "13价肺炎结合疫苗",
						"vaccineDetailId": 10,
						"sameEffect": null,
						"relevant": null,
						"cellMap": {
						  "10_2": {
							"vaccineDetailId": 10,
							"vaccineSchemeId": 21,
							"times": null,
							"monthNumS": 2,
							"monthNumE": 2,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "10_3": {
							"vaccineDetailId": 10,
							"vaccineSchemeId": 22,
							"times": null,
							"monthNumS": 3,
							"monthNumE": 3,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "10_4": {
							"vaccineDetailId": 10,
							"vaccineSchemeId": 23,
							"times": null,
							"monthNumS": 4,
							"monthNumE": 4,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "10_12": {
							"vaccineDetailId": 10,
							"vaccineSchemeId": 24,
							"times": null,
							"monthNumS": 12,
							"monthNumE": 12,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "AC-Hib三联疫苗",
						"vaccineDetailId": 28,
						"sameEffect": null,
						"relevant": "7,12,20,22",
						"cellMap": {
						  "28_6": {
							"vaccineDetailId": 28,
							"vaccineSchemeId": 25,
							"times": null,
							"monthNumS": 6,
							"monthNumE": 6,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "28_9": {
							"vaccineDetailId": 28,
							"vaccineSchemeId": 26,
							"times": null,
							"monthNumS": 9,
							"monthNumE": 9,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "四联疫苗",
						"vaccineDetailId": 11,
						"sameEffect": null,
						"relevant": "7,8,12",
						"cellMap": {
						  "11_3": {
							"vaccineDetailId": 11,
							"vaccineSchemeId": 27,
							"times": null,
							"monthNumS": 3,
							"monthNumE": 3,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "11_4": {
							"vaccineDetailId": 11,
							"vaccineSchemeId": 28,
							"times": null,
							"monthNumS": 4,
							"monthNumE": 4,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "11_5": {
							"vaccineDetailId": 11,
							"vaccineSchemeId": 29,
							"times": null,
							"monthNumS": 5,
							"monthNumE": 5,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "11_18": {
							"vaccineDetailId": 11,
							"vaccineSchemeId": 30,
							"times": null,
							"monthNumS": 18,
							"monthNumE": 18,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "五联疫苗",
						"vaccineDetailId": 12,
						"sameEffect": null,
						"relevant": "5,40,6,7,8,11,28",
						"cellMap": {
						  "12_2": {
							"vaccineDetailId": 12,
							"vaccineSchemeId": 31,
							"times": null,
							"monthNumS": 2,
							"monthNumE": 2,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "12_3": {
							"vaccineDetailId": 12,
							"vaccineSchemeId": 32,
							"times": null,
							"monthNumS": 3,
							"monthNumE": 3,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "12_4": {
							"vaccineDetailId": 12,
							"vaccineSchemeId": 33,
							"times": null,
							"monthNumS": 4,
							"monthNumE": 4,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "12_18": {
							"vaccineDetailId": 12,
							"vaccineSchemeId": 34,
							"times": null,
							"monthNumS": 18,
							"monthNumE": 18,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "单价轮状病毒疫苗",
						"vaccineDetailId": 13,
						"sameEffect": null,
						"relevant": "14",
						"cellMap": {
						  "13_2": {
							"vaccineDetailId": 13,
							"vaccineSchemeId": 35,
							"times": null,
							"monthNumS": 2,
							"monthNumE": 2,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "13_14": {
							"vaccineDetailId": 13,
							"vaccineSchemeId": 36,
							"times": null,
							"monthNumS": 14,
							"monthNumE": 14,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "13_26": {
							"vaccineDetailId": 13,
							"vaccineSchemeId": 37,
							"times": null,
							"monthNumS": 26,
							"monthNumE": 26,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "5价轮状病毒疫苗 ",
						"vaccineDetailId": 14,
						"sameEffect": null,
						"relevant": "13",
						"cellMap": {
						  "14_1": {
							"vaccineDetailId": 14,
							"vaccineSchemeId": 38,
							"times": null,
							"monthNumS": 1,
							"monthNumE": 1,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "14_2": {
							"vaccineDetailId": 14,
							"vaccineSchemeId": 39,
							"times": null,
							"monthNumS": 2,
							"monthNumE": 2,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "14_3": {
							"vaccineDetailId": 14,
							"vaccineSchemeId": 40,
							"times": null,
							"monthNumS": 3,
							"monthNumE": 3,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "麻风疫苗",
						"vaccineDetailId": 15,
						"sameEffect": null,
						"relevant": null,
						"cellMap": {
						  "15_8": {
							"vaccineDetailId": 15,
							"vaccineSchemeId": 41,
							"times": null,
							"monthNumS": 8,
							"monthNumE": 8,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "麻腮风疫苗",
						"vaccineDetailId": 16,
						"sameEffect": null,
						"relevant": null,
						"cellMap": {
						  "16_18": {
							"vaccineDetailId": 16,
							"vaccineSchemeId": 42,
							"times": null,
							"monthNumS": 18,
							"monthNumE": 18,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "16_72": {
							"vaccineDetailId": 16,
							"vaccineSchemeId": 43,
							"times": null,
							"monthNumS": 72,
							"monthNumE": 72,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "腮腺炎疫苗",
						"vaccineDetailId": 17,
						"sameEffect": null,
						"relevant": null,
						"cellMap": {
						  "17_48": {
							"vaccineDetailId": 17,
							"vaccineSchemeId": 44,
							"times": null,
							"monthNumS": 48,
							"monthNumE": 72,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "乙脑减毒疫苗",
						"vaccineDetailId": 18,
						"sameEffect": null,
						"relevant": "19",
						"cellMap": {
						  "18_8": {
							"vaccineDetailId": 18,
							"vaccineSchemeId": 45,
							"times": null,
							"monthNumS": 8,
							"monthNumE": 8,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "18_24": {
							"vaccineDetailId": 18,
							"vaccineSchemeId": 46,
							"times": null,
							"monthNumS": 24,
							"monthNumE": 24,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "乙脑灭活疫苗",
						"vaccineDetailId": 19,
						"sameEffect": null,
						"relevant": "18",
						"cellMap": {
						  "19_8": {
							"vaccineDetailId": 19,
							"vaccineSchemeId": 47,
							"times": null,
							"monthNumS": 8,
							"monthNumE": 8,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "19_24": {
							"vaccineDetailId": 19,
							"vaccineSchemeId": 48,
							"times": null,
							"monthNumS": 24,
							"monthNumE": 24,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "A群流脑多糖疫苗",
						"vaccineDetailId": 20,
						"sameEffect": "22,28",
						"relevant": "22",
						"cellMap": {
						  "20_6": {
							"vaccineDetailId": 20,
							"vaccineSchemeId": 49,
							"times": null,
							"monthNumS": 6,
							"monthNumE": 6,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "20_9": {
							"vaccineDetailId": 20,
							"vaccineSchemeId": 50,
							"times": null,
							"monthNumS": 9,
							"monthNumE": 9,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "AC群流脑多糖疫苗",
						"vaccineDetailId": 21,
						"sameEffect": "23",
						"relevant": "23",
						"cellMap": {
						  "21_36": {
							"vaccineDetailId": 21,
							"vaccineSchemeId": 51,
							"times": null,
							"monthNumS": 36,
							"monthNumE": 36,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "21_72": {
							"vaccineDetailId": 21,
							"vaccineSchemeId": 52,
							"times": null,
							"monthNumS": 72,
							"monthNumE": 72,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "AC群流脑结合疫苗",
						"vaccineDetailId": 22,
						"sameEffect": null,
						"relevant": "20,28",
						"cellMap": {
						  "22_6": {
							"vaccineDetailId": 22,
							"vaccineSchemeId": 53,
							"times": null,
							"monthNumS": 6,
							"monthNumE": 6,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "22_9": {
							"vaccineDetailId": 22,
							"vaccineSchemeId": 54,
							"times": null,
							"monthNumS": 9,
							"monthNumE": 9,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "4价流脑多糖疫苗",
						"vaccineDetailId": 23,
						"sameEffect": null,
						"relevant": "21",
						"cellMap": {
						  "23_36": {
							"vaccineDetailId": 23,
							"vaccineSchemeId": 55,
							"times": null,
							"monthNumS": 36,
							"monthNumE": 36,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "23_72": {
							"vaccineDetailId": 23,
							"vaccineSchemeId": 56,
							"times": null,
							"monthNumS": 72,
							"monthNumE": 72,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "甲肝减毒疫苗",
						"vaccineDetailId": 24,
						"sameEffect": null,
						"relevant": null,
						"cellMap": {
						  "24_18": {
							"vaccineDetailId": 24,
							"vaccineSchemeId": 57,
							"times": null,
							"monthNumS": 18,
							"monthNumE": 18,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "甲肝灭活疫苗",
						"vaccineDetailId": 25,
						"sameEffect": null,
						"relevant": null,
						"cellMap": {
						  "25_18": {
							"vaccineDetailId": 25,
							"vaccineSchemeId": 58,
							"times": null,
							"monthNumS": 18,
							"monthNumE": 18,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "25_24": {
							"vaccineDetailId": 25,
							"vaccineSchemeId": 59,
							"times": null,
							"monthNumS": 24,
							"monthNumE": 24,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "EV71手足口疫苗",
						"vaccineDetailId": 26,
						"sameEffect": null,
						"relevant": null,
						"cellMap": {
						  "26_6": {
							"vaccineDetailId": 26,
							"vaccineSchemeId": 60,
							"times": null,
							"monthNumS": 6,
							"monthNumE": 6,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "26_7": {
							"vaccineDetailId": 26,
							"vaccineSchemeId": 61,
							"times": null,
							"monthNumS": 7,
							"monthNumE": 7,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "23价肺炎多糖疫苗",
						"vaccineDetailId": 27,
						"sameEffect": null,
						"relevant": null,
						"cellMap": {
						  "27_24": {
							"vaccineDetailId": 27,
							"vaccineSchemeId": 62,
							"times": null,
							"monthNumS": 24,
							"monthNumE": 24,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "水痘疫苗",
						"vaccineDetailId": 29,
						"sameEffect": null,
						"relevant": null,
						"cellMap": {
						  "29_12": {
							"vaccineDetailId": 29,
							"vaccineSchemeId": 63,
							"times": null,
							"monthNumS": 12,
							"monthNumE": 12,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "29_48": {
							"vaccineDetailId": 29,
							"vaccineSchemeId": 64,
							"times": null,
							"monthNumS": 48,
							"monthNumE": 48,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "2价HPV疫苗",
						"vaccineDetailId": 30,
						"sameEffect": null,
						"relevant": null,
						"cellMap": {
						  "30_108": {
							"vaccineDetailId": 30,
							"vaccineSchemeId": 65,
							"times": null,
							"monthNumS": 108,
							"monthNumE": 108,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "30_114": {
							"vaccineDetailId": 30,
							"vaccineSchemeId": 66,
							"times": null,
							"monthNumS": 114,
							"monthNumE": 114,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "4价流感疫苗",
						"vaccineDetailId": 31,
						"sameEffect": null,
						"relevant": null,
						"cellMap": {
						  "31_36": {
							"vaccineDetailId": 31,
							"vaccineSchemeId": 67,
							"times": null,
							"monthNumS": 36,
							"monthNumE": 36,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "31_48": {
							"vaccineDetailId": 31,
							"vaccineSchemeId": 68,
							"times": null,
							"monthNumS": 48,
							"monthNumE": 48,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "31_60": {
							"vaccineDetailId": 31,
							"vaccineSchemeId": 69,
							"times": null,
							"monthNumS": 60,
							"monthNumE": 60,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "31_72": {
							"vaccineDetailId": 31,
							"vaccineSchemeId": 70,
							"times": null,
							"monthNumS": 72,
							"monthNumE": 72,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "31_84": {
							"vaccineDetailId": 31,
							"vaccineSchemeId": 71,
							"times": null,
							"monthNumS": 84,
							"monthNumE": 84,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "31_96": {
							"vaccineDetailId": 31,
							"vaccineSchemeId": 72,
							"times": null,
							"monthNumS": 96,
							"monthNumE": 96,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "31_108": {
							"vaccineDetailId": 31,
							"vaccineSchemeId": 73,
							"times": null,
							"monthNumS": 108,
							"monthNumE": 108,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  },
					  {
						"vaccineName": "3价流感疫苗",
						"vaccineDetailId": 32,
						"sameEffect": null,
						"relevant": null,
						"cellMap": {
						  "32_6": {
							"vaccineDetailId": 32,
							"vaccineSchemeId": 74,
							"times": null,
							"monthNumS": 6,
							"monthNumE": 6,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "32_7": {
							"vaccineDetailId": 32,
							"vaccineSchemeId": 75,
							"times": null,
							"monthNumS": 7,
							"monthNumE": 7,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "32_18": {
							"vaccineDetailId": 32,
							"vaccineSchemeId": 76,
							"times": null,
							"monthNumS": 18,
							"monthNumE": 18,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "32_30": {
							"vaccineDetailId": 32,
							"vaccineSchemeId": 77,
							"times": null,
							"monthNumS": 30,
							"monthNumE": 30,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  }
						}
					  }
					]
				  }
				},
				isShow: false,
				checked: true,
			}
		},
		methods: {
			changePage(val) {
				this.isShow = val;
			},
			onChange(){
				
			},
			mySelect(e) {
				var name = e.currentTarget.dataset.name
				this.setData({
					tihuoWay: name,
					select: false
				})
			},
		}
	}
</script>

<style>
.table {
  border: 0px solid darkgray;
  overflow-x: auto;
  height: 100%;
}
.tr {
  display: flex;
  width: 5000rpx;
  justify-content: center;
  height: 80%;
  align-items: center;
}
.td {
    width:50%;
	height: 100rpx;
	border: 1rpx solid #F8F8F8;
    justify-content: center;
    text-align: center;
}
.bg-w{
  background: #EFEFFF;
}
.bg-g{
  background: #fff;
}
.th {
  width: 50%;
  justify-content: center;
  background: #F2F3F5;
  color: #000;
  border: 1rpx solid #F8F8F8;
  display: flex;
  height: 3rem;
  align-items: center;
}	
.thHead{
	width: 300rpx;
	position: fixed;
	left: 0;
	z-index: 10000;
	background: #fff;
}
.thHead+.overauto{
	margin-left: 300rpx;
}
.select_box {
    background-color: #eee;
    padding: 0 10rpx;
    width: 93%;
    position: absolute;
    top: 10rpx;
    z-index: 1;
    overflow: hidden;
    animation: myfirst 0.5s;
}
@keyframes myfirst {
    from {
        height: 0rpx;
    }
 
    to {
        height: 210rpx;
    }
}
.select_one {
    height: 60rpx;
    line-height: 60rpx;
    border-bottom: 1px solid #ccc;
}
</style>
