<template>
  <div>
    <Nuxt />
    <Signup title="Quality posts in your inbox" :verbose="true"></Signup>
    <Footer></Footer>
  </div>
</template>
<script>
import Signup from "~/components/Signup.vue";
import Footer from "~/components/Footer.vue";

export default {
  name: "Post",
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
