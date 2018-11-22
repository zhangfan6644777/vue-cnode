<template>
  <div class="homeContainer"   v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
    <div class="homeContent">
      <div style="height:44px;">
        <sticky
          scroll-box="vux_view_box_body"
          ref="sticky"
          :offset="0"
          :check-sticky-support="false"
          >
          <tab v-model="tabIndex" :line-width="1" prevent-default @on-before-index-change="switchTabItem">
            <tab-item selected>全部</tab-item>
            <tab-item>精华</tab-item>
            <tab-item>分享</tab-item>
            <tab-item>问答</tab-item>
            <tab-item>招聘</tab-item>
          </tab>
        </sticky>
      </div>
      <div class="topList">
        <div class="topicItem" v-for="item in topicList">
          <div @click="enterTopicDetails">{{item.title}}</div>
          <div><img @click="enterUserInfo" :src="item.author.avatar_url"/><span>{{item.reply_count}}/{{item.visit_count}}</span><span>{{item.last_reply_at}}</span></div>
        </div>
        <load-more v-if="loadmoreShow" :tip="'正在加载'"></load-more>
      </div>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem, Sticky, LoadMore } from 'vux';
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      tabIndex: 0,
      loading: true,
      loadmoreShow: false,
      params: {
        limit: 10,
        page: 1
      }
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
