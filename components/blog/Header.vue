<template>
  <header>
    <h1
      class="text-xl dark:text-zinc-300 md:text-3xl lg:text-4xl font-bold my-4"
    >
      {{ title }}
    </h1>

    <p
      v-if="description"
      class="sm:text-lg mb-6 text-zinc-600 dark:text-zinc-400"
    >
      {{ description }}
    </p>

    <BaseImg
      v-if="image"
      :src="image"
      :alt="alt"
      :width="800"
      :height="450"
      :placeholder="[48, 27]"
      densities="x1"
      preload
      class="rounded-2xl shadow-lg w-full overflow-hidden"
      fit="inside"
      format="webp"
    />
    <!-- <NuxtPicture v-if="image" :src="image" :alt="alt || ''" width="600" placeholder densities="x1" format="avif,webp" :imgAttrs="{class:'m-auto rounded-2xl shadow-lg h-32 md:h-72 w-4/6 md:w-4/5 content-center object-cover'}" /> -->

    <div
      class="flex w-full text-xs md:text-base mt-6 mb-12 border-b border-gray-300 dark:border-gray-700"
    >
      <div
        class="md:flex text-black dark:text-zinc-300 gap-8 text-xs sm:text-sm"
      >
        <div class="flex items-center font-semibold py-2">
          <Icon
            name="material-symbols:calendar-month"
            size="1em"
            class="w-5 h-5 ml-2 text-gray-500 dark:text-gray-300"
          />
          <p>{{ dayjs(updatedAt).format("ddd, DD MMM YYYY") }}</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import dayjs from "dayjs";

const props = defineProps({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  alt: {
    type: String,
  },
  description: {
    type: String,
  },
  updatedAt: {
    type: String,
  },
});

const isSVG = computed(() => props.image?.endsWith(".svg"));
</script>
