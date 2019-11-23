import Base from './base';
import config from "./config";
export default class Vaccine extends Base {
	static async getRecordNoLogin(data){
		return await this.post(config.vaccine.getRecordNoLogin,data);
	}
}