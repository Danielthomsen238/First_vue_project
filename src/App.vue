
<script>
import Navbar from "@/components/Navbar.vue"
import Error from "@/components/Error.vue"

export default {
  components: {
    Navbar, // Register Navbar for use in the template
    Error,

  },
};
</script>

<template>
  <Navbar />
  <Error />
  <router-view></router-view>
</template>

<style scoped>
@media (min-width: 1024px) {}
</style>
