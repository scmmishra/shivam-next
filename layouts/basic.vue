<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
import Footer from "~/components/Footer.vue";

export default {
  name: "Default",
  components: { Footer },
  head() {
    return {
      bodyAttrs: {
        class: 'bg-gray-50'
      }
    }
  }
};
</script>
