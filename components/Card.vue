<template>
  <a
    :href="link"
    class="flex flex-col justify-between px-4 py-2 transition-shadow duration-150 rounded-lg shadow-sm shadow cursor-pointer hover:shadow-md"
  >
    <div>
      <h3 class="text-xl font-bold">{{ title }}</h3>
      <p class="text-gray-700 max-w-2xl">
        {{ subtitle }}
      </p>
    </div>
    <div class="mt-4 space-x-1">
      <span
        v-for="tag in tags"
        :key="tag"
        :class="`${getColor(tag)} rounded text-sm font-semibold px-2 py-1`"
        >{{ tag }}</span
      >
      <span v-if="date" class="text-gray-500 uppercase text-xs font-bold">{{
        date
      }}</span>
    </div>
  </a>
</template>
<script>
const colors = {
  python: 'bg-blue-700 text-blue-300',
  javascript: 'bg-yellow-300 text-yellow-700',
  vue: 'bg-green-300 text-green-700',
  nuxt: 'bg-green-200 text-green-600',
}
export default {
  name: 'ProjectCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
    },
    tags: {
      type: Array,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
  },
  methods: {
    getColor(tag) {
      return colors[tag.toLowerCase()]
    },
  },
}
</script>
