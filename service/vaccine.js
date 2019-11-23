import Base from './base';
const vac={
	getRecordNoLogin:`${Base.baseUrl}/beforeLogin/getRecordNoLogin` //获取接种证集合，未登录
}

export default class Vaccine extends Base {
	static async getRecordNoLogin(data){
		return await this.post(vac.getRecordNoLogin,data);
	}
}