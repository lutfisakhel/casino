<template>
  <div class="p-4">
    <div class="py-2 mx-auto sm:py-2 lg:max-w-7xl">
      <!-- Product -->
      <div
        class="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16"
      >
        <!-- Product image -->
        <div class="rounded-md lg:col-span-4 lg:row-end-1">
          <a
            :href="buttons[0].link"
            class="block rounded-md ring-2 ring-offset-1 hover:ring-red-300 ring-red-100"
          >
            <BaseImg
              v-if="imageSrc"
              :src="imageSrc"
              :alt="imageAlt"
              class="object-cover object-center"
              placeholder
              loading="lazy"
              :width="600"
            />
          </a>
        </div>

        <!-- Product details -->
        <div
          class="max-w-2xl mx-auto mt-6 sm:mt-8 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none"
        >
          <div class="flex flex-col-reverse">
            <p
              class="text-xl leading-8 tracking-tight text-gray-900 dark:text-white sm:text-xl"
            >
              {{ description }}
            </p>
          </div>
          <div>
            <span
              class="inline-flex mb-6 text-3xl font-bold bg-white text-slate-700 dark:text-white dark:bg-slate-950"
            >
              {{ rated }}
              <StarIcon class="w-6 h-6 mt-1 text-yellow-400" />
            </span>
          </div>
          <div class="-mt-12">
            <h3>{{ offer }}</h3>
          </div>

          <div
            v-for="(button, index) in buttons"
            :key="index"
            class="flex mt-2"
          >
            <a
              :href="button.link"
              class="flex items-center justify-center flex-1 max-w-xs px-6 py-2 font-bold text-center text-white border border-transparent rounded-lg shadow-md hover:text-gray-800 bg-emerald-500 hover:bg-emerald-100"
            >
              {{ button.text }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { StarIcon } from "@heroicons/vue/20/solid";

/**
 * Props:
 * - name: The name of the product.
 * - imageSrc: The source URL for the product's image.
 * - imageAlt: The alternative text for the product's image, for accessibility.
 * - reviewsAverage: The average review score for the product.
 * - buttons: An array of objects, each containing the text and link for a button.
 */
defineProps({
  description: String,
  imageSrc: String,
  imageAlt: String,
  rated: Number,
  offer: String,
  buttons: Array,
});
</script>