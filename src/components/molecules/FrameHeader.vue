<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'FrameHeader',
})
export default class FrameHeader extends Vue {}
</script>

<style scoped>
.execute-btn {
  margin-left: 20px;
}
</style>
