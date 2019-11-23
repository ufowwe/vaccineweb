import Base from './base';
import config from "./config";
export default class Vaccine extends Base {
	static async getBabyList(data){
		return await this.post(config.baby.getBabyList,data);
	}
	static async isHaveBaby(){
		const list = await this.getBabyList();
		if(list.length>0){
			return  true
		}else{
			return false;
		}
	}
}