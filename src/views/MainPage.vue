<template>
  <div class="main">
    <h1 class="h1_main">Все отели</h1>
    <ul class="hotels row">
      <HotelCard :hotel="hotel" v-for="hotel in hotels" :key="hotel.id"/>
    </ul>
  </div>
</template>

<script>
import HotelCard from '@/components/HotelCard.vue';

export default {
  name: 'MainPage',
  components: {
    HotelCard,
  },
  data() {
    return {
      hotels: [],
    };
  },
  async mounted() {
    await this.$store.dispatch('fetchHotels');
    this.hotels = this.$store.state.hotels;
  },
};
</script>

<style lang="scss">
.main {
  text-align: center;
}

.h1_main {
  font-weight: 800;
  margin-bottom: 50px;
}
</style>
