<template>
  <nuxt-link
    :to="path"
    class="overflow-hidden duration-700 transform bg-white border border-gray-100 shadow-xl cursor-pointer rounded-xl sm:rounded-3xl hover:-translate-y-1"
  >
    <div class="relative mx-auto overflow-hidden max-h-64">
      <div
        class="absolute inset-0 transition-opacity hover:opacity-60 opacity-30 bg-gradient-to-t from-white to-transparent"
      ></div>
      <div
        class="px-10 pt-10 pb-4 space-y-4 text-base leading-6 text-gray-700 sm:px-16 sm:pt-16 sm:pb-8 sm:text-lg sm:leading-7"
      >
        <div>
          <img v-if="logo" :src="logo" class="w-auto h-8 mb-2" />
          <span v-if="date" class="text-xs font-bold text-gray-500 uppercase">{{
            date
          }}</span>
          <div class="max-w-xl prose prose-xs">
            <h1 class="mt-0">{{ title }}</h1>
            <!-- <h2>Vue Directives</h2> -->
            <p>
              {{ subtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  name: "ProjectCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
    path: {
      type: String,
      required: false,
    },
  },
};
</script>
