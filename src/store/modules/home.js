import HomeSerrvice from '../../services/home';
const state = {
  topicList: []
};

const mutations = {
  INIT_TOPIC_LIST(state) {
    state.topicList = [];
  },
  GET_TOPIC_LIST(state, topicList) {
    state.topicList = topicList;
  },
  GET_MORE_TOPIC_LIST(state, topicList) {
    state.topicList = [...state.topicList,...topicList];
  }
};

const actions = {
  async getTopicList({commit}, params) {
    commit('INIT_TOPIC_LIST');
    const res = await HomeSerrvice.getTopicList(params);
    commit('GET_TOPIC_LIST', res.data);
    return res.data;
  },
  async loadMoreTopicList({commit}, params) {
    const res = await HomeSerrvice.getTopicList(params);
    commit('GET_MORE_TOPIC_LIST', res.data);
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
