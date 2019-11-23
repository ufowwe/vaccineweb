import Base from './base';
const config = {
	phone:"",
	name:"疫苗",
	mapkey:{
		auth:{
			login: `${Base.baseUrl}/login`,//登录
			updateUserByWx:`${Base.appService}/user/updateUserByWx`,//微信用户信息更新到用户
			updateUser:`${Base.appService}/user/updateUser`//更新用户信息
		},
		baby:{
			getBabyList:`${Base.appService}/baby/selectList`,//宝宝集合
			babyDelete:`${Base.appService}/baby/delete`,//删除
			babySave:`${Base.appService}/baby/save`,//保存
			babyUpdate:`${Base.appService}/baby/update`,//更新
			babyUpdateTop:`${Base.appService}/baby/updateTop`,//更新置顶状态
		},
		vaccine:{
			getRecordNoLogin:`${Base.baseUrl}/beforeLogin/getRecordNoLogin`,//获取接种证集合，未登录
			getRecord:`${Base.baseUrl}/vaccineRecord/getRecord`,//获取接种证集合，已登录
			getScheme:`${Base.baseUrl}/vaccineScheme/getScheme`,//获取接种基础方案
			saveScheme:`${Base.baseUrl}/vaccineScheme/saveScheme`,//保存接种方案
		}
	}
}
export default config.mapkey;