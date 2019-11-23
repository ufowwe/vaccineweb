<template>
	<view>
		<view class="vaccSelect">
			<!-- :initValue="" -->
			<view style="width: 60%;margin-bottom: 20rpx;padding-left:30rpx;">
				<xfl-select 
					:list="list"
					:clearable="false"
					:showItemNum="5"  
					:style_Container="'width: 90%;margin:auto;height: 80rpx; font-size: 32rpx;border-radius:40rpx;'"
					:placeholder = "'请选择'"
					:selectHideType="'hideAll'"
					@change="changeSec"
				>
				</xfl-select>
			</view>
			<text class="knowledge">方案说明</text>
			<text class="knowledge">| 疫苗知识</text>
		</view>
		<view class="vaccTotal">
		  <van-col span="12">去接种点次数:<text class="textcol"> {{hospitalTimes}}</text></van-col>
		  <van-col span="12">接种疫苗种数:<text class="textcol">{{totalDosageNum}}</text></van-col>
		  <van-col span="12">累计接种剂次:<text class="textcol">{{vaccineNum}}</text></van-col>
		  <van-col span="12">预防疾病种数:<text class="textcol">{{diseaseNum}}</text></van-col>
		</view>
		<view class="table">
		  <view class="tr bg-w">
			<view class="th thHead">儿童疫苗</view>
			<view class="th overauto" :key="index" v-for="(item,index) in data.data.columnList">{{item.vaccinationAge}}</view>
		  </view>
		  <block>
			<view class="tr bg-g" :key="index" v-for="(item,index) in data.data.schemeVaccineInfoList">
				<view class="td thHead " @click="toggle(item)">
				  <van-checkbox :value="item.status==1?true:false" @change="onChange(item)">
					<text>{{item.vaccineName}}</text>
				  </van-checkbox>
				</view>
				<view class="td overauto" :key="idx" v-for="(it,idx) in data.data.columnList">
				  <view class="" :key="index" v-if="it.monthNumS == item.cellMap[key].monthNumS" v-for="(value,key,index) in item.cellMap">
					<text :class="value.status?'sincere':'hollow'"></text>    {{value.status}}
				  </view>
				</view>
			</view>
		  </block>
		</view>
		<view class="cost">
			<text class="moneyNum">参考接种成本:{{num}}元</text>
			<van-button class="vaccBtn" style="width: 40%;" color="#8686F7">设置接种方案</van-button>
		</view>
	</view>
</template>

<script>
	import xflSelect from '../../../components/xfl-select.vue';	
		
	export default {
		components:{
			xflSelect
		},
		data() {
			return {
				list: [       //要展示的数据
					'国家免费方案',
					// {value: '香蕉', disabled: true},
					'常规推荐方案',
					'最优推荐方案',
				],
				num: 1000,
				hospitalTimes:'',
				totalDosageNum:'',
				vaccineNum:'',
				diseaseNum:'',
				data: {
				  "code": "0000",
				  "responseMsg": "查询成功",
				  "data": {
					"hospitalTimes": 12,
					"totalDosageNum": 24,
					"vaccineNum": 38,
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
						"diseaseNum": 1,
						"dosageTimes": 3,
						"status": 1,
						"vaccineNum": 3,
						"price": 0,
						"cellMap": {
						  "1_0": {
							"vaccineDetailId": 1,
							"vaccineSchemeId": 1,
							"times": 1,
							"monthNumS": 0,
							"monthNumE": 0,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "1_1": {
							"vaccineDetailId": 1,
							"vaccineSchemeId": 2,
							"times": 2,
							"monthNumS": 1,
							"monthNumE": 1,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "1_6": {
							"vaccineDetailId": 1,
							"vaccineSchemeId": 3,
							"times": 3,
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
						"diseaseNum": 1,
						"dosageTimes": 1,
						"status": 1,
						"vaccineNum": 1,
						"price": 0,
						"cellMap": {
						  "2_0": {
							"vaccineDetailId": 2,
							"vaccineSchemeId": 4,
							"times": 1,
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
						"diseaseNum": 1,
						"dosageTimes": 1,
						"status": 1,
						"vaccineNum": 1,
						"price": 0,
						"cellMap": {
						  "5_2": {
							"vaccineDetailId": 5,
							"vaccineSchemeId": 5,
							"times": 1,
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
						"diseaseNum": 1,
						"dosageTimes": 3,
						"status": 0,
						"vaccineNum": 0,
						"price": 198,
						"cellMap": {
						  "40_3": {
							"vaccineDetailId": 40,
							"vaccineSchemeId": 6,
							"times": 1,
							"monthNumS": 3,
							"monthNumE": 3,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "40_4": {
							"vaccineDetailId": 40,
							"vaccineSchemeId": 7,
							"times": 2,
							"monthNumS": 4,
							"monthNumE": 4,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "40_48": {
							"vaccineDetailId": 40,
							"vaccineSchemeId": 8,
							"times": 3,
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
						"diseaseNum": 1,
						"dosageTimes": 3,
						"status": 1,
						"vaccineNum": 3,
						"price": 0,
						"cellMap": {
						  "6_3": {
							"vaccineDetailId": 6,
							"vaccineSchemeId": 9,
							"times": 1,
							"monthNumS": 3,
							"monthNumE": 3,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "6_4": {
							"vaccineDetailId": 6,
							"vaccineSchemeId": 10,
							"times": 2,
							"monthNumS": 4,
							"monthNumE": 4,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "6_48": {
							"vaccineDetailId": 6,
							"vaccineSchemeId": 11,
							"times": 3,
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
						"diseaseNum": 1,
						"dosageTimes": 4,
						"status": 0,
						"vaccineNum": 0,
						"price": 106,
						"cellMap": {
						  "7_2": {
							"vaccineDetailId": 7,
							"vaccineSchemeId": 12,
							"times": 1,
							"monthNumS": 2,
							"monthNumE": 2,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "7_3": {
							"vaccineDetailId": 7,
							"vaccineSchemeId": 13,
							"times": 2,
							"monthNumS": 3,
							"monthNumE": 3,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "7_4": {
							"vaccineDetailId": 7,
							"vaccineSchemeId": 14,
							"times": 3,
							"monthNumS": 4,
							"monthNumE": 4,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "7_18": {
							"vaccineDetailId": 7,
							"vaccineSchemeId": 15,
							"times": 4,
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
						"diseaseNum": 3,
						"dosageTimes": 4,
						"status": 1,
						"vaccineNum": 12,
						"price": 0,
						"cellMap": {
						  "8_3": {
							"vaccineDetailId": 8,
							"vaccineSchemeId": 16,
							"times": 1,
							"monthNumS": 3,
							"monthNumE": 3,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "8_4": {
							"vaccineDetailId": 8,
							"vaccineSchemeId": 17,
							"times": 2,
							"monthNumS": 4,
							"monthNumE": 4,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "8_5": {
							"vaccineDetailId": 8,
							"vaccineSchemeId": 18,
							"times": 3,
							"monthNumS": 5,
							"monthNumE": 5,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "8_18": {
							"vaccineDetailId": 8,
							"vaccineSchemeId": 19,
							"times": 4,
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
						"diseaseNum": 2,
						"dosageTimes": 1,
						"status": 1,
						"vaccineNum": 2,
						"price": 0,
						"cellMap": {
						  "9_72": {
							"vaccineDetailId": 9,
							"vaccineSchemeId": 20,
							"times": 1,
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
						"diseaseNum": 1,
						"dosageTimes": 4,
						"status": 0,
						"vaccineNum": 0,
						"price": 698,
						"cellMap": {
						  "10_2": {
							"vaccineDetailId": 10,
							"vaccineSchemeId": 21,
							"times": 1,
							"monthNumS": 2,
							"monthNumE": 2,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "10_3": {
							"vaccineDetailId": 10,
							"vaccineSchemeId": 22,
							"times": 2,
							"monthNumS": 3,
							"monthNumE": 3,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "10_4": {
							"vaccineDetailId": 10,
							"vaccineSchemeId": 23,
							"times": 3,
							"monthNumS": 4,
							"monthNumE": 4,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "10_12": {
							"vaccineDetailId": 10,
							"vaccineSchemeId": 24,
							"times": 4,
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
						"diseaseNum": 2,
						"dosageTimes": 2,
						"status": 0,
						"vaccineNum": 0,
						"price": 182,
						"cellMap": {
						  "28_6": {
							"vaccineDetailId": 28,
							"vaccineSchemeId": 25,
							"times": 1,
							"monthNumS": 6,
							"monthNumE": 6,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "28_9": {
							"vaccineDetailId": 28,
							"vaccineSchemeId": 26,
							"times": 2,
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
						"diseaseNum": 4,
						"dosageTimes": 4,
						"status": 0,
						"vaccineNum": 0,
						"price": 285,
						"cellMap": {
						  "11_3": {
							"vaccineDetailId": 11,
							"vaccineSchemeId": 27,
							"times": 1,
							"monthNumS": 3,
							"monthNumE": 3,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "11_4": {
							"vaccineDetailId": 11,
							"vaccineSchemeId": 28,
							"times": 2,
							"monthNumS": 4,
							"monthNumE": 4,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "11_5": {
							"vaccineDetailId": 11,
							"vaccineSchemeId": 29,
							"times": 3,
							"monthNumS": 5,
							"monthNumE": 5,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "11_18": {
							"vaccineDetailId": 11,
							"vaccineSchemeId": 30,
							"times": 4,
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
						"diseaseNum": 5,
						"dosageTimes": 4,
						"status": 0,
						"vaccineNum": 0,
						"price": 599,
						"cellMap": {
						  "12_2": {
							"vaccineDetailId": 12,
							"vaccineSchemeId": 31,
							"times": 1,
							"monthNumS": 2,
							"monthNumE": 2,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "12_3": {
							"vaccineDetailId": 12,
							"vaccineSchemeId": 32,
							"times": 2,
							"monthNumS": 3,
							"monthNumE": 3,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "12_4": {
							"vaccineDetailId": 12,
							"vaccineSchemeId": 33,
							"times": 3,
							"monthNumS": 4,
							"monthNumE": 4,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "12_18": {
							"vaccineDetailId": 12,
							"vaccineSchemeId": 34,
							"times": 4,
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
						"diseaseNum": 1,
						"dosageTimes": 3,
						"status": 0,
						"vaccineNum": 0,
						"price": 168,
						"cellMap": {
						  "13_2": {
							"vaccineDetailId": 13,
							"vaccineSchemeId": 35,
							"times": 1,
							"monthNumS": 2,
							"monthNumE": 2,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "13_14": {
							"vaccineDetailId": 13,
							"vaccineSchemeId": 36,
							"times": 2,
							"monthNumS": 14,
							"monthNumE": 14,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "13_26": {
							"vaccineDetailId": 13,
							"vaccineSchemeId": 37,
							"times": 3,
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
						"diseaseNum": 1,
						"dosageTimes": 3,
						"status": 0,
						"vaccineNum": 0,
						"price": 280,
						"cellMap": {
						  "14_1": {
							"vaccineDetailId": 14,
							"vaccineSchemeId": 38,
							"times": 1,
							"monthNumS": 1,
							"monthNumE": 1,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "14_2": {
							"vaccineDetailId": 14,
							"vaccineSchemeId": 39,
							"times": 2,
							"monthNumS": 2,
							"monthNumE": 2,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "14_3": {
							"vaccineDetailId": 14,
							"vaccineSchemeId": 40,
							"times": 3,
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
						"diseaseNum": 2,
						"dosageTimes": 1,
						"status": 1,
						"vaccineNum": 2,
						"price": 0,
						"cellMap": {
						  "15_8": {
							"vaccineDetailId": 15,
							"vaccineSchemeId": 41,
							"times": 1,
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
						"diseaseNum": 3,
						"dosageTimes": 2,
						"status": 1,
						"vaccineNum": 6,
						"price": 72,
						"cellMap": {
						  "16_18": {
							"vaccineDetailId": 16,
							"vaccineSchemeId": 42,
							"times": 1,
							"monthNumS": 18,
							"monthNumE": 18,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "16_72": {
							"vaccineDetailId": 16,
							"vaccineSchemeId": 43,
							"times": 2,
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
						"diseaseNum": 1,
						"dosageTimes": 1,
						"status": 1,
						"vaccineNum": 1,
						"price": 0,
						"cellMap": {
						  "17_48": {
							"vaccineDetailId": 17,
							"vaccineSchemeId": 44,
							"times": 1,
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
						"diseaseNum": 1,
						"dosageTimes": 2,
						"status": 1,
						"vaccineNum": 2,
						"price": 0,
						"cellMap": {
						  "18_8": {
							"vaccineDetailId": 18,
							"vaccineSchemeId": 45,
							"times": 1,
							"monthNumS": 8,
							"monthNumE": 8,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "18_24": {
							"vaccineDetailId": 18,
							"vaccineSchemeId": 46,
							"times": 2,
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
						"diseaseNum": 1,
						"dosageTimes": 2,
						"status": 0,
						"vaccineNum": 0,
						"price": 45,
						"cellMap": {
						  "19_8": {
							"vaccineDetailId": 19,
							"vaccineSchemeId": 47,
							"times": 1,
							"monthNumS": 8,
							"monthNumE": 8,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "19_24": {
							"vaccineDetailId": 19,
							"vaccineSchemeId": 48,
							"times": 2,
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
						"diseaseNum": 1,
						"dosageTimes": 2,
						"status": 1,
						"vaccineNum": 2,
						"price": 0,
						"cellMap": {
						  "20_6": {
							"vaccineDetailId": 20,
							"vaccineSchemeId": 49,
							"times": 1,
							"monthNumS": 6,
							"monthNumE": 6,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "20_9": {
							"vaccineDetailId": 20,
							"vaccineSchemeId": 50,
							"times": 2,
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
						"diseaseNum": 1,
						"dosageTimes": 2,
						"status": 1,
						"vaccineNum": 2,
						"price": 140,
						"cellMap": {
						  "21_36": {
							"vaccineDetailId": 21,
							"vaccineSchemeId": 51,
							"times": 1,
							"monthNumS": 36,
							"monthNumE": 36,
							"status": 1,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "21_72": {
							"vaccineDetailId": 21,
							"vaccineSchemeId": 52,
							"times": 2,
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
						"diseaseNum": 1,
						"dosageTimes": 2,
						"status": 0,
						"vaccineNum": 0,
						"price": 0,
						"cellMap": {
						  "22_6": {
							"vaccineDetailId": 22,
							"vaccineSchemeId": 53,
							"times": 1,
							"monthNumS": 6,
							"monthNumE": 6,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "22_9": {
							"vaccineDetailId": 22,
							"vaccineSchemeId": 54,
							"times": 2,
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
						"diseaseNum": 1,
						"dosageTimes": 2,
						"status": 0,
						"vaccineNum": 0,
						"price": 0,
						"cellMap": {
						  "23_36": {
							"vaccineDetailId": 23,
							"vaccineSchemeId": 55,
							"times": 1,
							"monthNumS": 36,
							"monthNumE": 36,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "23_72": {
							"vaccineDetailId": 23,
							"vaccineSchemeId": 56,
							"times": 2,
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
						"diseaseNum": 1,
						"dosageTimes": 1,
						"status": 1,
						"vaccineNum": 1,
						"price": 115,
						"cellMap": {
						  "24_18": {
							"vaccineDetailId": 24,
							"vaccineSchemeId": 57,
							"times": 1,
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
						"diseaseNum": 1,
						"dosageTimes": 2,
						"status": 0,
						"vaccineNum": 0,
						"price": 61,
						"cellMap": {
						  "25_18": {
							"vaccineDetailId": 25,
							"vaccineSchemeId": 58,
							"times": 1,
							"monthNumS": 18,
							"monthNumE": 18,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "25_24": {
							"vaccineDetailId": 25,
							"vaccineSchemeId": 59,
							"times": 2,
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
						"diseaseNum": 1,
						"dosageTimes": 2,
						"status": 0,
						"vaccineNum": 0,
						"price": 168,
						"cellMap": {
						  "26_6": {
							"vaccineDetailId": 26,
							"vaccineSchemeId": 60,
							"times": 1,
							"monthNumS": 6,
							"monthNumE": 6,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "26_7": {
							"vaccineDetailId": 26,
							"vaccineSchemeId": 61,
							"times": 2,
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
						"diseaseNum": 1,
						"dosageTimes": 1,
						"status": 0,
						"vaccineNum": 0,
						"price": 215,
						"cellMap": {
						  "27_24": {
							"vaccineDetailId": 27,
							"vaccineSchemeId": 62,
							"times": 1,
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
						"diseaseNum": 1,
						"dosageTimes": 2,
						"status": 0,
						"vaccineNum": 0,
						"price": 136,
						"cellMap": {
						  "29_12": {
							"vaccineDetailId": 29,
							"vaccineSchemeId": 63,
							"times": 1,
							"monthNumS": 12,
							"monthNumE": 12,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "29_48": {
							"vaccineDetailId": 29,
							"vaccineSchemeId": 64,
							"times": 2,
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
						"diseaseNum": 1,
						"dosageTimes": 2,
						"status": 0,
						"vaccineNum": 0,
						"price": 580,
						"cellMap": {
						  "30_108": {
							"vaccineDetailId": 30,
							"vaccineSchemeId": 65,
							"times": 1,
							"monthNumS": 108,
							"monthNumE": 108,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "30_114": {
							"vaccineDetailId": 30,
							"vaccineSchemeId": 66,
							"times": 2,
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
						"diseaseNum": 1,
						"dosageTimes": 7,
						"status": 0,
						"vaccineNum": 0,
						"price": 156,
						"cellMap": {
						  "31_36": {
							"vaccineDetailId": 31,
							"vaccineSchemeId": 67,
							"times": 1,
							"monthNumS": 36,
							"monthNumE": 36,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "31_48": {
							"vaccineDetailId": 31,
							"vaccineSchemeId": 68,
							"times": 2,
							"monthNumS": 48,
							"monthNumE": 48,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "31_60": {
							"vaccineDetailId": 31,
							"vaccineSchemeId": 69,
							"times": 3,
							"monthNumS": 60,
							"monthNumE": 60,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "31_72": {
							"vaccineDetailId": 31,
							"vaccineSchemeId": 70,
							"times": 4,
							"monthNumS": 72,
							"monthNumE": 72,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "31_84": {
							"vaccineDetailId": 31,
							"vaccineSchemeId": 71,
							"times": 5,
							"monthNumS": 84,
							"monthNumE": 84,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "31_96": {
							"vaccineDetailId": 31,
							"vaccineSchemeId": 72,
							"times": 6,
							"monthNumS": 96,
							"monthNumE": 96,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "31_108": {
							"vaccineDetailId": 31,
							"vaccineSchemeId": 73,
							"times": 7,
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
						"diseaseNum": 1,
						"dosageTimes": 4,
						"status": 0,
						"vaccineNum": 0,
						"price": 40,
						"cellMap": {
						  "32_6": {
							"vaccineDetailId": 32,
							"vaccineSchemeId": 74,
							"times": 1,
							"monthNumS": 6,
							"monthNumE": 6,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "32_7": {
							"vaccineDetailId": 32,
							"vaccineSchemeId": 75,
							"times": 1,
							"monthNumS": 7,
							"monthNumE": 7,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "32_18": {
							"vaccineDetailId": 32,
							"vaccineSchemeId": 76,
							"times": 1,
							"monthNumS": 18,
							"monthNumE": 18,
							"status": 0,
							"schemeType": 1,
							"provinceId": 1
						  },
						  "32_30": {
							"vaccineDetailId": 32,
							"vaccineSchemeId": 77,
							"times": 1,
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
				}
			};
		},
		mounted() {
			this.hospitalTimes = this.data.data.hospitalTimes;
			this.totalDosageNum = this.data.data.totalDosageNum;
			this.vaccineNum = this.data.data.vaccineNum;
			this.diseaseNum = this.data.data.diseaseNum;
		},
		methods: {
			changePage(val) {
				this.isShow = val;
			},
			onChange(event) {
				// debugger
				console.log(event)
			},
			toggle(event) {
				// if(){
					
				// }
				event.status = !event.status;
				// debugger
				console.log(event);
			},
			changeSec(e) {
				// debugger
				console.log(e.newVal)
			},
		}
	}
</script>

<style lang="less">
.vaccSelect{
	display: flex;
	min-height: 50rpx;
	padding-top: 40rpx;
	.knowledge{
		padding-top: 20rpx;
		color: #8686F7;
		font-size: 26rpx;
	}
}
.vaccTotal{
	padding: 0 30rpx;
	line-height: 28px;
	height: 130rpx;
	text-align: center;
	font-size: 30rpx;
	color: #666666;
	.textcol{
		color: #000000;
	}
}
.table {
  border: 0px solid darkgray;
  overflow-y: auto;
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
	width: 100%;
	/* position: fixed;
	left: 0;
	z-index: 10000; */
	background: #fff;
}
/* .thHead+.overauto{
	margin-left: 300rpx;
} */
.cost{
	background: #F2F2F2;
	position: fixed;
	text-align: center;
	bottom: 0;
	width: 100%;
	.moneyNum{
		display: inline-block;
		width: 60%;
		
	}
	.vaccBtn{
		color: #fff;
	}
}
</style>
