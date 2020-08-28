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
import Vue from 'vue'
import FrameHeader from '@molecules/FrameHeader.vue'
import MenuFrameBody from '@molecules/MenuFrameBody.vue'

export default Vue.extend({
    name: 'MenuFrame',
    components: {
        FrameHeader,
        MenuFrameBody,
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
})
</script>

<style>
.menu-btn {
    margin-left: 20px;
}
</style>
