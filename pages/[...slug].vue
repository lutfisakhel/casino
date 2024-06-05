<template>
  <div
    class="px-6 lg:px-8 container max-w-7xl mx-auto sm:grid grid-cols-12 gap-x-12 pt-4 md:pt-10 mb-12"
  >
    <div class="col-span-12 lg:col-span-9 overflow-x-hidden">
      <BlogHeader
        :title="data.title"
        :image="data.image"
        :alt="data.alt"
        :updatedAt="data.updatedAt"
        :description="data.description"
      />

      <BlogToc class="lg:hidden" />

      <div
        class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-base md:prose-lg prose-h1:no-underline max-w-7xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg"
      >
        <ContentRenderer v-if="data" :value="data">
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </div>
    </div>

    <BlogToc
      :defaultOpen="true"
      class="hidden lg:block lg:col-span-3 lg:justify-self-end sticky top-32 h-96"
    />
  </div>
</template>

<script setup>
import { metaFromNuxtContent } from "~/utils/sn-utils-meta";
const { path } = useRoute();

const { data, error } = await useAsyncData(`blog-post-${path}`, () =>
  queryContent(path).findOne()
);

if (error.value) {
  console.error("TODO 404 redirect. Current path:", path);
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
    fatal: true,
  });
}

useHead(metaFromNuxtContent(data.value));

// Generate OG Image
// defineOgImageComponent('Test', {
//   headline: 'Greetings 👋',
//   title: data.value.title || '',
//   description: data.value.description || '',
//   link: data.value.ogImage,

// })
</script>
