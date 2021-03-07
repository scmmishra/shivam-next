<template>
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
</template>
<script>
import confetti from "canvas-confetti";

export default {
  name: "Footer",
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
