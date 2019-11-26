import Base from './base';
import config from "./config";
export default class Vaccine extends Base {
	//获取宝宝列表
	static getBabyList(data){
		return this.post(config.baby.getBabyList,data).then(function(res) {
			return Promise.resolve(res)
		})	
	}
	//保存宝宝
	static babySave(data){
		return this.post(config.baby.babySave,data).then(function(res) {
			return Promise.resolve(res)
		})	
	}
	//更新宝宝
	static babyUpdate(data){
		return this.post(config.baby.babyUpdate,data).then(function(res) {
			return Promise.resolve(res)
		})	
	}
	//删除宝宝
	static babyDelete(data){
		return this.post(config.baby.babyDelete,data).then(function(res) {
			return Promise.resolve(res)
		})	
	}
	//宝宝置顶
	static babyUpdateTop(data){
		return this.post(config.baby.babyUpdateTop,data).then(function(res) {
			return Promise.resolve(res)
		})	
	}
	//获取宝宝详情
	static getBabyDetail(data){
		return this.post(config.baby.getBabyDetail,data).then(function(res) {
			return Promise.resolve(res)
		})	
	}
	static async isHaveBaby(){
		const list = await this.getBabyList();
		if(list.data && list.data.length>0){
			return  true
		}else{
			return false;
		}
	}
}