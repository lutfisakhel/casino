<template>
  <div class="flex justify-center items-center">
    <label
      v-if="isShowLabel"
      for="colorToggle"
      class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mr-3 whitespace-nowrap"
    >
      Color Mode
    </label>

    <ClientOnly>
      <button
        id="colorToggle"
        name="colorToggle"
        v-on:click="toggleColorMode"
        class="p-2 rounded-xl focus:outline-none text-gray-800 bg-gray-200 hover:bg-gray-300 dark:text-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 flex shrink-0 items-center"
      >
        <Icon v-if="colorMode.preference === 'light'" name="lucide:sun" class="w-5 h-5" />
        <Icon v-else-if="colorMode.preference === 'dark'" name="lucide:moon" class="w-5 h-5" />
        <Icon v-else name="lucide:sun-moon" class="w-5 h-5" />
      </button>
    </ClientOnly>
  </div>
</template>

<script setup>
const colorMode = useColorMode();

const props = defineProps({
  isShowLabel: {
    type: Boolean,
    default: false,
  },
});

function toggleColorMode() {
  if (colorMode.preference === "system") {
    colorMode.preference = "light";
  } else if (colorMode.preference === "light") {
    colorMode.preference = "dark";
  } else {
    colorMode.preference = "system";
  }
}
</script>
