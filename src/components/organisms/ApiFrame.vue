<template>
  <div class="col-4 mx-auto">
    <div class="card">
      <frame-header>
        <h5 class="card-header">{{ title }}</h5>
      </frame-header>

      <api-frame-body @getFxRates="getFxRates">
        <div class="card-body">{{ content }}</div>
      </api-frame-body>

      <div class="card-footer"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import FrameHeader from '@molecules/FrameHeader.vue';
import ApiFrameBody from '@molecules/ApiFrameBody.vue';

@Component({
  name: 'ApiFrame',
  components: { FrameHeader, ApiFrameBody },
})
export default class ApiFrame extends Vue {
  @Prop({ type: String, required: true }) title: string;
  @Prop({ type: String, required: true }) content: string;

  getFxRates(): void {
    this.$emit('getFxRates');
  }
}
</script>

<style scoped></style>
