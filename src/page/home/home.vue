<template>
  <div class="homeContainer" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
    <div class="homeContent">
      <div style="height:44px;">
        <sticky
          scroll-box="vux_view_box_body"
          ref="sticky"
          :offset="0"
          :check-sticky-support="false"
          >
          <tab v-model="tabIndex" :line-width="1" prevent-default @on-before-index-change="switchTabItem">
            <tab-item selected>All</tab-item>
            <tab-item>Good</tab-item>
            <tab-item>Share</tab-item>
            <tab-item>Ask</tab-item>
            <tab-item>Job</tab-item>
          </tab>
        </sticky>
      </div>
      <div class="topList">
        <div class="topicItem" v-for="item in topicList">
          <div class="topicTitle" @click="enterTopicDetails">
            <span>{{getTab(item.top,item.good,item.tab)}}</span>
            <span>{{item.title}}</span>
          </div>
          <div class="topicContent">
            <img class="avatar" @click="enterUserInfo" :src="item.author.avatar_url"/>
            <div class="topicInfo">
              <p><span>{{item.author.loginname}}</span><span>{{item.reply_count}}/{{item.visit_count}}</span></p>
              <p><span>replyAt {{moment(item.last_reply_at).format('YYYY-MM-DD')}}</span><span>creatAt {{moment(item.last_reply_at).format('YYYY-MM-DD')}}</span></p>
            </div>
          </div>
        </div>
        <load-more v-if="loadmoreShow" :tip="'正在加载'"></load-more>
      </div>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem, Sticky, LoadMore } from 'vux';
import { mapState, mapActions } from 'vuex';
import moment from 'moment';
export default {
  data() {
    return {
      tabIndex: 0,
      loading: true,
      loadmoreShow: false,
      params: {
        limit: 10,
        page: 1
      },
      moment: moment
    }
  },
  computed: mapState({
    topicList: state => state.home.topicList
  }),
  created() {
    this.initStatus();
    this.getList();
  },
  mounted() {
  },
  components: {
    Tab,
    TabItem,
    Sticky,
    LoadMore
  },
  methods: {
    ...mapActions('home', [
      'getTopicList',
      'loadMoreTopicList'
    ]),
    initStatus() {
      this.params = {
        limit: 10,
        page: 1
      };
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 500);
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
    async getList() {
      this.$vux.loading.show({
        text: 'loading'
      });
      await this.getTopicList(this.params);
      this.$vux.loading.hide();
    },
    async switchTabItem (index) {
      this.initStatus();
      const tab = ['all', 'good', 'share', 'ask', 'job' ];
      this.params.tab = tab[index];
      this.$vux.loading.show({
        text: 'loading'
      });
      const res = await this.getTopicList(this.params);
      this.$vux.loading.hide()
      this.tabIndex = index;
    },
    async loadMore() {
      this.loading = true;
      this.loadmoreShow = true;
      this.params.page++;
      setTimeout(async () => {
        const res = await this.loadMoreTopicList(this.params);
        if (res.length === 10) {
          this.loading = false;
        }
        this.loadmoreShow = false;
      }, 3000);

    },
    enterTopicDetails() {
      alert(1);
    },
    enterUserInfo() {
      alert(2);
    }
  }
}
</script>
<style lang='less' scoped>
@import './home.less';
</style>
