const state = {
  topicList: []
};

const mutations = {
  GET_TOPIC(state, topicList) {
    state.topicList = topicList;
  }
};

const actions = {
  async getTopicList({commit}) {
    //handle api
    const topicList = [1,2];
    commit('GET_TOPIC', topicList);
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
