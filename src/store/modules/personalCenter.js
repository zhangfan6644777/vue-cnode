import personalCenterSerrvice from '../../services/personalcenter';
const state = {
  userInfo: localStorage.userInfo ? JSON.parse(localStorage.userInfo) : null
};

const mutations = {
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
    commit('SET_USER_INFO', res);
    localStorage.userInfo = JSON.stringify(res);
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
