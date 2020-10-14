<template>
  <div class="col-max mx-auto">
    <h1>システムエラーが発生しました。</h1>
    <v-button class="execute-btn" btn-name="TOPへ戻る" theme="primary" @click="rooter"></v-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'ErrorPage',
})
export default class ErrorPage extends Vue {
  rooter(): void {
    this.$router.push('/');
  }
}
</script>

<style></style>
