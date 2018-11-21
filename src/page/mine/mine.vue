<template>
  <div>
    <group>
      <cell is-link title="我的消息" link="/my_message">
        <div class="badge-value">
          <span class="vertical-middle">1111</span>
          <badge></badge>
        </div>
      </cell>
      <cell is-link title="我的话题" link="/my_topic"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell, Badge } from 'vux';
export default {
  components: {
    Group,
    Cell,
    Badge
  }
}
</script>
