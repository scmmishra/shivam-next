<template>
  <div class="bg-gray-50">
    <header class="backdrop-blur">
      <div class="max-w-4xl px-4 py-24 mx-auto md:px-0">
        <h1 class="text-4xl font-black text-gray-800 sm:text-5xl">
          Shivam Mishra
        </h1>
        <p class="max-w-2xl mt-4 text-gray-700">
          Front End engineering at
          <a
            class="text-gray-900 underline hover:underline sm:no-underline"
            href="https://deepsource.io"
            >Deepsource</a
          >, focusing on Vue, Nuxt, TypeScript with a pinch of GraphQL. This
          page has a list of my projects and my writings. You can find me on
          twitter
          <a
            class="text-gray-900 underline hover:underline sm:no-underline"
            href="https://twitter.com/scmmishra"
            >@scmmishra</a
          >
          and on
          <a
            class="text-gray-900 underline hover:underline sm:no-underline"
            href="https://github.com/scmmishra"
            >GitHub</a
          >
        </p>
      </div>
    </header>
    <Nuxt />
    <signup></signup>
    <footer>
      <div class="max-w-4xl px-4 py-24 mx-auto space-y-5 md:px-0">
        <div>
          <h2 class="text-2xl font-bold">You've reached the footer.</h2>
          <p class="max-w-2xl text-gray-700">
            Thanks for scrolling this far.
            <span
              class="text-gray-900 underline hover:underline sm:no-underline"
              @click="fire"
              >Here's some confetti for you</span
            >
          </p>
        </div>
        <div class="flex space-x-5 font-bold text-gray-600">
          <a href="/projects">Projects</a>
          <a href="/articles">Articles</a>
          <a href="https://twitter.com/scmmishra">Twitter</a>
          <a href="https://github.com/scmmishra">GitHub</a>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import confetti from "canvas-confetti";
import Signup from "~/components/Signup.vue";

export default {
  name: "Default",
  components: { Signup },
  methods: {
    fire() {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    },
  },
};
</script>
