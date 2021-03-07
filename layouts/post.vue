<template>
  <div>
    <div
      class="text-sm max-w-4xl mx-auto pt-12 flex items-center space-x-2 text-gray-400 hover:underline px-4 sm:px-0"
    >
      <nuxt-link :to="'/'">
        Back to All Articles
      </nuxt-link>
    </div>
    <Nuxt />
    <Signup title="Quality posts in your inbox" :verbose="true"></Signup>
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
        class: "bg-white",
      },
    };
  },
};
</script>
