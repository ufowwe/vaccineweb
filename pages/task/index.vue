<template>
	<view class="">
		<view v-if="!isLogin">
			<LoginIn @isLogin="getLogin"></LoginIn>
		</view>
		<view v-if="isLogin">
			用户已经登录
		</view>
	</view>
</template>

<script>
import LoginIn from './component/Login.vue';
import authApi from '../../service/auth';

export default {
	components:{
		LoginIn
	},
	data(){
		return{
			isLogin:false
		}
	},
	methods:{
		//用户登录成功后执行的操作
		getLogin(){
			this.isLogin = true;
		}
	},
	async onLoad(options){
	  const login = await authApi.login();
	  console.log(login);
	  if(login){
		this.isLogin = true;
	  }else{
		this.isLogin = false; 
	  }
	}
}
</script>

<style>
	
</style>
