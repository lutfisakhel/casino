<template>
  <Disclosure as="nav" class="bg-slate-900 dark:bg-slate-950 border-b border-slate-800" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex items-stretch justify-between py-4">
        <nuxt-link to="/" class="flex flex-shrink-0 items-center" aria-label="AIVidPro Home" no-prefetch>
          <Logo class="w-[9.75rem]" />
        </nuxt-link>

        <div class="hidden lg:ml-6 lg:flex lg:items-center">
          <div class="flex space-x-4">
            <nuxt-link v-for="item in navigation" :key="item.label" :to="item.url" :class="[
              $route.path.includes(item.url)
                ? 'bg-slate-800 text-white hover:text-white'
                : 'text-gray-300 hover:bg-slate-600 hover:text-white',
              'rounded-md px-3 py-2 last:-mr-2',
            ]" :aria-current="$route.path.includes(item.url) ? 'page' : undefined">
              {{ item.label }}
            </nuxt-link>
          </div>
        </div>

        <div class="flex items-center lg:hidden -mr-3">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="lg:hidden" v-slot="{ close }">
      <div class="space-y-1 px-3 pt-2 pb-3">
        <DisclosureButton v-for="item in navigation" as="template" :key="item.label" :disabled="null" @click="close()">
          <nuxt-link :to="item.url" :class="[
            $route.path.includes(item.url)
              ? 'bg-slate-700 text-white hover:text-white'
              : 'text-gray-300 bg-slate-900 hover:bg-slate-600 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium',
          ]" :aria-current="$route.path.includes(item.url) ? 'page' : undefined">
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
  { label: "About", url: "/about" },
  { label: "Contact", url: "/contact" },
  { label: "Articles", url: "/articles" },
]
</script>
