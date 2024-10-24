<script setup>
import { computed } from 'vue';

const props = defineProps({
    size: {
        require: false,
        type: String,
        default: 'md',
    },
    variant: {
        require: false,
        type: String,
        default: 'primary'
    },
    rounded: {
        require: false,
        type: String,
        default: 'lg'
    },
});

const variantClass = computed(() => {
    switch (props.variant) {
        case 'primary':
            return 'text-white bg-emerald-600 hover:bg-emerald-700'
        case 'outline-primary':
            return 'text-emerald-600 bg-white border border-emerald-600 hover:bg-emerald-50'
        case 'outline':
            return 'text-gray-800 bg-white hover:bg-gray-100 border border-gray-800';
        default:
            return '';
    }
});

const roundedClass = computed(() => {
    switch (props.rounded) {
        case 'sm':
            return 'rounded-sm';
        case 'md':
            return 'rounded-md';
        case 'lg':
            return 'rounded-lg';
        case 'xl':
            return 'rounded-xl';
        case 'pill':
            return 'rounded-[48px]';
        case 'circle':
            return 'rounded-[50%]';
        default:
            return 'rounded-lg';
    }
});

const sizeClass = computed(() => {
    switch (props.size) {
        case 'sm':
            return 'py-2 px-3 text-sm';
        case 'md':
            return 'py-2.5 px-4';
        case 'lg':
            return 'py-3 px-5 text-[16px]';
        case 'xl':
            return 'py-4 px-6 text-xl';
        default:
            return 'py-2.5 px-4';
    }
})
</script>

<template>
    <button type="button" :class="[
        variantClass,
        roundedClass,
        sizeClass,
        'text-[14px] font-medium transition-all duration-200',
    ]">
        <slot />
    </button>
</template>