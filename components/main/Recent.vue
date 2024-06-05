<template>
  <div class="pb-10 px-6 lg:px-8">
    <div class="flex flex-row items-center space-x-3 pt-5 pb-3">
      <Icon
        name="mdi:star-three-points-outline"
        size="2em"
        class="text-black dark:text-zinc-300"
      />
      <h2 class="text-4xl font-semibold text-black dark:text-zinc-300">
        Recent Post
      </h2>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 md:gap-x-2 lg:grid-cols-3 lg:gap-x-4"
    >
      <template v-for="post in data" :key="post.title">
        <BlogCard
          :path="post._path"
          :title="post.title"
          :updatedAt="post.updatedAt"
          :description="post.description"
          :image="post.image"
          :alt="post.alt"
          :og-image="post.ogImage"
        />
      </template>
      <template v-if="data?.length === 0">
        <BlogEmpty />
      </template>
    </div>
  </div>
</template>

<script setup>
// Get Last 6 Publish Post from the content/blog directory
const { data } = await useAsyncData("recent-post", () =>
  queryContent()
    .where({ hide: { $ne: true } })
    .limit(3)
    .sort({ updatedAt: -1 })
    .find()
);
</script>
