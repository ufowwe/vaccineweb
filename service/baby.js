import Base from './base';
import config from "./config";
export default class Vaccine extends Base {
	static getBabyList(data){
		return this.post(config.baby.getBabyList,data).then(function(res) {
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