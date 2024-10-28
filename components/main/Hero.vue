<template>
  <div class="px-6 mx-auto text-center md:text-left lg:px-8">
    <div
      class="grid items-center grid-cols-1 min-h-[80vh] md:min-h-0 md:grid-cols-5"
    >
      <div class="md:col-span-3">
        <h1
          class="my-4 mt-10 mb-10 text-6xl font-black leading-tight text-gray-900 min-h-6 md:min-h-40 dark:text-zinc-200 md:my-10"
        >
          <span> Become an AI </span>
          <VueWriter
            v-if="showClientOnly"
            :array="['Video Editor 🎥', 'Avatar expert 🧑🏻‍💼', 'Video Creator ✨']"
            class="min-w-20"
          ></VueWriter>
          <span v-else>Video Creator ✨</span>
        </h1>
        <p
          class="text-xl font-medium text-justify text-wrap dark:text-zinc-100 md:text-2xl"
        >
          <strong>Empowering Your Creative Side:</strong> Unleash the Power of
          AI in Video and Audio Production for Faster, Superior Content
          Creation.
        </p>
      </div>

      <div class="pt-12 md:flex md:col-span-2 md:pt-0 md:items-start md:h-full">
        <NuxtImg
          src="/imgs/phonecasino.webp"
          alt="Hero Image"
          width="500"
          height="500"
          layout="responsive"
          placeholder
          loading="lazy"
          class=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const showClientOnly = ref(false);

onMounted(() => {
  if (process.client) {
    setTimeout(() => {
      showClientOnly.value = true;
    }, 3000);
  }
});
</script>
