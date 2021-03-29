<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-0">
    <div class="max-w-2xl mx-auto py-10 md:py-16 xl:py-20 text-center">
      <nuxt-link class="text-gray-400 hover:underline text-center" to="/">shivam.dev</nuxt-link>
      <h1 class="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-0 ">{{ project.title }}</h1>
      <p class="max-w-lg mx-auto text-center mt-4 mb-2 text-gray-500 text-lg md:text-xl font-serif">{{ project.subtitle }}</p>
      <div class="text-center space-x-3 text-gray-400">
        <a class="text-gray-400 hover:underline" v-if="project.github" :href="project.github">GitHub</a>
        <a class="text-gray-400 hover:underline" v-if="project.projectHome" :href="project.projectHome">Project Home</a>
        <a class="text-gray-400 hover:underline" v-if="project.documentation" :href="project.documentation">Documentation</a>
        <span v-if="project.license">License: <span class="text-gray-500">{{ project.license }}</span> </span>
      </div>
    </div>
    <div class="prose lg:prose-md max-w-none">
      <img v-if="project.hero" class="rounded-md shadow-md w-full" alt="frappe-charts" :src="`/${project.hero}`"/>
      <div class="max-w-3xl mx-auto">
        <nuxt-content :document="project" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "project",
  async asyncData({ $content, params }) {
    const project = await $content(`project/${params.name}`).fetch();

    return { project };
  },
  head() {
    return {
      title: this.project.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.project.subtitle,
        },
        // Open Graph
        { hid: "og:title", property: "og:title", content: this.project.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.project.subtitle,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `/${this.project.hero}`,
        },
        // Twitter Card
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.project.title,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: `/${this.project.hero}`,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.project.subtitle,
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: 'summary_large_image',
        },
        {
          hid: "twitter:site",
          name: "twitter:site",
          content: '@scmmishra',
        }
      ],
    };
  },
};
</script>
