<template>
    <div>
        <slot></slot>
        <v-button class="execute-btn" btn-name="実行" theme="primary" @click="rooter"></v-button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VButton from '@atoms/VButton.vue'

export default Vue.extend({
    name: 'MenuFrameBody',
    components: {
        VButton,
    },
    methods: {
        rooter(): void {
            this.$router.push('/ShowBtcPage')
        },
    },
})
</script>

<style scoped>
.execute-btn {
    margin-left: 20px;
}
</style>
