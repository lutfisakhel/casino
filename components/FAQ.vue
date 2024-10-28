<template>
  <div>
    <div class="px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:px-8 lg:py-40">
      <div class="mx-auto divide-y divide-gray-900/10">
        <h2
          class="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-zinc-300"
        >
          الأسئلة الشائعة
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
    question: "هل اللعب في الكازينوهات على الإنترنت آمن؟",
    answer:
      "نعم، اللعب في الكازينوهات المرخصة والمنظمة أون لاين عادة ما يكون آمنًا. تأكد من أن الكازينو يستخدم تشفير SSL وأنه يتمتع بتقييمات جيدة.",
  },
  {
    question: "هل يمكنك ربح المال الحقيقي في ألعاب الكازينو أون لاين؟",
    answer:
      "نعم، يمكنك ربح المال الحقيقي في الكازينوهات عبر الإنترنت. ومع ذلك، من المهم اللعب بمسؤولية وأن تكون على دراية بالمخاطر المتعلقة بذلك.",
  },
  {
    question: "ما هي أفضل الكازينوهات أون لاين؟",
    answer:
      "أفضل الكازينوهات على الإنترنت هي تلك التي تمتلك تراخيص موثوقة، وتقدم مجموعة واسعة من الألعاب، وتوفر طرق دفع آمنة، ولها تقييمات إيجابية من المستخدمين.",
  },
  {
    question: "كيف تعمل مكافآت الكازينو على الإنترنت؟",
    answer:
      "مكافآت الكازينو أون لاين هي عروض ترويجية مصممة لجذب اللاعبين الجدد، مثل الدورات المجانية أو مطابقة الودائع. تأكد دائمًا من قراءة الشروط والأحكام.",
  },
  // More questions...
];
</script>