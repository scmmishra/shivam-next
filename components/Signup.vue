<template>
  <section
    class="max-w-4xl px-4 py-12 pb-24 mx-auto space-y-5 transform md:px-0 -rotate-1"
  >
    <div
      class="p-8 space-y-4 bg-white border border-gray-100 shadow-lg sm:p-16 rounded-xl sm:rounded-3xl"
    >
      <div class="prose prose-xs max-w-none">
        <h1 class="text-2xl font-bold">📫&nbsp;&nbsp;{{ title }}</h1>
        <p class="max-w-2xl text-gray-700">
          I'll send an email only when I publish something on my blog, which is
          usually once month at best. So don't worry about spam. I use
          <a
            class="text-gray-900 hover:underline"
            href="https://buttondown.email"
            >Buttondown</a
          >
          to host this newsletter, It's trusted by many for it's privacy
          practices, you can read more
          <a
            class="text-gray-900 hover:underline"
            href="https://buttondown.email/features/privacy"
            >here</a
          >.
        </p>
        <div v-if="verbose" class="hidden md:block">
          <h3>Things I generally write about</h3>
          <ul class="text-xs">
            <li>Learnings from building Vue and Nuxt Apps</li>
            <li>UI and UX nuances I notice around the web</li>
            <li>My personal projects like charts and graphique</li>
          </ul>
        </div>
        <p class="max-w-2xl text-gray-700">
          If you're interested, drop your email below
        </p>
      </div>
      <div>
        <label class="sr-only">Enter your email here</label>
        <div
          class="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0"
        >
          <input
            aria-label="email"
            type="text"
            placeholder="Your email address"
            class="flex-grow w-full px-3 py-2 bg-gray-100 rounded-md outline-none"
          />
          <button
            class="block w-full py-2 text-white bg-gray-700 rounded-md sm:w-64 hover:bg-gray-800"
          >
            Beam Me Up!
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Signup",
  props: {
    title: {
      type: String,
      default: 'Subscribe'
    },
    verbose: {
      type: Boolean,
      default: false,
    }
  }
};
</script>
