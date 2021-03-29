<template>
  <div>
    <section class="max-w-4xl px-4 py-12 mx-auto space-y-5 md:px-0 min-h-96">
      <header class="backdrop-blur">
        <div class="max-w-4xl px-4 py-24 mx-auto md:px-0">
          <h1 class="text-4xl font-black text-gray-800 sm:text-5xl">
            Heya, sad to see you go!
          </h1>
          <p class="max-w-2xl mt-4 text-gray-700">
            I'm really grateful that you subscribed in the first place.
            If you're still interested in keeping touch, you can follow me on <a href="https://twitter.com/scmmishra" target="_blank" ref="noopener noreferrer">twitter</a>. In case you have any feedback for me, just send an email to hey[at]shivam.dev
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
