import storage from "./storage";

const KEY_TOKEN = "_token";
const KEY_USER_INFO = "user";
const KEY_BABY_ID = "baby_Id";
const KEY_BABY_BIRTHDAY = "baby_birthday";

class global {

  // 获取当前小程序的token 没有返回 ''
  static getToken () {
    return storage.get(KEY_TOKEN) || "";
  }

  static setToken (token) {
    return storage.set(KEY_TOKEN, token);
  }

  static removeToken () {
    return storage.remove(KEY_TOKEN);
  }

  static setUser (user) {
    return storage.set(KEY_USER_INFO, user);
  }

  static getUser () {
    return storage.get(KEY_USER_INFO);
  }
  
  static setBabyId (id) {
    return storage.set(KEY_BABY_ID, id);
  }
  
  static getBabyId () {
    return storage.get(KEY_BABY_ID);
  }
  
  static removeBabyId () {
    return storage.remove(KEY_BABY_ID);
  }
  
  static setBabyBirthday (id) {
    return storage.set(KEY_BABY_BIRTHDAY, id);
  }
  
  static getBabyBirthday () {
    return storage.get(KEY_BABY_BIRTHDAY);
  }
  
  static removeBabyBirthday () {
    return storage.remove(KEY_BABY_BIRTHDAY);
  }
}

export default global;
