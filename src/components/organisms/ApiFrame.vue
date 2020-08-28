<template>
    <div class="col-4 mx-auto">
        <div class="card">
            <frame-header>
                <h5 class="card-header">{{ title }}</h5>
            </frame-header>

            <api-frame-body @getBTC="getBTC">
                <div class="card-body">{{ content }}</div>
            </api-frame-body>

            <div class="card-footer"></div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FrameHeader from '@molecules/FrameHeader.vue'
import ApiFrameBody from '@molecules/ApiFrameBody.vue'

export default Vue.extend({
    name: 'ApiFrame',
    components: {
        FrameHeader,
        ApiFrameBody,
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    methods: {
        getBTC(): void {
            this.$emit('getBTC')
        },
    },
})
</script>

<style scoped></style>
