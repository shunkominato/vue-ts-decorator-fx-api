<template>
    <div>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'FrameHeader',
})
</script>

<style scoped>
.execute-btn {
    margin-left: 20px;
}
</style>
