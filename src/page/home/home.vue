<template>
  <div>
    home
    <span v-for="item in topicList">{{item}}</span>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: mapState({
    topicList: state => state.home.topicList
  }),
  methods: mapActions('home', [
    'getTopicList'
  ]),
  created() {
    this.getTopicList();
  },
  mounted() {
  },
  components: {
  }
}
</script>
