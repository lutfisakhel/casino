<template>
  <main class="container max-w-7xl mx-auto text-zinc-600 pt-4 md:pt-10 mb-12">
    <ArchiveHero />

    <div class="px-6 lg:px-8">
      <input v-model="searchTest" placeholder="Search" type="text"
        class="block w-full bg-[#F1F2F4] dark:bg-slate-900 dark:placeholder-zinc-500 text-zinc-300  rounded-md border-gray-300 dark:border-gray-800 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
    </div>

    <div class="space-y-5 my-5 px-6 lg:px-8">
      <template v-for="post in paginatedData" :key="post.title">
        <ArchiveCard :path="post._path" :title="post.title" :updatedAt="post.updatedAt" :description="post.description"
          :image="post.image" :alt="post.alt" :og-image="post.ogImage" />
      </template>

      <ArchiveCard v-if="paginatedData.length <= 0" title="No Post Found" image="/not-found.jpg" />
    </div>

    <div class="flex justify-center items-center space-x-6 ">
      <button :disabled="pageNumber <= 1" @click="onPreviousPageClick">
        <Icon name="mdi:code-less-than" size="30" :class="{ 'text-sky-700 dark:text-sky-400': pageNumber > 1 }" />
      </button>
      <p>{{ pageNumber }} / {{ totalPage }}</p>
      <button :disabled="pageNumber >= totalPage" @click="onNextPageClick">
        <Icon name="mdi:code-greater-than" size="30"
          :class="{ 'text-sky-700 dark:text-sky-400': pageNumber < totalPage }" />
      </button>
    </div>
  </main>
</template>

<script setup>
const { data } = await useAsyncData('home',
  () => queryContent().where({ hide: { $ne: true } }).sort({ updatedAt: -1 }).find()
)

const elementPerPage = ref(5)
const pageNumber = ref(1)
const searchTest = ref('')

// TODO use https://content.nuxt.com/composables/search-content#searchcontent
const searchData = computed(() => {
  return data.value.filter((data) => {
    const lowerTitle = data.title.toLocaleLowerCase()
    if (lowerTitle.search(searchTest.value) !== -1)
      return true
    else return false
  }) || []
})

const paginatedData = computed(() => {
  return searchData.value.filter((data, idx) => {
    const startInd = ((pageNumber.value - 1) * elementPerPage.value)
    const endInd = (pageNumber.value * elementPerPage.value) - 1

    if (idx >= startInd && idx <= endInd)
      return true
    else return false
  }) || []
})

function onPreviousPageClick() {
  if (pageNumber.value > 1)
    pageNumber.value -= 1
}

const totalPage = computed(() => {
  const ttlContent = searchData.value.length || 0
  const totalPage = Math.ceil(ttlContent / elementPerPage.value)
  return totalPage
})

function onNextPageClick() {
  if (pageNumber.value < totalPage.value)
    pageNumber.value += 1
}

useHead({
  title: 'Archive',
  meta: [
    {
      name: 'description',
      content: 'Here you will find all the blog posts I have written & published on this site.',
    },
  ],
})

// Generate OG Image
// const siteData = useSiteConfig()
// defineOgImage({
//   props: {
//     title: 'Archive',
//     description: 'Here you will find all the blog posts I have written & published on this site.',
//     siteName: siteData.url,
//   },
// })
</script>