<template>
  <div class="relative bg-white isolate dark:bg-gray-900">
    <div class="grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2">
      <div
        class="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48"
      >
        <div class="max-w-xl mx-auto lg:mx-0 lg:max-w-lg">
          <div
            class="absolute inset-y-0 left-0 w-full overflow-hidden bg-gray-100 dark:hidden -z-10 ring-1 ring-gray-900/10 lg:w-1/2"
          >
            <svg
              class="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                  width="200"
                  height="200"
                  x="100%"
                  y="-1"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M130 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" stroke-width="0" fill="white" />
              <svg x="100%" y="-1" class="overflow-visible fill-gray-50">
                <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
              </svg>
              <rect
                width="100%"
                height="100%"
                stroke-width="0"
                fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
              />
            </svg>
          </div>

          <div
            class="absolute inset-y-0 left-0 hidden w-full overflow-hidden dark:block -z-10 ring-1 ring-white/5 lg:w-1/2"
          >
            <svg
              class="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                  width="200"
                  height="200"
                  x="100%"
                  y="-1"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M130 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="100%" y="-1" class="overflow-visible fill-gray-800/20">
                <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
              </svg>
              <rect
                width="100%"
                height="100%"
                stroke-width="0"
                fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
              />
            </svg>
            <div
              class="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
              aria-hidden="true"
            >
              <div
                class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                style="
                  clip-path: polygon(
                    74.1% 56.1%,
                    100% 38.6%,
                    97.5% 73.3%,
                    85.5% 100%,
                    80.7% 98.2%,
                    72.5% 67.7%,
                    60.2% 37.8%,
                    52.4% 32.2%,
                    47.5% 41.9%,
                    45.2% 65.8%,
                    27.5% 23.5%,
                    0.1% 35.4%,
                    17.9% 0.1%,
                    27.6% 23.5%,
                    76.1% 2.6%,
                    74.1% 56.1%
                  );
                "
              />
            </div>
          </div>

          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Get in touch
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            We love hearing from our readers! Whether you have a question,
            suggestion, or just want to share your AI-driven content creation
            journey, we're here for you. Drop us a message, and we'll get back
            to you as soon as we can.
          </p>

          <!-- <dl
            class="mt-10 space-y-4 text-base leading-7 text-gray-600 dark:text-gray-300"
          >
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Address</span>
                <BuildingOffice2Icon
                  class="w-6 text-gray-400 h-7"
                  aria-hidden="true"
                />
              </dt>
              <dd>182 Rockcrest Drive<br />Fountain Valley, CA 92708</dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <PhoneIcon class="w-6 text-gray-400 h-7" aria-hidden="true" />
              </dt>
              <dd>
                <a
                  class="hover:text-gray-900 dark:hover:text-white"
                  href="tel:+1 (123) 456-7890"
                  >+01 (123) 456-7890</a
                >
              </dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <EnvelopeIcon
                  class="w-6 text-gray-400 h-7"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <a
                  class="hover:text-gray-900 dark:hover:text-white"
                  href="mailto:support@aividpro.com"
                  >support@aividpro.com</a
                >
              </dd>
            </div>
          </dl> -->
        </div>
      </div>
      <div class="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
        <LazyContactUsForm
          class="max-w-xl mx-auto lg:mr-0 lg:max-w-lg"
          @success="$router.push('/contact-success')"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { metaFromNuxtContent } from "~/utils/sn-utils-meta";

useHead(
  metaFromNuxtContent({
    title: "Contact Us",
    description: "Contact AIVidPro. We'd love to hear from you!",
  })
);
</script>
