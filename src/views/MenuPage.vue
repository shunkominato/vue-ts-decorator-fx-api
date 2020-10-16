<template>
  <div>
    <heding class="header" />
    <div class="container">
      <div class="row">
        <menu-frame title="Menu" content="Api実行へ" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import MenuFrame from '@organisms/MenuFrame.vue';
import Heding from '@organisms/Heding.vue';

@Component({
  name: 'MenuPage',
  components: { MenuFrame, Heding },
})
export default class MenuPage extends Vue {}
</script>

<style scoped>
.container {
  margin-top: 50px;
}
</style>
