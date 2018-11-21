<template>
  <div style="height:100%;" id="app">
    <view-box ref="viewBox">
      <router-view></router-view>
      <TabBar></TabBar>
    </view-box>
  </div>
</template>

<script>
//自己组建
import TabBar from './components/tabbar/tabbar';
//UI库组建
import { ViewBox } from 'vux';
export default {
  name: 'app',
  components: {
    ViewBox,
    TabBar
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
</style>
