<script setup>
const model = defineModel();
</script>

<template>
    <input type="text" v-bind="$attrs" v-model="model"
        class="py-2.5 px-3 border border-gray-300 outline-none focus:border-emerald-500 rounded-lg w-full">
</template>