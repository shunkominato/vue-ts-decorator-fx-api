<template>
  <div>
    <slot></slot>
    <v-button class="execute-btn" btn-name="実行" theme="primary" @click="getFxRates"></v-button>
  </div>
</template>

<script lang="ts">
import VButton from '@atoms/VButton.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'ApiFrameBody',
  components: { VButton },
})
export default class ApiFrameBody extends Vue {
  getFxRates(): void {
    this.$emit('getFxRates');
  }
}
</script>

<style scoped>
.execute-btn {
  margin-left: 20px;
}
</style>
