import http from '../utils/http'
const PRO = '';//正式地址
const DEVe = 'http://47.92.33.214:12800';//测试地址
let IP = `${DEVe}`; // 	
export default class Base {
  static baseUrl = IP;
  
  static appService = IP + '/api';

  static get = http.get.bind(http);
  static put = http.put.bind(http);
  static post = http.post.bind(http);
  static delete = http.delete.bind(http);
}
