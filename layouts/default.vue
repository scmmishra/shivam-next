<template>
  <div>
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
    <Signup></Signup>
    <Footer></Footer>
  </div>
</template>
<script>
import Signup from "~/components/Signup.vue";
import Footer from "~/components/Footer.vue";

export default {
  name: "Default",
  components: { Signup, Footer },
  head() {
    return {
      bodyAttrs: {
        class: 'bg-gray-50'
      }
    }
  }
};
</script>
