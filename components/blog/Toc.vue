<template>
  <Disclosure v-if="links.length > 0" :defaultOpen="defaultOpen" as="nav" class="w-full" v-slot="{ open }">
    <div class="border dark:border-gray-800 rounded-md min-w-52 dark:bg-slate-900">
      <DisclosureButton
        class="flex justify-between items-center w-full text-sm font-bold p-3 hover:bg-gray-100 dark:hover:bg-gray-800">
        <span>Table Of Content</span>
        <ChevronUpIcon
          :class="open ? 'transform rotate-180 transition-transform duration-200' : 'transition-transform duration-200'"
          class="w-5 h-5" />
      </DisclosureButton>
      <transition name="slide-fade">
        <DisclosurePanel v-show="open" class="p-3 lg:overflow-y-auto lg:max-h-[80vh]">
          <template v-for="link in links" :key="link.id">
            <NuxtLink :to="`#${link.id}`" class="block text-xs mb-3 hover:underline">
              {{ link.text }}
            </NuxtLink>
            <template v-if="link.children && link.children.length > 0">
              <NuxtLink v-for="child in link.children" :key="child.id" :to="`#${child.id}`"
                class="block text-xs mb-3 hover:underline pl-2">
                {{ child.text }}
              </NuxtLink>
            </template>
          </template>
        </DisclosurePanel>
      </transition>
    </div>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
const { path } = useRoute()
const article = await queryContent(path).findOne()
const links = article?.body?.toc?.links

// Props
const props = defineProps({
  defaultOpen: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all .3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>