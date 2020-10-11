<template>
  <div>
    <slot></slot>
    <v-button class="execute-btn" btn-name="実行" theme="primary" @click="getBTC"></v-button>
  </div>
</template>

<script lang="ts">
import VButton from '@atoms/VButton.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'ApiFrameBody',
})
export class ApiFrameBodyVue extends Vue {
  getBTC(): void {
    this.$emit('getBTC');
  }
}
</script>

<style scoped>
.execute-btn {
  margin-left: 20px;
}
</style>
