<template>
  <nuxt-link :to="path" class="overflow-hidden duration-700 transform bg-white border border-gray-100 shadow-xl cursor-pointer rounded-xl sm:rounded-3xl hover:-translate-y-1">
    <div class="relative mx-auto overflow-hidden max-h-72">
      <div class="absolute inset-0 transition-opacity hover:opacity-60 opacity-10 bg-gradient-to-t from-white to-transparent"></div>
      <div class="px-10 pt-10 pb-4 space-y-4 text-base leading-6 text-gray-700 sm:px-16 sm:pt-16 sm:pb-8 sm:text-lg sm:leading-7">
        <div>
          <span v-if="created" class="text-xs font-bold text-gray-500 uppercase">{{ created }}</span>
          <div class="max-w-xl prose prose-xs">
            <h1 class="mt-0">{{ title }}</h1>
            <nuxt-content :document="{ body: excerpt }" />
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
import dayjs from "dayjs";

export default {
  name: "BlogCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    excerpt: {
      type: Object,
      required: true,
    },
    body: {
      type: Object,
      required: true,
    },
    createdAt: {
      type: String,
      required: false,
    },
    path: {
      type: String,
      required: false,
    },
  },
  computed: {
    created() {
      return dayjs(this.createdAt).format("D MMM, YYYY");
    },
  },
};
</script>
<style scoped>
.nuxt-content-container {
  z-index: -20;
}
</style>
