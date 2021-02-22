<template>
  <div>
    <header class="bg-gray-100 border-b border-gray-200">
      <div class="max-w-4xl px-2 py-12 mx-auto md:px-0">
        <h1 class="text-3xl font-bold">Shivam Mishra</h1>
        <p class="max-w-2xl text-gray-700">
          Front End engineering at
          <a class="text-gray-900 hover:underline" href="https://deepsource.io"
            >Deepsource</a
          >, focusing on Vue, Nuxt, TypeScript with a pinch of GraphQL. This
          page has a list of my projects and my writings. You can find me on
          twitter
          <a
            class="text-gray-900 hover:underline"
            href="https://twitter.com/scmmishra"
            >@scmmishra</a
          >
          and on
          <a
            class="text-gray-900 hover:underline"
            href="https://github.com/scmmishra"
            >GitHub</a
          >
        </p>
      </div>
    </header>
    <section>
      <div class="max-w-4xl px-2 py-12 mx-auto space-y-5 md:px-0">
        <div class="flex flex-row items-center justify-between">
          <h2 class="text-2xl font-bold">Work</h2>
          <a
            class="flex items-center space-x-1 text-gray-700 hover:underline"
            href="/project"
          >
            <span>All Projects</span>
            <svg
              class="inline-flex w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div class="grid grid-cols-3 gap-3">
          <card v-for="p in projects" :key="p.title" v-bind="p"></card>
        </div>
      </div>
    </section>
    <section>
      <div class="max-w-4xl px-2 py-12 mx-auto space-y-5 md:px-0">
        <div class="flex flex-row items-center justify-between">
          <h2 class="text-2xl font-bold">Writings</h2>
          <a
            class="flex items-center space-x-1 text-gray-700 hover:underline"
            href="/project"
          >
            <span>All Articles</span>
            <svg
              class="inline-flex w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div class="grid grid-cols-1 gap-3">
          <card v-for="w in writings" :key="w.title" v-bind="w"></card>
        </div>
      </div>
    </section>
    <section>
      <div class="max-w-4xl px-2 py-12 pb-24 mx-auto space-y-5 md:px-0">
        <div>
          <h2 class="text-2xl font-bold">Subscribe</h2>
          <p class="max-w-2xl text-gray-700">
            I'll send an email only when I publish something on my blog, which
            is usually once month at best. So don't worry about spam. I use
            <a
              class="text-gray-900 hover:underline"
              href="https://buttondown.email"
              >Buttondown</a
            >
            to host this newsletter, It's trusted my many for it's privacy
            practices, you can read more
            <a
              class="text-gray-900 hover:underline"
              href="https://buttondown.email/features/privacy"
              >here</a
            >.
          </p>
          <p class="max-w-2xl text-gray-700">
            If you're convinced, drop your email below
          </p>
        </div>
        <div>
          <label class="sr-only">Enter your email here</label>
          <input
            aria-label="email"
            type="text"
            placeholder="Your email address"
            class="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md outline-none"
          />
        </div>
      </div>
    </section>
    <footer class="bg-gray-100 border-t border-gray-200">
      <div class="max-w-4xl px-2 py-24 mx-auto space-y-5 md:px-0">
        <div>
          <h2 class="text-2xl font-bold">You've reached the footer.</h2>
          <p class="max-w-2xl text-gray-700">
            Thanks for scrolling this far.
            <span class="cursor-pointer hover:text-gray-900" @click="fire"
              >Here's some confetti for you</span
            >
          </p>
        </div>
        <div class="flex space-x-5 text-gray-600 font-bold">
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
import Card from '~/components/Card.vue'
import confetti from 'canvas-confetti'

export default {
  components: { Card },
  data() {
    return {
      projects: [
        {
          title: 'Frappe Charts',
          subtitle:
            'Frappe Charts is a simple lightweight and modern SVG charts for the web with zero dependencies.',
        },
        {
          title: 'Frappe Framework',
          subtitle:
            'Web Framework for Rapid App Development. Metadata driven full stack framework in Python and Javascript.',
        },
        {
          title: 'Project Panoptic',
          subtitle:
            'Tracker, to keep Facial recognition systems in India in check. Built for IFF.',
        },
      ],
      writings: [
        {
          title: 'Detecting Outside Clicks Element',
          subtitle: `A couple of days ago, I was building a dropdown menu component.
          I wanted the dropdown menu to close whenever we clicked outside the element.
          This is an ideal scenario where we could use a custom directive.`,
          date: '24th February, 2021',
        },
        {
          title: 'Building Graphique',
          subtitle:
            'Web Framework for Rapid App Development. Metadata driven full stack framework in Python and Javascript.',
          date: '18th March, 2021',
        },
      ],
    }
  },
  methods: {
    fire() {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
    },
  },
}
</script>

<style></style>
