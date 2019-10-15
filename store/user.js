import {
  async
} from "q";

// // 用户管理
// export const state = () => ({
//   // 采用接口返回的数据结构
//   userInfo: {
//     token: "",
//     user: {},
//   },
// })

// export const mutations = {
//   // 保存用户信息到state
//   setUserInfo(state, data) {
//     state.userInfo = data;
//   },
// };

// export const actions = {
//   // 登录
//   login({
//     commit
//   }, data) {
//     return this.$axios({
//       url: "/accounts/login",
//       method: "POST",
//       data: data
//     }).then(res => {
//       const data = res.data;
//       // 保存到state
//       commit("setUserInfo", data);
//       return data;
//     })
//   }
// };
// 固定写法
export const state = () => {
  return {
    userInfo: {}
  }
}
export const mutations = {
  setUserInfo(state, data) {
    state.userInfo = data;
  }
}
export const actions = {
  async login(store, data) {
    var res = await this.$axios({
      url: "/accounts/login",
      method: "POST",
      data
    })
    if (res.status === 200) {
      store.commit("setUserInfo", res.data);
    }
    return res;
  },
  async sendCaptcha(store, tel) {
    const res = await this.$axios({
      url: "/captchas",
      method: "POST",
      data: {
        tel
      }
    })
  }
}
