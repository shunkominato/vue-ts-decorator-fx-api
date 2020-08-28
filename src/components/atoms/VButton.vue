<template>
    <button :class="`btn btn-${theme}`" @click="$emit('click')" data-testid="test-btn">{{ btnName }}</button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'VButton',
    props: {
        btnName: {
            type: String,
            required: true,
        },
        theme: {
            type: String,
            default: 'primary',
            validator: (value: string): boolean =>
                ['primary', 'secondary', 'success', 'danger', 'warning'].indexOf(value) !== -1,
        },
    },
})
</script>

<style>
.btn {
    width: 70px;
}
</style>
