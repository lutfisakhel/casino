<template>
  <Disclosure
    as="nav"
    class="border-b bg-slate-900 dark:bg-slate-950 border-slate-800"
    v-slot="{ open }"
  >
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <div class="flex items-stretch justify-between py-4">
        <nuxt-link
          to="/"
          class="flex items-center flex-shrink-0"
          aria-label="theturkbet Home"
          no-prefetch
        >
          <Logo class="w-[9.75rem]" />
        </nuxt-link>

        <div class="hidden lg:ml-6 lg:flex lg:items-center">
          <div class="flex space-x-4">
            <nuxt-link
              v-for="item in navigation"
              :key="item.label"
              :to="item.url"
              :class="[
                $route.path.includes(item.url)
                  ? 'bg-slate-800 text-white hover:text-white'
                  : 'text-gray-300 hover:bg-slate-600 hover:text-white',
                'rounded-md px-3 py-2 last:-ml-2',
              ]"
              :aria-current="
                $route.path.includes(item.url) ? 'page' : undefined
              "
            >
              {{ item.label }}
            </nuxt-link>
          </div>
        </div>

        <div class="flex items-center -ml-3 lg:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block w-6 h-6" aria-hidden="true" />
            <XMarkIcon v-else class="block w-6 h-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="lg:hidden" v-slot="{ close }">
      <div class="px-3 pt-2 pb-3 space-y-1">
        <DisclosureButton
          v-for="item in navigation"
          as="template"
          :key="item.label"
          :disabled="null"
          @click="close()"
        >
          <nuxt-link
            :to="item.url"
            :class="[
              $route.path.includes(item.url)
                ? 'bg-slate-700 text-white hover:text-white'
                : 'text-gray-300 bg-slate-900 hover:bg-slate-600 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            ]"
            :aria-current="$route.path.includes(item.url) ? 'page' : undefined"
          >
            {{ item.label }}
          </nuxt-link>
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [
  { label: "تواصل بنا", url: "/contact" },
  { label: "مقالات", url: "/articles" },
];
</script>
