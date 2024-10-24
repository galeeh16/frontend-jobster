<script setup>
const props = defineProps({
    total: {
        require: false,
        type: Number,
        default: 8
    }
});
</script>

<template>
    <div class="animate-pulse mb-9">
        <div class="bg-neutral-100 rounded-lg h-8 max-w-44">
        </div>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        <template v-for="i in props.total" :key="i">
            <Card class="animate-pulse bg-neutral-50 border-0">
                <div class="bg-neutral-200 rounded-lg h-[34px]">
                </div>

                <div class="bg-neutral-200 rounded-lg h-8 mt-8 mb-8"></div>

                <div class="flex justify-between mb-8">
                    <div class="bg-neutral-200 rounded-lg h-[34px] w-32"></div>
                    <div class="bg-neutral-200 rounded-lg h-[34px] w-32"></div>
                </div>

                <div class="flex justify-between">
                    <div>
                        <div class="bg-neutral-200 rounded-lg h-[34px] w-32 mb-2"></div>
                        <div class="bg-neutral-200 rounded-lg h-[34px] w-32"></div>
                    </div>
                    <div>
                        <div class="bg-neutral-200 rounded-lg h-20 w-20"></div>
                    </div>
                </div>
            </Card>
        </template>
    </div>

    <div class="mt-20 flex w-full items-center justify-center">
        <div class="bg-neutral-100 rounded-lg h-10 w-96"></div>
    </div>
</template>