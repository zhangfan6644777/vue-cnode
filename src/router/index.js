import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/page/home/home';
import Publish from '@/page/publish/publish';
import Message from '@/page/message/message';
import PersonalCenter from '@/page/personalcenter/personalcenter';
import TopicDetail from '@/page/topicDetail/topicDetail';
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
      path: '/personalcenter',
      name: 'personalcenter',
      component: PersonalCenter
    },
    {
      path: '/topic_detail/:id',
      name: 'topicDetail',
      component: TopicDetail
    },
  ]
})
