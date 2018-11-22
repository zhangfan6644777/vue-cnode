import HomeSerrvice from '../../services/home';
const state = {
  topicList: []
};

const mutations = {
  GET_TOPIC(state, topicList) {
    state.topicList = [...state.topicList,...topicList];
  }
};

const actions = {
  async getTopicList({commit}, params) {
    //handle api
    console.log(params);
    const res = await HomeSerrvice.getTopicList(params);
    commit('GET_TOPIC', res.data);
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
