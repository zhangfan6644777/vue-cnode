<template>
  <tabbar>
    <tabbar-item selected link="/home">
      <!-- <img slot="icon" src="../assets/demo/icon_nav_button.png"> -->
      <span slot="label">home</span>
    </tabbar-item>
    <tabbar-item show-dot link="/publish">
      <!-- <img slot="icon" src="../assets/demo/icon_nav_msg.png"> -->
      <span slot="label">publish</span>
    </tabbar-item>
    <tabbar-item badge="2" link="/mine">
      <!-- <img slot="icon" src="../assets/demo/icon_nav_cell.png"> -->
      <span slot="label">mine</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>
