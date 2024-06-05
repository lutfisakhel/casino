<template>
  <div>
    <div class="px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:px-8 lg:py-40">
      <div class="mx-auto divide-y divide-gray-900/10">
        <h2
          class="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-zinc-300"
        >
          Frequently asked questions
        </h2>
        <dl
          class="mt-10 space-y-6 divide-y dark:text-zinc-300 divide-gray-900/10"
        >
          <Disclosure
            as="div"
            v-for="faq in faqs"
            :key="faq.question"
            class="pt-6"
            v-slot="{ open }"
          >
            <dt>
              <DisclosureButton
                class="flex items-start justify-between w-full text-left text-gray-900 dark:text-zinc-300"
              >
                <span class="text-base font-semibold leading-7">{{
                  faq.question
                }}</span>
                <span class="flex items-center ml-6 h-7">
                  <PlusSmallIcon
                    v-if="!open"
                    class="w-6 h-6"
                    aria-hidden="true"
                  />
                  <MinusSmallIcon v-else class="w-6 h-6" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="pr-12 mt-2">
              <p class="text-base leading-7 text-gray-600 dark:text-zinc-300">
                {{ faq.answer }}
              </p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/24/outline";

const faqs = [
  {
    question: "What Is An AI Video?",
    answer:
      "An AI video is a video that was created by using artificial intelligence, either from scratch, or by using the most suitable stock video and/or images that fit the script.",
  },
  {
    question: "How can AI be used in video?",
    answer:
      "AI can be used in many ways for video editing and generation. Many tools offer features specifically for video and audio including text-based editing, text to video AI, automatic voice syncing, eye contact correction and object replacement.",
  },
  {
    question: "Can AI Create Video Content?",
    answer:
      "Yes you can! There are many tools that provide features like text to video or text to speech to generate videos for you. These tools typically require a script to generate the video or the audio. Most tools provide an AI script writing assistant to help you generate written content.",
  },
  {
    question: "Can I Monetize AI-Generated Content?",
    answer:
      "The short answer is yes. You can make money from Ai generated videos. But, be sure to first read the guidelines of the platform you are sharing this content on. For example, Youtube allows you to monetize Ai generated content on your channel if it isn’t “redundant”.",
  },
  // More questions...
];
</script>