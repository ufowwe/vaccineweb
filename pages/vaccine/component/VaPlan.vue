<template>
	<view>
		<view class="vaccSelect">
			<!-- :initValue="" -->
			<view style="width: 60%;margin-bottom: 20rpx;padding-left:30rpx;">
				<xfl-select 
					v-if="showSelect"
					:list="list"
					:clearable="false"
					:showItemNum="5"  
					:initValue="initValue"
					:style_Container="'width: 90%;margin:auto;height: 80rpx; font-size: 32rpx;border-radius:40rpx;'"
					:placeholder = "'请选择方案'"
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
		  <van-col span="12">累计接种疫苗:<text class="textcol">{{vaccineNum}}</text></van-col>
		  <van-col span="12">预防疾病种数:<text class="textcol">{{diseaseNum}}</text></van-col>
		</view>
		<!--无登录 或者 无宝宝时-->
		<view class="table" v-if="!isLogin || !isHaveBaby" @click="doAddBabyOrLogin">
			<view class="tr bg-w">
				<view class="th thHead">儿童疫苗</view>
				<view class="th overauto" :key="index" v-for="(item,index) in noLoginData.columnList">{{item.vaccinationAge}}</view>
			</view>
			<block>
				<view class="tr bg-g" :key="index" v-for="(item,index) in noLoginData.schemeVaccineInfoList">
					<view class="td thHead">
						<view class="table-dl">
							<view class="table-dt">
								<van-image v-if="item.status == 0"  width="40rpx" height="40rpx" src="/static/img/unselected.png" />
								<van-image v-if="item.status == 1"  width="40rpx" height="40rpx" src="/static/img/selected.png" />
								<van-image v-if="item.status == 2"  width="40rpx" height="40rpx" src="/static/img/same_effect_selected.png" />
								<van-image v-if="item.status == 3"  width="40rpx" height="40rpx" src="/static/img/same_effect_vaccinated.png" />
								<van-image v-if="item.status == 4"  width="40rpx" height="40rpx" src="/static/img/part_vaccinated.png" />
								<van-image v-if="item.status == 5"  width="40rpx" height="40rpx" src="/static/img/vaccinated.png" />
								<van-image v-if="item.status == 6"  width="40rpx" height="40rpx" src="/static/img/missed.png" />
							</view>
							<view class="table-dd">
								<text class="table-title">{{item.vaccineName}}</text>
								<view>
									<text class="table-free table-price" v-if="item.price==0">免费</text>
									<text class="table-self table-price" v-else>自费</text>
									<text class="table-total">共{{item.dosageTimes}}剂</text>
								</view>
							</view>
						</view>
					</view>
					<view class="td overauto" :key="idx" v-for="(it,idx) in noLoginData.columnList">
					  <view class="" :key="value.vaccineSchemeId" v-if="it.monthNumS == item.cellMap[key].monthNumS" v-for="(value,key) in item.cellMap">
						<van-image v-if="value.status == 0"  width="40rpx" height="40rpx" src="/static/img/unselected.png" />
						<view v-if="value.status == 1" class="td-item td-selected"><text v-if="value.vaccinationDate">{{value.vaccinationDate}}</text></view>
						<van-image v-if="value.status == 2"  width="40rpx" height="40rpx" src="/static/img/same_effect_selected.png" />
						<van-image v-if="value.status == 3"  width="40rpx" height="40rpx" src="/static/img/same_effect_vaccinated.png" />
						<view v-if="value.status == 4" class="td-item td-vaccinated"><text v-if="value.vaccinationDate">{{value.vaccinationDate}}</text></view>
						<view v-if="value.status == 5" class="td-item td-vaccinated"><text v-if="value.vaccinationDate">{{value.vaccinationDate}}</text></view>
						<view v-if="value.status == 6" class="td-item td-missed"><text v-if="value.vaccinationDate">{{value.vaccinationDate}}</text></view>
					  </view>
					</view>
				</view>
			</block>
		</view>
		<!--有宝宝时-->
		<view class="table" v-else>
			<view class="tr bg-w">
				<view class="th thHead">儿童疫苗</view>
				<view class="th overauto" :key="index" v-for="(item,index) in loginData.columnList">{{item.vaccinationAge}}</view>
			</view>
			<block>
				<view class="tr bg-g" :key="index" v-for="(item,index) in loginData.schemeVaccineInfoList">
					<view class="td thHead">
						<view class="table-dl">
							<view class="table-dt">
								<van-image @click="changeStatus(0,item)" v-if="item.status == 0"  width="40rpx" height="40rpx" src="/static/img/unselected.png" />
								<van-image @click="changeStatus(1,item)" v-if="item.status == 1"  width="40rpx" height="40rpx" src="/static/img/selected.png" />
								<van-image v-if="item.status == 2"  width="40rpx" height="40rpx" src="/static/img/same_effect_selected.png" />
								<van-image v-if="item.status == 3"  width="40rpx" height="40rpx" src="/static/img/same_effect_vaccinated.png" />
								<van-image @click="changeStatus(4)" v-if="item.status == 4"  width="40rpx" height="40rpx" src="/static/img/part_vaccinated.png" />
								<van-image @click="changeStatus(5)" v-if="item.status == 5"  width="40rpx" height="40rpx" src="/static/img/vaccinated.png" />
								<van-image @click="changeStatus(6)" v-if="item.status == 6"  width="40rpx" height="40rpx" src="/static/img/missed.png" />
							</view>
							<view class="table-dd">
								<text class="table-title">{{item.vaccineName}}</text>
								<view>
									<text class="table-free table-price" v-if="item.freeStatus==1">免费</text>
									<text class="table-self table-price" v-if="item.freeStatus == 2">自费</text>
									<text class="table-total">共{{item.dosageTimes}}剂</text>
								</view>
							</view>
						</view>
					</view>
					<view class="td overauto" :key="idx" v-for="(it,idx) in loginData.columnList">
					  <view class="" :key="value.vaccineSchemeId" v-if="it.monthNumS == item.cellMap[key].monthNumS" v-for="(value,key) in item.cellMap">
						<van-image v-if="value.status == 0"  width="40rpx" height="40rpx" src="/static/img/unselected.png" />
						<view v-if="value.status == 1" class="td-item td-selected"><text v-if="value.vaccinationDate">{{value.vaccinationDate}}</text></view>
						<van-image v-if="value.status == 2"  width="40rpx" height="40rpx" src="/static/img/same_effect_selected.png" />
						<van-image v-if="value.status == 3"  width="40rpx" height="40rpx" src="/static/img/same_effect_vaccinated.png" />
						<view v-if="value.status == 4" class="td-item td-vaccinated"><text v-if="value.vaccinationDate">{{value.vaccinationDate}}</text></view>
						<view v-if="value.status == 5" class="td-item td-vaccinated"><text v-if="value.vaccinationDate">{{value.vaccinationDate}}</text></view>
						<view v-if="value.status == 6" class="td-item td-missed"><text v-if="value.vaccinationDate">{{value.vaccinationDate}}</text></view>
					  </view>
					</view>
				</view>
			</block>
		</view>
		<view class="cost">
			<text class="moneyNum">参考接种成本:{{num}}元</text>
			<van-button @click="doAddBabyOrLogin" v-if="!isLogin || !isHaveBaby" class="vaccBtn" style="width: 40%;" color="#8686F7">设置接种方案</van-button>
			<van-button v-else class="vaccBtn" style="width: 40%;" color="#8686F7">保存接种方案</van-button>
		</view>
	</view>
</template>

<script>
	import xflSelect from '../../components/xfl-select.vue';	
	import babyApi from "../../../service/baby";
	import global from "../../../utils/global.js";
	import authApi from "../../../service/auth";
	import vaccineApi from "../../../service/vaccine";
	export default {
		components:{
			xflSelect
		},
		data() {
			return {
				baby:{},  //当前宝宝
				showSelect:false,
				list:[
					{value: '国家免费方案', type: 1},
					{value: '常规推荐方案', type: 2},
					{value: '最优推荐方案', type: 3},
				],
				initValue:"",      //下拉菜单默认显示的数据
				isLogin:false,     //是否已登陆
				isHaveBaby:false,  //是否有宝宝
				isHavePlan:false,  //是否有接种方案
				noLoginData:{},    //没有登录 或者 没有宝宝的时候 页面显示的数据
				loginData:{},      //有宝宝的时候 页面显示的数据
				schemeListMap:{},  //疫苗map
				
				num: 0,
				hospitalTimes:0,
				totalDosageNum:0,
				vaccineNum:0,
				diseaseNum:0,
			};
		},
		async mounted() {
			this.isLogin = await authApi.login();
			if(this.isLogin){
				this.isHaveBaby = await babyApi.isHaveBaby();
				if(!this.isHaveBaby){
					this.getNoLoginData();
				}else{
					const obj={
						id:global.getBabyId() || 14
					};
					this.baby = await babyApi.getBabyDetail(obj);
					this.getLoginData(this.baby.schemeType);
				}
			}else{
				this.getNoLoginData();
			}
		},
		methods: {
			//获取未登录是页面列表数据
			getNoLoginData(){
				const obj={
					provinceId:0,
					schemeType:0
				};
				vaccineApi.getSchemeNoLogin(obj).then(res=>{
					if(res.code == "0000"){
						if(res.data){
							this.noLoginData = res.data;
							this.setOrginNum(res.data);
							this.showSelect = true;
						}else{
							this.noLoginData = {};
						}
					}else{
						uni.showToast({
							icon:"none",
						    title: res.responseMsg
						});
					}
				});
			},
			//登陆时 获取页面列表数据
			getLoginData(type){
				const obj={
					babyId:global.getBabyId() || 14,
					schemeType:type || 1
				};
				vaccineApi.getScheme(obj).then(res=>{
					if(res.code == "0000"){
						if(res.data){
							this.loginData = res.data;
							this.setOrginNum(res.data);
							this.setSelectValue(this.baby.schemeType || 1);
							//创建疫苗map
							if(res.data.schemeVaccineInfoList && res.data.schemeVaccineInfoList.length>0){
								this.creatSchemeListMap(res.data.schemeVaccineInfoList);
								this.setPrice();
							}
							this.showSelect = true;
						}else{
							this.loginData  = {};
						}
					}else{
						uni.showToast({
							icon:"none",
						    title: res.responseMsg
						});
					}
				});
			},
			//创建疫苗map
			creatSchemeListMap(list){
				this.schemeListMap = {};
				for(var i=0;i<list.length;i++){
					this.schemeListMap[list[i].vaccineDetailId] = list[i];
				}
			},
			//点击表格左侧设置状态
			changeStatus(status,item){
				switch (status){
					case 0:
						this.setUnSelectStatus(item);
						break;
					case 1:
						this.setSelectStatus(item);
						break;
					case 4:
						this.showUnCancelMsg(item);
						break;
					case 5:
						this.showUnCancelMsg(item);
						break;
					case 6:
						this.showUnCancelMsg(item);
						break;
					default:
						break;
				}
				this.setPrice();
			},
			//计算总钱数
			setPrice(){
				let count = 0;
				for(var key in this.schemeListMap){
					if(this.schemeListMap[key].status == 1 || this.schemeListMap[key].status == 4 || this.schemeListMap[key].status == 5 ||this.schemeListMap[key].status == 6){
						count+=Number(this.schemeListMap[key].price);
					}
				}
				this.num = count;
			},
			//点击 已接种 已部分接种 或者遗漏接种的疫苗
			showUnCancelMsg(){
				uni.showToast({
					icon:"none",
				    title: "该疫苗已开始接种，无法取消"
				});
			},
			//点击已选择的疫苗
			setSelectStatus(obj){
				obj.status = 0;  //取消当前疫苗选中状态
				if(obj.cellMap){
					for(var key in obj.cellMap){
						obj.cellMap[key].status = 0;
					}
				}
				if(obj.sameEffect){
					let arr = obj.sameEffect.split(",");
					for(var i=0;i<arr.length;i++){
						if(this.schemeListMap[arr[i]].status == 2){
							this.schemeListMap[arr[i]].status = 0;  //取消其同效药标识
							if(this.schemeListMap[arr[i]].cellMap){
								for(var key in this.schemeListMap[arr[i]].cellMap){
									this.schemeListMap[arr[i]].cellMap[key].status = 0;
								}
							}
						}
					}
				}
			},
			//点击未选择的疫苗
			setUnSelectStatus(obj){
				//先判断有没有相关疫苗
				var text = "";
				var flag = true;  //该疫苗是否可以被选择
				if(obj.relevant){
					let arr = obj.relevant.split(",");
					for(var i=0;i<arr.length;i++){
						//如果相关疫苗 已经接种 或者部分接种 或者遗漏接种 改疫苗都不可选择
						if(this.schemeListMap[arr[i]].status == 4 || this.schemeListMap[arr[i]].status == 5 || this.schemeListMap[arr[i]].status == 6){ //如果相关疫苗处于未选择状态
							flag = false;
							text = "该疫苗已选择相关疫苗，并且同效疫苗已接种无法取消"
							break;
						}
						//如果相关疫苗 处于已选相关疫苗、 已种相关疫苗、已选择状态时  再去判断该疫苗的同效疫苗状态
						if(this.schemeListMap[arr[i]].status == 2 || this.schemeListMap[arr[i]].status == 3 || this.schemeListMap[arr[i]].status == 1){ 
							let ret = this.judgeSameInfo(obj); //判断该疫苗的同效疫苗状态
							if(!ret.flag){
								flag = false;
								text = ret.msg;
								break;
							}
						}
					}
					if(flag){
						obj.status = 1;
						if(obj.cellMap){
							for(var key in obj.cellMap){
								obj.cellMap[key].status = 1;
							}
						}
						for(var i=0;i<arr.length;i++){
							if(this.schemeListMap[arr[i]].status == 1){  //自动取消相关疫苗
								this.schemeListMap[arr[i]].status = 0;
								if(this.schemeListMap[arr[i]].cellMap){
									for(var key in this.schemeListMap[arr[i]].cellMap){
										this.schemeListMap[arr[i]].cellMap[key].status = 0;
									}
								}
							}
						}
						this.setSameInfoStatus(obj); 
					}else{
						uni.showToast({
							icon:"none",
						    title: text
						});
					}
				}else{
					let ret = this.judgeSameInfo(obj);
					if(!ret.flag){
						uni.showToast({
							icon:"none",
						    title: ret.msg
						});
					}else{
						obj.status = 1;
						this.setSameInfoStatus(obj); 
						if(obj.cellMap){
							for(var key in obj.cellMap){
								obj.cellMap[key].status = 1;
							}
						}
					}
				}
			},
			//选择该疫苗 设置同效疫苗状态
			setSameInfoStatus(obj){
				if(obj.sameEffect){
					let arr = obj.sameEffect.split(",");
					for(var i=0;i<arr.length;i++){
						if(this.schemeListMap[arr[i]].status == 0){
							this.schemeListMap[arr[i]].status = 2;
							if(this.schemeListMap[arr[i]].cellMap){
								for(var key in this.schemeListMap[arr[i]].cellMap){
									this.schemeListMap[arr[i]].cellMap[key].status = 2;
								}
							}
						}
					}
				}
			},
			//判断同效 有没有被选择
			judgeSameInfo(obj){
				let flag = true;
				let text = "";
				if(obj.sameEffect){
					let arr = obj.sameEffect.split(",");
					for(var i=0;i<arr.length;i++){
						//如果同效疫苗 已经接种 或者部分接种 或者遗漏接种 该疫苗都不可选择
						if(this.schemeListMap[arr[i]].status == 4 || this.schemeListMap[arr[i]].status == 5 || this.schemeListMap[arr[i]].status == 6){
							flag = false;
							text = "该疫苗已选择同效疫苗，并且同效疫苗已接种";
							break;
						}
						//如果同效疫苗
						if(this.schemeListMap[arr[i]].status == 2){
							flag = false;
							break;
							text = "该疫苗已选择同效疫苗，请取消同效疫苗后再进行选择";
						}
					}
				}else{
					flag = true;
				}
				return {
					flag : flag,
					msg  : text
				}
			},
			
			//设置头部初始数量
			setOrginNum(data){
				this.hospitalTimes = data.hospitalTimes;
				this.totalDosageNum = data.totalDosageNum;
				this.vaccineNum = data.vaccineNum;
				this.diseaseNum = data.diseaseNum;
			},
			//设置页面下拉菜单回显值
			setSelectValue(type){
				if(type == 0){
					this.initValue = "";
				}else if(type == 1){
					this.initValue = "国家免费方案";
				}else if(type == 2){
					this.initValue = "常规推荐方案";
				}else if(type == 3){
					this.initValue = "最优推荐方案";
				}else if(type == 4){
					this.initValue = "自定义方案";
					let flag = false;
					for(var i=0;i<this.list.length;i++){
						if(this.list[i].type == 4){
							flag = true;
							break;
						}
					}
					if(!flag){
						this.list.push({
							value:"自定义方案",
							type:4
						});
					}
					Array.from(new Set(this.list));
				}
			},
			//未登录或者无宝宝时
			doAddBabyOrLogin(){
				this.checkLogin("/pages/vaccine/index");
			},
			changePage(val) {
				this.isShow = val;
			},
			onChange(event) {
				console.log(event)
			},
			toggle(event) {
				event.status = !event.status;
				console.log(event);
			},
			changeSec(e) {
				this.getLoginData(e.orignItem.type);
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
  width:100%;
  padding-bottom:120rpx;
}
.tr {
  display: flex;
  width: fit-content;
}
.td {
    width:50%;
	border: 1rpx solid #F8F8F8;
    justify-content: center;
    text-align: center;
	flex:0 0 277rpx;
	background:#fff;
}
.table .td,.table .th{
	padding:20rpx;
	box-sizing: border-box;
	font-size:28rpx;
}
.table .bg-g:nth-child(odd) .overauto{
	background:rgba(216,216,216,0.1);
}
.overauto{
	display:flex;
	align-items:center;
}
.th {
  justify-content: center;
  background: #F2F3F5;
  color: #000;
  border: 1rpx solid #F8F8F8;
  display: flex;
  align-items: center;
  background:#efefff;
  flex:0 0 277rpx;
};
.thHead{
	width: 100%;
}
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
.table-dl{
	display:flex;
}
.table-dl .table-dt{
	flex:0 0 60rpx;
	display:flex;
	align-items:center;
}
.table-dl .table-dd{
	text-align:left;
	font-size:0;
	overflow:hidden;
}
.table-title{
	color:#666;
	font-size:28rpx;
}
.table-price{
	display:inline-block;
	font-size:20rpx;
	padding:5rpx 10rpx;
	vertical-align: top;
}
.table-self{
	color:#E088FF;
	border:2rpx solid #E088FF;
	border-radius:4rpx;
}
.table-free{
	color:#00D5B5;
	border:2rpx solid #00D5B5;
	border-radius:4rpx;
}
.table-total{
	font-size:22rpx;
	color:#999999;
	margin-left:10rpx;
}
.td-item{
	display:inline-block;
	width:174rpx;
	height:40rpx;
	text-align:left;
	line-height:40rpx;
	text-indent: 20rpx;
	font-size:20rpx;
}
.td-selected{
	background:url("../../../static/img/dosage_selected.png") no-repeat center;
	background-size:cover;
}
.td-vaccinated{
	background:url("../../../static/img/dosage_vaccinated.png") no-repeat center;
	background-size:cover;
}
.td-missed{
	background:url("../../../static/img/dosage_missed.png") no-repeat center;
	background-size:cover;
}
</style>
