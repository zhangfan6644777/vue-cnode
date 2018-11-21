import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/page/home/home';
import Publish from '@/page/publish/publish';
import Message from '@/page/message/message';
import Mine from '@/page/mine/mine';
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/publish',
      name: 'publish',
      component: Publish
    },
    {
      path: '/my_message',
      name: 'message',
      component: Message
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
  ]
})
