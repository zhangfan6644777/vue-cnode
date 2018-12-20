<template>
  <div class="centerContainer">
    <div v-if="loginInfo && userInfo" class="userInfoContainer">
      <div class="mineUserInfo">
        <img class="avatar" :src="userInfo.avatar_url"/>
        <p>
          <span>Sign In: {{moment(userInfo.create_at).format('YYYY-MM-DD')}}</span>
          <span>Score: {{userInfo.score}}</span>
        </p>
      </div>
      <div style="height:44px;">
        <sticky
          scroll-box="vux_view_box_body"
          ref="sticky"
          :offset="0"
          :check-sticky-support="false"
          >
          <tab :line-width=2 active-color='#fc378c' v-model="tabIndex">
            <tab-item class="vux-center" :selected="listTitle === item.title" v-for="(item, index) in tabList" @click="listTitle = item.title" :key="index">{{item.title}}</tab-item>
          </tab>
        </sticky>
      </div>
      <div class="myTopicContainer">
        <swiper v-model="tabIndex" :show-dots="false">
          <swiper-item v-for="(item, index) in tabList" :key="index">
            <div v-for="(items, indexs) in item.content" class="tab-swiper topicItems vux-center">
              <div>
                <p>
                  <img class="avatar" :src="items.author.avatar_url"/>
                  <span>{{items.author.loginname}}</span>
                </p>
                <span>{{moment(items.last_reply_at).format('YYYY-MM-DD')}}</span>
              </div>
              <div>{{items.title}}</div>
            </div>
          </swiper-item>
        </swiper>
      </div>
    </div>
    <div v-else class="noLoginContainer">
      <div class="noLoginContent">
        <group title="Access Token">
          <x-input :value="inputValue" ref="accesstoken" type="tel" @on-change="accessTokenChange"></x-input>
        </group>
        <div class="loginButton" @click="login($refs.accesstoken.value)">
          登录
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem, XInput, Group, Swiper, SwiperItem, Sticky } from 'vux';
import { mapState, mapActions, mapGetters } from 'vuex';
import moment from 'moment';
export default {
  data() {
    return {
      inputValue: '',
      tabIndex: 0,
      list: ['Topic', 'Reply'],
      listTitle: 'Topic',
      moment: moment,
    }
  },
  created() {
    console.log(this.loginInfo);
    if (this.loginInfo) {//已经登录
      this.getUserInfo(this.loginInfo.loginname);
    }
  },
  computed: {
    ...mapState({
      loginInfo: state => state.personalCenter.loginInfo,
      userInfo: state => state.personalCenter.userInfo
    }),
    ...mapGetters('personalCenter', [
      'tabList'
    ])
  },
  mounted() {

  },
  methods: {
    ...mapActions('personalCenter', [
      'login',
      'getUserInfo'
    ]),
    accessTokenChange(value) {
      this.inputValue = value;
    },
    switchTabItem(index) {
      this.$vux.loading.show({
        text: 'loading'
      });
      this.$vux.loading.hide()
      this.tabIndex = index;
    }
  },
  components: {
    Tab,
    TabItem,
    XInput,
    Group,
    Swiper,
    SwiperItem,
    Sticky
  },
}
</script>
<style lang='less'>
@import './personalcenter.less';
</style>
