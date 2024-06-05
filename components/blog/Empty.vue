<template>
  <button type="button" class="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click="$router.push('/articles')">
    <Icon name="material-symbols-light:article-outline" size="1em" class="mx-auto h-12 w-12 text-gray-400" />
    <span class="mt-2 block text-sm font-semibold text-gray-900">No posts found. See all articles.</span>
  </button>
</template>

<script setup>

</script>