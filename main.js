import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
App.mpType = 'app'
import authApi from "service/auth";
import babyApi from "service/baby";
Vue.prototype.checkLogin = async function(path, type){
	const isLogin = await authApi.login();
	const isHaveBaby = await babyApi.isHaveBaby();
	if(!isLogin){
		uni.reLaunch({
			url:`/pages/login/login?backpath=${path}&type=${type}`
		});
		return false;
	}
	if(!isHaveBaby){
		uni.reLaunch({
			url:'/pages/baby/addBaby?${path}&type=${type}'
		});
		return false;
	}
	return true;
}

const app = new Vue({
    ...App
})
app.$mount()
