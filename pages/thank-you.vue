<template>
  <div>
    <section class="max-w-4xl px-4 py-12 mx-auto space-y-5 md:px-0 min-h-96">
      <header class="backdrop-blur">
        <div class="max-w-4xl px-4 py-24 mx-auto md:px-0">
          <h1 class="text-4xl font-black text-gray-800 sm:text-5xl">
            Thank you for Subscribing
          </h1>
          <p class="max-w-2xl mt-4 text-gray-700">
            Over the past few years I've worked on numerous projects and I'm
            continuing to learn more. I'll be sharing updates about my projects
            and also any blogs I post. See you soon.
          </p>
        </div>
        <nuxt-link class="text-gray-400 hover:underline " to="/"
        >Back to shivam.dev </nuxt-link
      >
      </header>
    </section>
  </div>
</template>

<script>
export default {
  layout: "basic",
};
</script>
