<template>
  <div>
    <section>
      <div class="max-w-4xl px-4 py-12 mx-auto space-y-5 md:px-0">
        <div class="flex flex-row items-center">
          <h2 class="text-4xl font-black text-gray-300">Work</h2>
        </div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ProjectCard
            v-for="p in projects"
            :key="p.title"
            v-bind="p"
          ></ProjectCard>
        </div>
      </div>
    </section>
    <section>
      <div class="max-w-4xl px-4 py-12 mx-auto space-y-5 md:px-0">
        <div class="flex flex-row items-center">
          <h2 class="text-4xl font-black text-gray-300">Writings</h2>
        </div>
        <div class="grid grid-cols-1 gap-4">
          <BlogCard
            v-for="blog in blogs"
            v-bind="blog"
            :key="blog.slub"
          ></BlogCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectCard from "~/components/ProjectCard.vue";
import BlogCard from "~/components/BlogCard.vue";

export default {
  components: { ProjectCard, BlogCard },
  async asyncData({ $content }) {
    const blogs = await $content('blog').where({ featured: true }).fetch()
    const projects = await $content('project').sortBy('title').fetch()
    return { blogs, projects };
  }
};
</script>
