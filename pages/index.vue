<!-- NOTE: this is to view old files on the _backup branch - diffed with current main version -->
<!-- cmd + shft + p -->
<!-- type diff and enter view branch diff -->
<!-- choose the _backup branch to check files reverted back RTL -->
<template>
  <div class="container mx-auto mb-12 text-zinc-600 max-w-7xl">
    <MainHero class="pt-8 pb-12 md:pt-0 md:pb-24" />
    <MainRecent />
    <ContentSection />
    <!-- <MainTrending /> -->
    <FAQ />
  </div>
</template>

<script setup>
import { metaFromNuxtContent } from "~/utils/sn-utils-meta";

useHead(
  metaFromNuxtContent({
    title: "Theturkbet Home",
    description:
      "Welcome To Theturkbet! Learn about the best and latest casino offers and how to access them from turkey.",
  })
);

// Generate OG Image
// defineOgImageComponent('About', {
//   headline: 'Greetings 👋',
//   title: 'Home',
//   description: 'Dive into web development with me and learn Js, Ts, Vue, Nuxt, Docker, k8s',
//   link: '/riyad.jpg',
// })
</script>
