<template>
  <div class="space-y-4">
    <a
      v-for="ref in references"
      :key="ref.link"
      :href="ref.link"
      target="_blank"
      class="cursor-pointer flex space-x-4 rounded-xl bg-gray-100 p-3"
    >
      <img v-if="ref.logo" :src="ref.logo" class="h-12 w-12" />
      <div class="ref-body">
        <div class="font-semibold">{{ ref.title }}</div>
        <div class="text-xs text-gray-400 overflow-ellipsis">
          {{ ref.description }}
        </div>
        <div class="text-xs text-gray-300">{{ ref.link }}</div>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: "ReferenceCard",
  props: ["references"],
};
</script>
<style scoped>
img {
  margin: 0 !important;
}

.ref-body {
  margin-top: -6px;
}
</style>
