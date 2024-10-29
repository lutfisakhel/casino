<template>
  <div class="flex items-center justify-center">
    <label
      v-if="isShowLabel"
      for="colorToggle"
      class="ml-3 text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400 whitespace-nowrap"
    >
      Color Mode
    </label>

    <ClientOnly>
      <button
        id="colorToggle"
        name="colorToggle"
        v-on:click="toggleColorMode"
        class="flex items-center p-2 text-gray-800 bg-gray-200 rounded-xl focus:outline-none hover:bg-gray-300 dark:text-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 shrink-0"
      >
        <Icon
          v-if="colorMode.preference === 'light'"
          name="lucide:sun"
          class="w-5 h-5"
        />
        <Icon
          v-else-if="colorMode.preference === 'dark'"
          name="lucide:moon"
          class="w-5 h-5"
        />
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
