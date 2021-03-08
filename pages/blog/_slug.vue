<template>
  <div class="max-w-4xl pt-12 mx-auto px-4 sm:px-0">
    <div class="border-b border-gray-300 pt-12 pb-8">
      <div class="prose-sm prose sm:prose lg:prose-md">
        <div class="md:flex md:space-x-4 mb-2">
          <div v-if="article.createdAt" class="text-xs font-bold text-gray-400 uppercase">
            Published On {{ created }}
          </div>
          <div v-if="article.readTime" class="text-xs font-bold text-gray-400 uppercase">
            READ TIME: {{ article.readTime }}
          </div>
        </div>
        <h1>{{ article.title }}</h1>
      </div>
    </div>
    <div class="md:relative md:flex space-x-4">
      <article class="max-w-2xl prose-sm prose sm:prose lg:prose-md">
        <nuxt-content :document="article" />
      </article>
      <aside class="hidden md:block">
        <div class="md:sticky space-y-4 text-sm top-12 mt-2">
          <h4 class="font-bold text-gray-500 uppercase mt-12">
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
