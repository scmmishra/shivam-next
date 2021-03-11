<template>
  <div class="max-w-3xl mx-auto">
    <Nuxt />
    <Signup title="Wanna learn more about my projects?" :verbose="false"></Signup>
    <Footer></Footer>
  </div>
</template>
<script>
import Signup from "~/components/Signup.vue";
import Footer from "~/components/Footer.vue";

export default {
  name: "Project",
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
