import topicDetailService from '../../services/topicDetail';
const state = {
  topicDetail: null
};

const mutations = {
  SET_TOPIC_DETAIL(state, detail) {
    state.topicDetail = detail;
  }
};

const actions = {
  async getTopicDetail({commit}, params) {
    commit('SET_TOPIC_DETAIL', null);
    const res = await topicDetailService.getTopicDetail(params);
    commit('SET_TOPIC_DETAIL', res.data);
    return res.data;
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
