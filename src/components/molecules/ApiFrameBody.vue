<template>
    <div>
        <slot></slot>
        <v-button class="execute-btn" btn-name="実行" theme="primary" @click="getBTC"></v-button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VButton from '@atoms/VButton.vue'

export default Vue.extend({
    name: 'ApiFrameBody',
    components: {
        VButton,
    },
    methods: {
        getBTC(): void {
            this.$emit('getBTC')
        },
    },
})
</script>

<style scoped>
.execute-btn {
    margin-left: 20px;
}
</style>
