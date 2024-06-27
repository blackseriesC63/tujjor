<template>
  <div>
    <Navbar />
    <Mag />
  </div>
</template>

<script>
import Mag from "../components/Mag.vue";
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar,
    Mag,
  },
};
</script>
