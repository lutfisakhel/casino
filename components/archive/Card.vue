<template>
  <article
    class="group border dark:border-gray-800 my-2 rounded-2xl overflow-hidden shadow-sm text-zinc-700 dark:text-zinc-300"
  >
    <NuxtLink :to="path" class="grid grid-cols-1 sm:grid-cols-10 gap-1">
      <div class="sm:col-span-3">
        <BaseImg
          v-if="image"
          loading="lazy"
          class="h-full w-full object-cover object-center rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none shadow-lg group-hover:scale-[1.02] transition-all duration-500"
          :width="300"
          :src="image"
          :alt="alt"
          placeholder
        />
      </div>
      <div class="sm:col-span-7 p-5">
        <h2
          class="text-xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400"
        >
          {{ title }}
        </h2>
        <p class="text-ellipsis line-clamp-2">
          {{ description }}
        </p>
        <div
          class="text-black dark:text-zinc-300 text-sm mt-2 mb-1 md:flex md:space-x-6"
        >
          <div class="flex items-center">
            <Icon
              name="material-symbols:calendar-month"
              size="1em"
              class="w-5 h-5 ml-2 text-gray-500 dark:text-gray-300"
            />
            <p>{{ dayjs(updatedAt).format("DD MMM YYYY") }}</p>
          </div>
        </div>
        <div
          class="flex group-hover:underline text-sky-700 dark:text-sky-400 items-center pt-2"
        >
          <p>Read More</p>
          <Icon
            name="material-symbols:arrow-forward-rounded"
            size="1em"
            class="ml-2 transform group-hover:translate-x-1 duration-500"
          />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup>
import dayjs from "dayjs";

const props = defineProps({
  path: {
    type: String,
  },
  title: {
    type: String,
  },
  updatedAt: {
    type: String,
  },
  description: {
    type: String,
    default: "no-description",
  },
  image: {
    type: String,
  },
  alt: {
    type: String,
  },
  ogImage: {
    type: String,
  },
});
</script>
