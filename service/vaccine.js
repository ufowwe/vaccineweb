import Base from './base';
import config from "./config";
export default class Vaccine extends Base {
	//获取接种证信息 未登录
	static getRecordNoLogin(data){
		return this.post(config.vaccine.getRecordNoLogin,data).then(function(res) {
			return Promise.resolve(res)
		})
	}
	//获取接种证信息 已登录
	static getRecordByLogin(data){
		return this.post(config.vaccine.getRecord,data).then(function(res) {
			return Promise.resolve(res)
		})
	}
	//更新接种证信息
	static updateRecord(data){
		return this.post(config.vaccine.updateRecord,data).then(function(res) {
			return Promise.resolve(res)
		})
	}
	
	//获取基础方案 未登录
	static getSchemeNoLogin(data){
		return this.post(config.vaccine.getSchemeNoLogin,data).then(function(res) {
			return Promise.resolve(res)
		})
	}
	//获取方案 已登录
	static getScheme(data){
		return this.post(config.vaccine.getScheme,data).then(function(res) {
			return Promise.resolve(res)
		})
	}
	//保存方案
	static saveScheme(data){
		return this.post(config.vaccine.saveScheme,data).then(function(res) {
			return Promise.resolve(res)
		})
	}
}