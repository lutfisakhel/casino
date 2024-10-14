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
    question: "Çevrimiçi casinolar oynamak güvenli mi?",
    answer:
      "Evet, lisanslı ve düzenlenmiş çevrimiçi casinolarda oynamak genellikle güvenlidir. Casinonun SSL şifreleme kullandığından ve iyi yorumlar aldığından emin olun.",
  },
  {
    question: "Çevrimiçi casinolarda gerçek para kazanabilir misiniz?",
    answer:
      "Evet, çevrimiçi casinolarda gerçek para kazanabilirsiniz. Ancak, sorumlu bir şekilde oynamak ve ilgili risklerin farkında olmak önemlidir.",
  },
  {
    question: "En iyi çevrimiçi casinolar hangileridir?",
    answer:
      "En iyi çevrimiçi casinolar, uygun lisanslara sahip, geniş oyun yelpazesi sunan, güvenli ödeme yöntemleri olan ve olumlu kullanıcı yorumlarına sahip olanlardır.",
  },
  {
    question: "Çevrimiçi casino bonusları nasıl çalışır?",
    answer:
      "Çevrimiçi casino bonusları, yeni oyuncuları çekmek için tasarlanmış promosyon teklifleri, örneğin ücretsiz döndürmeler veya depozito eşleşmeleri gibi, tekliflerdir. Her zaman şartlar ve koşulları okuyun.",
  },
  // More questions...
];
</script>