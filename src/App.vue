<template>
  <div id="app">
    <Header/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'app',
  components: {
    Header,
  },
  async mounted() {
    await this.$store.dispatch('fetchHotels');
    this.hotels = this.$store.state.hotels;
  },
};
</script>

<style lang="scss">
#app {
  color: $main-text-color;
}
</style>
