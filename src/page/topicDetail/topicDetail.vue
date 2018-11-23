<template>
  <div v-if="topicDetail" class="topicDetailContainer">
    <vue-markdown :source="topicDetail.content"></vue-markdown>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import VueMarkdown from 'vue-markdown';
import moment from 'moment';
export default {
  data() {
    return {
      tabIndex: 0,
      moment: moment
    }
  },
  computed: mapState({
    topicDetail: state => state.topicDetail.topicDetail
  }),
  created() {
    this.init();
  },
  mounted() {

  },
  methods: {
    ...mapActions('topicDetail',[
      'getTopicDetail'
    ]),
    async init() {
      const { id } = this.$route.params;
      this.$vux.loading.show({
        text: 'loading'
      });
      const res = await this.getTopicDetail(id);
      this.$vux.loading.hide()
    }
  },
  components: {
    VueMarkdown
  },
}
</script>
<style lang='less'>
@import './topicDetail.less';
</style>
