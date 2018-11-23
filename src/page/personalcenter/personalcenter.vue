<template>
  <div class="centerContainer">
    <div v-if="userInfo" class="userInfoContainer">
      <div class="mineUserInfo">
        <img :src="userInfo.avatar_url"/>
        <p>
          <span></span>
          <span></span>
        </p>
      </div>
      <div class="myTopicContainer">
        <tab bar-active-color="#FF544F" :scroll-threshold="2" v-model="tabIndex" :line-width="1" prevent-default @on-before-index-change="switchTabItem">
          <tab-item selected>All</tab-item>
          <tab-item>Good</tab-item>
        </tab>
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
import { Tab, TabItem, XInput, Group } from 'vux';
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      tabIndex: 0,
      inputValue: ''
    }
  },
  created() {
    console.log(this.userInfo);
    if (this.userInfo) {//已经登录

    }
  },
  computed: mapState({
    userInfo: state => state.personalCenter.userInfo
  }),
  mounted() {

  },
  methods: {
    ...mapActions('personalCenter', [
      'login'
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
    Group
  },
}
</script>
<style lang='less'>
@import './personalcenter.less';
</style>
