<template>
  <div>
    <div class="py-12 mx-auto overflow-hidden sm:py-8">
      <h2 class="sr-only">Products</h2>

      <div
        class="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-2 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="relative flex flex-col rounded-lg border-rose-500 group"
        >
          <BaseImg
            v-if="product.imageSrc"
            :src="product.imageSrc"
            :alt="product.imageAlt"
            class="object-center flex justify-center px-20 !mb-0"
            placeholder
            loading="lazy"
            :width="400"
          />
          <div
            class="absolute inset-0 border-2 border-gray-500 rounded-lg pointer-events-none"
            aria-hidden="true"
          />
          <div class="absolute inset-x-0 top-0 transform translate-y-px">
            <div class="flex justify-center transform -translate-y-1/2">
              <span
                class="z-10 inline-flex px-4 text-3xl font-bold bg-white text-slate-700 dark:text-white dark:bg-slate-950"
              >
                {{ product.rating }}
                <StarIcon
                  class="text-yellow-400 h-6 w-6 ml-1 mt-1 flex-shrink-0"
                />
              </span>
            </div>
          </div>
          <div class="flex flex-col flex-1 p-4">
            <p
              class="py-5 !my-0 text-xl font-medium tracking-tight text-center text-slate-950 dark:text-white"
            >
              {{ product.name }}
            </p>
            <p
              class="md:pb-5 pb-6 !my-0 text-xl font-semibold tracking-tight text-center text-slate-950 dark:text-white"
            >
              {{ product.offer }}
            </p>
            <div v-for="button in product.buttons" :key="button.text">
              <a
                :href="button.link"
                class="relative block w-full x-2.5 py-3 text-md md:text-sm font-semibold text-center text-white border border-transparent rounded-lg shadow-md hover:text-gray-800 bg-red-500 hover:bg-gray-100"
              >
                <Icon
                  name="material-symbols:arrow-forward-rounded"
                  size="1.5em"
                  class="mr-2 duration-500 transform md:mr-2 group-hover:translate-x-1"
                />
                {{ button.text }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { StarIcon } from "@heroicons/vue/20/solid";

// Props structure detail:
// products: Array of objects representing products. Each product object should have the following properties:
// - id: Number, a unique identifier for each product.
// - feature: String, a tagline or feature highlight for the product.
// - bordercolor: String, Tailwind CSS class for the product's border color.
// - textcolor: String, Tailwind CSS class for the text color of the feature tagline.
// - name: String, the name of the product.
// - buttons: Array of objects, each representing a button with properties:
//   - link: String, the URL the button will link to.
//   - text: String, the text displayed on the button.
// - imageSrc: String, the source URL of the product's image.
// - imageAlt: String, the alt text for the product's image.

// Accepting `products` as a prop
defineProps({
  products: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>