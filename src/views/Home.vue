<template>
  <div class="home">
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  created() {
    this.$store.dispatch('fetchHotels');
  },
};
</script>
