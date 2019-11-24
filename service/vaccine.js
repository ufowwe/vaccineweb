import Base from './base';
import config from "./config";
export default class Vaccine extends Base {
	static getRecordNoLogin(data){
		return this.post(config.vaccine.getRecordNoLogin,data).then(function(res) {
			return Promise.resolve(res)
		})
	}
	static getRecordByLogin(data){
		return this.post(config.vaccine.getRecord,data).then(function(res) {
			return Promise.resolve(res)
		})
	}
	static updateRecord(data){
		return this.post(config.vaccine.updateRecord,data).then(function(res) {
			return Promise.resolve(res)
		})
	}
}