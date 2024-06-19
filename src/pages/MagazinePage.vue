<template>
  <div>
    <Navbar />
    <Magazine />
  </div>
</template>

<script>
import Magazine from "../components/Magazine.vue";
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Magazine,
    Navbar,
  },
};
</script>
