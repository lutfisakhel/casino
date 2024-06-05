<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div
      class="mt-20 py-20 px-8 md:p-20 bg-white dark:bg-slate-800 rounded-xl max-w-4xl mx-auto"
    >
      <div class="max-w-lg mx-auto lg:max-w-none">
        <div class="text-center">
          <h2
            class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
          >
            Thank you for contacting us
          </h2>
          <p class="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-400">
            We will get back to you as soon as possible.
          </p>
          <p class="mt-8 text-lg leading-6 text-gray-500 dark:text-gray-400">
            <nuxt-link
              to="/"
              class="text-indigo-600 hover:text-indigo-500 dark:text-indigo-300"
              >Return to homepage<span aria-hidden="true">
                &rarr;</span
              ></nuxt-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { metaFromNuxtContent } from "~/utils/sn-utils-meta";

useHead(
  metaFromNuxtContent({
    title: "Thank you for contacting us",
    description: "Thank you for contacting AIVidPro!",
  })
);
</script>
