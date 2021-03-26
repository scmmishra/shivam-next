<template>
  <div>
    <Nuxt />
    <Signup title="Let's stay in touch?"></Signup>
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
