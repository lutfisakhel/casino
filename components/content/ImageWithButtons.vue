<template>
  <div class="p-4 bg-white">
    <div class="py-2 mx-auto sm:py-2 lg:max-w-7xl">
      <!-- Product -->
      <div
        class="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16"
      >
        <!-- Product image -->
        <div class="rounded-md lg:col-span-4 lg:row-end-1">
          <a
            :href="buttons[0].link"
            class="block rounded-md ring-2 ring-offset-1 hover:ring-rose-300 ring-rose-100"
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
              class="text-xl leading-8 tracking-tight text-gray-900 sm:text-xl"
            >
              {{ description }}
            </p>
          </div>
          <div class="-mt-12">
            <h3>{{ price }} ر.س</h3>
          </div>
          <div class="-mt-4">
            <h4>
              تقييمنا
              {{ reviewsAverage }} من 5 نجوم
            </h4>
            <div class="flex mb-6">
              <StarIcon
                v-for="rating in [0, 1, 2, 3, 4]"
                :key="rating"
                :class="[
                  reviewsAverage > rating ? 'text-yellow-400' : 'text-gray-300',
                  'h-5 w-5 flex-shrink-0',
                ]"
                aria-hidden="true"
              />
            </div>
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
  reviewsAverage: Number,
  price: Number,
  buttons: Array,
});
</script>