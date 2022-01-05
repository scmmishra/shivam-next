<template>
  <footer>
    <div class="max-w-4xl px-4 py-24 mx-auto space-y-5 md:px-0">
      <div>
        <h2 class="text-2xl font-bold">You've reached the footer.</h2>
        <p class="max-w-2xl text-gray-700">
          Thanks for scrolling this far.
          <span
            class="text-gray-900 underline hover:underline sm:no-underline cursor-pointer"
            @click="fire"
            >Here's some confetti for you.</span
          >
          <br>P.S. My neighbour Hricha is the best.
        </p>
      </div>
      <div class="flex space-x-5 font-bold text-gray-600">
        <a href="https://twitter.com/scmmishra" target="_blank" ref="noopener noreferrer">Twitter</a>
        <a href="https://github.com/scmmishra" target="_blank" ref="noopener noreferrer">GitHub</a>
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
