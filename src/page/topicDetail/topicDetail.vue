<template>
  <div v-if="topicDetail" class="topicDetailContainer">
    <section class="title">
      <h3>{{topicDetail.title}}</h3>
    </section>
    <div class="authorInfo">
      <img :src="topicDetail.author.avatar_url" alt="">
      <div>
        <p><span>{{topicDetail.author.loginname}}</span><span><span>{{getTab(topicDetail.top,topicDetail.good,topicDetail.tab)}}</span></span></p>
        <p><span>发布于{{moment(topicDetail.create_at).format('YYYY-MM-DD')}}</span><span>{{topicDetail.visit_count}}次浏览</span></p>
      </div>
    </div>
    <vue-markdown :source="topicDetail.content"></vue-markdown>
    <section class="commentTitle">
      <h3>{{topicDetail.reply_count}}回复</h3>
    </section>
    <div class="commentList">
      <div class="commentItem" v-for="(item, key) in topicDetail.replies">
        <div class="commentInfo">
          <img :src="item.author.avatar_url" alt="">
          <p><span>{{item.author.loginname}}</span><span>{{key+1}}楼</span></p>
        </div>
        <vue-markdown :source="item.content"></vue-markdown>
        <div class="commentBottom">
          <span>{{moment(item.create_at).format('YYYY-MM-DD')}}</span>
          <p><span><i></i>{{item.ups.length}}</span><span><i></i></span></p>
        </div>
      </div>
    </div>
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
    },
    getTab(top,good,tab) {
      if (top) {
        return '置顶';
      } else if (good) {
        return '精华';
      } else {
        const tabArray = {
          'ask': '问答',
          'share': '分享',
          'job': '招聘'
        };
        return tabArray[tab];
      }
    },
  },
  components: {
    VueMarkdown
  },
}
</script>
<style lang='less'>
@import './topicDetail.less';
</style>
