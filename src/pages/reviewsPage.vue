<template>
  <div>
    <Navbar />
    <Feedbacks />
  </div>
</template>

<script>
import Feedbacks from "../components/Feedbacks.vue";
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Feedbacks,
    Navbar,
  },
};
</script>
