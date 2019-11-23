import authApi from "../service/auth";
import babyApi from "../service/baby";
async function checkLogin(){
	const isLogin = await authApi.login();
	const isHaveBaby = await babyApi.isHaveBaby();
	if(!isLogin){
		uni.reLaunch({
			url:"/pages/login/login"
		});
		return false;
	}else{
		if(!isHaveBaby){
			uni.reLaunch({
			    url:'/pages/baby/addBaby'
			});
			return false;
		}
	}
}