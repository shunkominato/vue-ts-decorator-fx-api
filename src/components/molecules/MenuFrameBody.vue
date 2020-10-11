<template>
  <div>
    <slot></slot>
    <v-button class="execute-btn" btn-name="実行" theme="primary" @click="rooter"></v-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import VButton from '@atoms/VButton.vue';

@Component({
  name: 'MenuFrameBody',
  components: { VButton },
})
export default class MenuFrameBody extends Vue {
  rooter(): void {
    this.$router.push('/ShowBtcPage');
  }
}
</script>

<style scoped>
.execute-btn {
  margin-left: 20px;
}
</style>
