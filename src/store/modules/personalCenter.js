import personalCenterSerrvice from '../../services/personalcenter';
const state = {
  loginInfo: localStorage.loginInfo ? JSON.parse(localStorage.loginInfo) : null,
  userInfo: null
};

const mutations = {
  SET_LOGIN_INFO(state, loginInfo) {
    state.loginInfo = loginInfo;
  },
  SET_USER_INFO(state, userInfo) {
    state.userInfo = userInfo;
  }
};

const actions = {
  async login({commit}, access_token) {
    const params = {
      accesstoken: access_token
    };
    const res = await personalCenterSerrvice.login(params);
    commit('SET_LOGIN_INFO', res);
    localStorage.accesstoken = access_token;
    localStorage.loginInfo = JSON.stringify(res);
  },
  async getUserInfo({commit}, loginname) {
    const res = await personalCenterSerrvice.getUserInfo(loginname);
    commit('SET_USER_INFO', res.data);
    return res.data;
  }
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
