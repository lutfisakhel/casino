<template>
  <BaseSvg v-if="isSVG" :src="src" class="overflow-hidden" />
  <NuxtImg v-else :src="src" :alt="alt" :width="width" :height="height" />
</template>

<script setup>
import { computed } from "vue";

defineOptions({
  inheritAttrs: true,
});

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
});

const isSVG = computed(() => props.src?.endsWith('.svg'));
</script>