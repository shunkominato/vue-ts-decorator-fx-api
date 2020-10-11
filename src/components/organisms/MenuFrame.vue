<template>
  <div class="col-4 mx-auto">
    <div class="card">
      <frame-header>
        <h5 class="card-header">{{ title }}</h5>
      </frame-header>

      <menu-frame-body>
        <div class="card-body">{{ content }}</div>
      </menu-frame-body>

      <div class="card-footer"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import FrameHeader from '@molecules/FrameHeader.vue';
import MenuFrameBody from '@molecules/MenuFrameBody.vue';

@Component({
  name: 'MenuFrame',
  components: { FrameHeader, MenuFrameBody },
})
export default class MenuFrame extends Vue {
  @Prop({ type: String, required: true }) title: string;
  @Prop({ type: String, required: true }) content: string;
}
</script>

<style>
.menu-btn {
  margin-left: 20px;
}
</style>
