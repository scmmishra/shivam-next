<template>
  <div class="md:relative md:flex max-w-4xl py-12 mx-auto space-x-4 px-4 sm:px-0">
    <article class="max-w-2xl prose-sm prose sm:prose lg:prose-md">
      <div class="md:flex md:space-x-4 mb-2">
        <div v-if="article.createdAt" class="text-xs font-bold text-gray-400 uppercase">
          Published On {{ created }}
        </div>
        <div v-if="article.readTime" class="text-xs font-bold text-gray-400 uppercase">
          READ TIME: {{ article.readTime }}
        </div>
      </div>
      <h1>{{ article.title }}</h1>
      <nuxt-content :document="article" />
    </article>
    <aside class="py-24 hidden md:block">
      <div class="md:sticky top-12 space-y-4 text-sm">
        <h4 class="font-bold text-gray-500 uppercase">
          Table of Contents
        </h4>
        <ul class="space-y-2">
          <li
            v-for="link of article.toc"
            :key="link.id"
            class="block text-gray-400 hover:text-gray-800"
            :class="{
              'ml-0': link.depth == 1,
              'ml-2': link.depth == 2,
              'ml-6': link.depth == 3,
              'ml-10': link.depth == 4,
            }"
          >
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  layout: "post",
  async asyncData({ $content, params }) {
    const article = await $content(`blog/${params.slug}`).fetch();

    return { article };
  },
  computed: {
    created() {
      return dayjs(this.article.createdAt).format('D MMM, YYYY')
    }
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
