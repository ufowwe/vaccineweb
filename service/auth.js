import global from '../utils/global.js';
import Base from './base';
import config from "./config";
export default class Auth extends Base {
	//判断用户是否登录
	static async login() {
		const token = await global.getToken();
		if (token) {
		    try {
		        const result = await this.checkToken(token);
		        console.log('验证token');
		        if (result) {
		            return true;
		        }
		        return false;
		     } catch (e) {
		        // /return false;
		        return false;
		     }
		} else {
			console.warn('token失效', token);
			return false;
		}
	}
	/*
	*预留接口  判断token是否失效
	*/ 
	static async checkToken(jsCode) {
	    return true;
	}
	
	/**
	 * 执行登录方法
	 * **/
	static async doLogin() {
		try{
			const { code } = await this.wxlogin();
			const res = await this.getToken(code);
			if(res.code == "0000"){
				await global.setToken(res.data.token);
				return true;
			}else{
				return false;
			}
		}catch(e){
			return false;
		}
	}
	/**
	 * 调用微信登录
	 * */
	 static wxlogin() {
	     return new Promise((resolve, reject) => {
	         uni.login({
	             provider: 'weixin',
	             success(res) {
	                 resolve(res);
	             },
	             fail: reject
	         });
	     });
	 }
	 /**
	  * 获取token
	  */
	 static async getToken(jsCode) {
	     return await this.post(config.auth.login,{code:jsCode});
	 }
	 /**
	  * 设置用户
	  * **/
	static async setUser(data){			
		return await this.post(config.auth.updateUserByWx,data);
	}
	/***
	**获取地理位置
	* **/
	static getLocation(cb){
		 wx.chooseLocation({
			success: function (res) {  
				if(cb && typeof(cb) == "function"){
					cb(res);
				}           
			},
			fail:function(){
				wx.getSetting({
					success: function (res) {
						var statu = res.authSetting;
						if (!statu['scope.userLocation']) {
							wx.showModal({
								title: '是否授权当前位置',
								content: '需要获取您的地理位置，请确认授权，否则地图功能将无法使用',
								success: function (tip) {
									if (tip.confirm) {
										wx.openSetting({
											success: function (data) {
												if (data.authSetting["scope.userLocation"] === true) {
													wx.showToast({
														title: '授权成功',
														icon: 'success',
														duration: 1000
													})
													//授权成功之后，再调用chooseLocation选择地方
													wx.chooseLocation({
														success: function(res) {
															obj.setData({
																addr: res.address
															})
														},
													})
												} else {
													wx.showToast({
														title: '授权失败',
														icon: 'success',
														duration: 1000
													})
												}
											},
										})
									}
								}
							})
						}
					},
					fail:function(){
						wx.showToast({
							title: '调用授权窗口失败',
							icon: 'success',
							duration: 1000
						})
					},
				})
			}
		})
	}
	
}