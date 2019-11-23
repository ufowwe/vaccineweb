import Base from './base';
const vac={
	getBabyList:`${Base.appService}/baby/selectList` //获取接种证集合，未登录
}

export default class Vaccine extends Base {
	static async getBabyList(data){
		return await this.post(vac.getBabyList,data);
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