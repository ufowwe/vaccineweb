import global from '../utils/global.js';
import Base from './base';

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
		        return await this.doLogin();
		     }
		} else {
			return await this.doLogin();
		    console.warn('token失效', token);
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
	    const {code} = await this.wxlogin();
	    const res = await this.getToken(code);
		if(res.code == "0000"){
			await global.setToken(res.data.token);
			await this.login();
		}else{
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
	     const url = `${this.baseUrl}/login`
	     return await this.post(url,{code:jsCode});
	 }
}