<template>
    <div>
        <heding />
        <div class="container">
            <div class="row">
                <api-frame title="API実行" content="ビットコイン価格取得" @getBTC="getBTC" />
            </div>
            <div class="show">
                <p class="show__text">BTC/USD : {{ getBTCUSD }}</p>
                <p class="show__text">BTC/GBP : {{ getBTCGBP }}</p>
                <p class="show__text">BTC/EUR : {{ getBTCEUR }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ApiFrame from '@organisms/ApiFrame.vue'
import Heding from '@organisms/Heding.vue'

export default Vue.extend({
    name: 'ShowBtcPage',
    components: {
        Heding,
        ApiFrame,
    },
    computed: {
        // getters call
        // stores/gettersを呼ぶ
        getBTCUSD(): string {
            return this.$store.getters['stores/getBTCUSD']
        },
        getBTCGBP(): string {
            return this.$store.getters['stores/getBTCGBP']
        },
        getBTCEUR(): string {
            return this.$store.getters['stores/getBTCEUR']
        },
    },
    methods: {
        getBTC(): void {
            // actions dispatch
            // stores/actions.tsのgetBTCを呼ぶ
            this.$store.dispatch('stores/getBTC')
        },
    },
})
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
