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
import Vue from 'vue'
import MenuFrame from '@organisms/MenuFrame.vue'
import Heding from '@organisms/Heding.vue'

export default Vue.extend({
    name: 'MenuPage',
    components: {
        Heding,
        MenuFrame,
    },
})
</script>

<style scoped>
.container {
    margin-top: 50px;
}
</style>
