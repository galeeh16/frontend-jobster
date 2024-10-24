<script setup>
import VuePaginate from 'vuejs-paginate-next';

const props = defineProps({
    pageCount: {
        require: true,
        type: Number,
    },
    pageRange: {
        type: Number,
        default: 4
    },
    marginPages: {
        type: Number,
        default: 1
    },
    prevText: {
        type: String,
        default: 'Prev',
    },
    nextText: {
        type: String,
        default: 'Next',
    },
    breakViewText: {
        type: String,
        default: '...',
    },
    initialPage: {
        type: Number,
        default: 1,
    },
    forcePage: {
        type: Number
    },
    // clickHandler: {
    //     type: Function,
    // },
    // ul
    containerClass: {
        type: String,
        default: 'inline-flex items-center gap-2'
    },
    // li
    pageClass: {
        type: String,
        default: 'inline-flex border border-gray-200 rounded-lg items-center justify-center cursor-pointer transition-all duration-200 hover:bg-neutral-100'
    },
    // a
    pageLinkClass: {
        type: String,
        default: 'p-2 min-w-[38px] text-center'
    },
    // prev li
    prevClass: {
        type: String,
        default: 'rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-neutral-100',
    },
    // prev a
    prevLinkClass: {
        type: String,
        default: 'p-2 min-w-[38px] text-center'
    },
    // next li
    nextClass: {
        type: String,
        default: 'rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-neutral-100',
    },
    // next a
    nextLinkClass: {
        type: String,
        default: 'p-2 min-w-[38px] text-center',
    },
    breakViewClass: {
        type: String,
    },
    breakViewLinkClass: {
        type: String,
    },
    activeClass: {
        type: String,
        default: 'bg-emerald-600 border border-emerald-600 text-white rounded-lg hover:!bg-emerald-600',
    },
    disableClass: {
        type: String,
        default: 'disabled',
    },
    noLiSurround: {
        type: Boolean,
    },
    firstLastButton: {
        type: Boolean,
    },
    firstButtonText: {
        type: String,
        default: 'First',
    },
    lastButtonText: {
        type: String,
        default: 'Last',
    },
    hidePrevNext: {
        type: Boolean,
        default: false,
    }

});

const emit = defineEmits(['clickHandler']);

const clickCallback = (pageNum) => {
    // console.log('clickHandler', pageNum)
    emit('clickHandler', pageNum);
}
</script>

<template>
    <VuePaginate :page-count="props.pageCount" :page-range="props.pageRange" :margin-pages="props.marginPages"
        :prev-text="props.prevText" :next-text="props.nextText" :break-view-text="props.breakViewText"
        :initial-page="props.initialPage" :force-page="props.forcePage" :click-handler="clickCallback"
        :container-class="props.containerClass" :page-class="props.pageClass" :page-link-class="props.pageLinkClass"
        :prev-class="props.prevClass" :prev-link-class="props.prevLinkClass" :next-class="props.nextClass"
        :next-link-class="props.nextLinkClass" :break-view-class="props.breakViewClass"
        :break-view-link-class="props.breakViewLinkClass" :active-class="props.activeClass"
        :disabled-class="props.disableClass" :no-li-surround="props.noLiSurround"
        :first-last-button="props.firstLastButton" :first-button-text="props.firstButtonText"
        :last-button-text="props.lastButtonText" :hide-prev-next="props.hidePrevNext">
    </VuePaginate>
</template>