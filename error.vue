<template>
  <!-- <NuxtLayout name="default"> -->
  <div
    class="flex flex-col items-center justify-center w-full min-h-screen px-6 space-x-8 space-y-16 lg:flex-row lg:space-y-0 2xl:space-x-0 dark:bg-slate-900"
  >
    <div
      class="flex flex-col items-center justify-center w-full text-center lg:w-1/2 lg:px-2 xl:px-0"
    >
      <div class="mb-24">
        <Logo class="w-56 !text-gray-900 dark:!text-white" />
      </div>

      <p
        class="mt-2 text-4xl font-black text-red-700 md:text-5xl lg:text-6xl dark:text-red-500"
      >
        <span v-if="!error || error.statusCode != 404"
          >An error has occured</span
        >
        <span v-else>Page Not Found</span>
      </p>
      <p
        v-if="error && error.statusCode"
        class="text-4xl font-black text-gray-500 md:text-5xl lg:text-6xl dark:text-gray-300"
      >
        {{ error.statusCode }}
      </p>
      <p
        v-if="error && error.statusCode"
        class="my-12 text-lg text-gray-500 md:text-xl lg:text-2xl dark:text-gray-300"
      >
        <span v-if="error.statusCode == 404"
          >Sorry, the page you are looking for could not be found on
          AIVidPro.com.</span
        >
        <span v-else
          >Something went wrong! This should never happen. Please help us clean
          this mess by
          <a href="https://ig.me/m/AIVidPro" target="_blank"
            >reporting this error</a
          >.</span
        >
      </p>

      <a href="/" class="flex items-center space-x-2 btn btn-secondary">
        <Icon name="lucide:chevron-left" class="w-5 h-5" />
        <span>Return Home</span>
      </a>
    </div>
  </div>
  <!-- </NuxtLayout> -->
</template>

<script setup>
// default props available on error.vue
const props = defineProps({
  error: Object,
});

// customise 404 message from script section
const error = useError();
console.error("Error page: ", error.value);

useHead({
  title: props.error.statusCode == 404 ? "Page not found" : "Error",
});

// clear error and redirect to home page
const handleError = () => clearError({ redirect: "/" });
</script>
