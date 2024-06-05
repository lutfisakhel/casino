<template>
  <component
    :is="svgComponent"
    class="min-w-1 min-h-1 fill-inherit"
  ></component>
</template>

<script setup>
import { computed, h } from "vue";

const props = defineProps({
  src: {
    type: String,
    default: "",
  },
});

// Load the specific icon based on the src prop
let svg;
if (props.src) {
  const iconImport = import.meta.glob("~/assets/svgs/**/*.svg", { as: "raw" });
  // console.log(">> iconImport", iconImport)
  // console.log(">> props.src", props.src)
  svg = await iconImport[props.src]?.();
}

const svgComponent = computed(() => {
  return {
    render() {
      return h("div", {
        innerHTML: svg,
      });
    },
  };
});
</script>
