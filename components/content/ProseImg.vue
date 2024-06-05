<template>
    <NuxtImg class="w-full" loading="lazy" :placeholder="[48, 27]" :src="refinedSrc" :alt="alt" :width="width"
        :height="height" densities="x1" format="webp" />
</template>
  
<script setup>
// source https://github.com/nuxt-modules/mdc/tree/main/src/runtime/components/prose
import { withTrailingSlash, withLeadingSlash, joinURL } from 'ufo'
import { useRuntimeConfig, computed } from '#imports'
import { useLazyHydration, useHydrateWhenVisible } from 'vue3-lazy-hydration';

if (process.client) {
    // delays hydration
    const { willPerformHydration, hydrate, onCleanup } = useLazyHydration();

    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    const observerOptions = {
        rootMargin: '100px',
        threshold: 0.05,
    };

    // hydrate when one of the root elements is visible
    useHydrateWhenVisible(
        { willPerformHydration, hydrate, onCleanup },
        observerOptions
    );
}

const props = defineProps({
    src: {
        type: String,
        default: ''
    },
    alt: {
        type: String,
        default: ''
    },
    width: {
        type: [String, Number],
        default: undefined
    },
    height: {
        type: [String, Number],
        default: undefined
    }
})

const refinedSrc = computed(() => {
    if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
        const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL))
        if (_base !== '/' && !props.src.startsWith(_base)) {
            return joinURL(_base, props.src)
        }
    }
    return props.src
})
</script>
  