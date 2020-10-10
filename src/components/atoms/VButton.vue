<template>
    <button :class="`btn btn-${theme}`" @click="$emit('click')" data-testid="test-btn">{{ btnName }}</button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
    name: 'CmkForm',
})
export default class VButton extends Vue {
    @Prop({ type: String, required: true }) btnName: string
    @Prop({
        type: String,
        default: 'primary',
        validator: (value: string): boolean =>
            ['primary', 'secondary', 'success', 'danger', 'warning'].indexOf(value) !== -1,
    })
    theme: string
}
</script>

<style>
.btn {
    width: 70px;
}
</style>
