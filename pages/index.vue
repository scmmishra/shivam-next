<template>
  <div>
    <section>
      <div class="max-w-4xl px-4 py-12 mx-auto space-y-5 md:px-0">
        <div class="flex flex-row items-center">
          <h2 class="text-4xl font-black text-gray-300">Work</h2>
        </div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FrostedCard
            v-for="p in projects"
            :key="p.title"
            v-bind="p"
          ></FrostedCard>
        </div>
      </div>
    </section>
    <section>
      <div class="max-w-4xl px-4 py-12 mx-auto space-y-5 md:px-0">
        <div class="flex flex-row items-center">
          <h2 class="text-4xl font-black text-gray-300">Writings</h2>
        </div>
        <div class="grid grid-cols-1 gap-4">
          <FrostedCard
            v-for="w in writings"
            :key="w.title"
            v-bind="w"
          ></FrostedCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import FrostedCard from "~/components/FrostedCard.vue";

export default {
  components: { FrostedCard },
  data() {
    return {
      projects: [
        {
          title: "Frappe Charts",
          link: "https://github.com/frappe/charts",
          logo: "charts.svg",
          subtitle:
            "Frappe Charts is a simple lightweight and modern SVG charts for the web with zero dependencies.",
        },
        {
          title: "Frappe Framework",
          link: "https://github.com/frappe/frappe",
          logo: "framework.svg",
          subtitle:
            "Web Framework for Rapid App Development. Metadata driven full stack framework in Python and Javascript.",
        },
        {
          title: "Project Panoptic",
          link: "https://panoptic.in",
          logo: "panoptic.svg",
          subtitle:
            "Tracker, to keep Facial recognition systems in India in check. Built for IFF.",
        },
        {
          title: "TinyJS",
          link: "https://tinyjs.email",
          logo: "tinyjs.svg",
          subtitle:
            "A weekly newsletter with the top 3 stories from the JavaScript world. Short and Sweet. No Spam.",
        },
      ],
      writings: [
        {
          title: "Detecting Outside Clicks Element",
          subtitle: `When building apps, the primary form of code reuse and abstraction that Vue has to offer is components - however there may be cases where you may need some low-level DOM access on plain elements, and this is where custom directives should be used. It’s important to note that directives are meant to encapsulate DOM manipulations only, while components are self-contained units that have their own view and data logic. `,
          date: "24th February, 2021",
        },
        {
          title: "Building Graphique",
          subtitle:
            "Graphique (gra·fik) is a modern take on Frappe Charts, it focuses on performance, UX and providers a cleaner API to enable new interactions with the library. The inital version is set to have only line and bar charts, soon this will be expanded to other types. Written in TypeScript, this library has no external dependencies that ships except for the library itself, drastically reducing load and parsing time in the browser.",
          date: "18th March, 2021",
        },
      ],
    };
  },
};
</script>

<style></style>
