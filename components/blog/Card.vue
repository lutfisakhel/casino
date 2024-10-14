<template>
  <article
    class="my-2 overflow-hidden border shadow-sm group dark:border-gray-800 rounded-2xl text-zinc-700 dark:text-zinc-300"
  >
    <NuxtLink :to="path">
      <BaseImg
        v-if="image"
        class="lg:h-auto w-full object-cover object-center rounded-t-2xl shadow-lg group-hover:scale-[1.02] transition-all duration-500 text-gray-900"
        :width="300"
        :src="image"
        :alt="alt"
        placeholder
        loading="lazy"
      />
      <div class="px-3 pb-4">
        <div class="pt-3 pb-2 text-black dark:text-zinc-300">
          <div class="flex items-center">
            <Icon
              name="material-symbols:calendar-month"
              size="1em"
              class="w-5 h-5 ml-2 text-gray-500 dark:text-gray-300"
            />
            {{ dayjs(updatedAt).format("DD MMM YYYY") }}
          </div>
        </div>
        <h2
          class="pb-1 text-xl font-semibold text-black dark:text-zinc-300 group-hover:text-sky-700 dark:group-hover:text-sky-400"
        >
          {{ title }}
        </h2>
        <p class="text-base text-ellipsis line-clamp-2">
          {{ description }}
        </p>
        <div
          class="flex items-center py-2 group-hover:underline text-sky-700 dark:text-sky-400"
        >
          <p>اقرأ المقال</p>
          <Icon
            name="material-symbols:arrow-back-rounded"
            size="1em"
            class="mr-2 duration-500 transform group-hover:translate-x-1"
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
