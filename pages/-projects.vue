<template>
  <div>
    <section>
      <div class="max-w-4xl px-4 py-12 mx-auto space-y-5 md:px-0">
        <header class="backdrop-blur">
          <div class="max-w-4xl px-4 py-24 mx-auto md:px-0">
            <h1 class="text-4xl font-black text-gray-800 sm:text-5xl">
              Projects I've worked on
            </h1>
            <p class="max-w-2xl mt-4 text-gray-700">
              Over the past few years I've worked on numerous projects, here are
              a few that stand out. I'll keep updating this list with new
              projects, you'll hear about them first on my blog or on
              <a
                class="text-gray-900 underline hover:underline sm:no-underline"
                href="https://twitter.com/scmmishra"
                target="_blank"
                rel="”noreferrer"
                noopener”
                alt="twitter"
                >twitter</a
              >.
            </p>
          </div>
        </header>
        <div class="grid grid-cols-1 gap-4">
          <ProjectCard
            v-for="p in projects"
            :key="p.slug"
            v-bind="p"
            :showExcerpt="true"
          ></ProjectCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectCard from "~/components/ProjectCard.vue";
import BlogCard from "~/components/BlogCard.vue";

export default {
  layout: "basic",
  components: { ProjectCard, BlogCard },
  async asyncData({ $content }) {
    const projects = await $content("project").sortBy("title").fetch();
    return { projects };
  },
};
</script>
