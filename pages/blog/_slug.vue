<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-0">
    <div class="max-w-2xl mx-auto py-10 md:py-16 xl:py-20 text-center">
      <nuxt-link class="text-gray-400 hover:underline text-center" to="/"
        >shivam.dev</nuxt-link
      >
      <h1 class="text-xl md:text-4xl xl:text-5xl font-extrabold mb-0">
        {{ article.title }}
      </h1>
      <p
        class="max-w-lg mx-auto text-center mt-4 mb-2 text-gray-500 text-xl font-serif"
      >
        {{ article.subtitle }}
      </p>
      <div class="flex justify-center text-center space-x-3 text-gray-400">
        <span class="text-gray-400" v-if="article.createdAt"
          >Published On {{ created }}</span
        >
        <span class="text-gray-400" v-if="article.readTime">
          Read Time: {{ article.readTime }}
        </span>
      </div>
    </div>
    <div class="prose lg:prose-md max-w-none">
      <img
        v-if="article.hero"
        class="rounded-md shadow-md w-full"
        alt="frappe-charts"
        :src="`/${article.hero}`"
      />
      <div class="max-w-3xl mx-auto">
        <nuxt-content :document="article" />
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  layout: "post",
  async asyncData({ $content, params }) {
    const article = await $content(`blog/${params.slug}`).fetch();

    return { article };
  },
  computed: {
    created() {
      return dayjs(this.article.createdAt).format("D MMM, YYYY");
    },
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
        // Open Graph
        { hid: "og:title", property: "og:title", content: this.article.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.article.description,
        },
        // Twitter Card
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.article.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.article.description,
        },
      ],
    };
  },
};
</script>
