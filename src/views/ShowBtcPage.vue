<template>
  <div>
    <heding />
    <div class="container">
      <div class="row">
        <api-frame title="API実行" content="ビットコイン価格取得" @getBTC="getBTC" />
      </div>
      <div class="show">
        <p class="show__text">JPY : {{ fxRatesJPY }}</p>
        <p class="show__text">GBP : {{ fxRatesGBP }}</p>
        <p class="show__text">USD : {{ fxRatesUSD }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import FxRepository from '@/stores/repositories/FxRepository';
import ApiFrame from '@organisms/ApiFrame.vue';
import Heding from '@organisms/Heding.vue';

@Component({
  name: 'ShowBtcPage',
  components: { ApiFrame, Heding },
})
export default class ShowBtcPage extends Vue {
  // getters call
  // stores/gettersを呼ぶ
  get fxRatesJPY(): string {
    return getModule(FxRepository, this.$store).getFxRatesJPY;
  }

  get fxRatesGBP(): string {
    return getModule(FxRepository, this.$store).getFxRatesGBP;
  }

  get fxRatesUSD(): string {
    return getModule(FxRepository, this.$store).getFxRatesUSD;
  }

  getBTC(): void {
    getModule(FxRepository, this.$store).fetchFxRates();
  }
}
</script>

<style scoped>
.container {
  margin-top: 50px;
}

.show {
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}
</style>
