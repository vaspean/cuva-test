<template>
  <div class="hotel_page">
    <router-link class="previous_page" to="/">← Назад</router-link>
      <div class="hotel_page__content row">
          <img class="hotel_page__img col s12 xl6" src="../assets/img/hotel.jpg" alt="Отель">
        <div class="hotel_page__info col s12 xl6">
          <p class="hotel_page__name">{{currentHotel.title}}</p>
          <p class="hotel_page__description">{{currentHotel.body}}</p>
        </div>
      </div>
    <BookingForm :hotelId="+this.$route.params.id"/>
  </div>
</template>

<script>
import BookingForm from '@/components/BookingForm.vue';

export default {
  components: {
    BookingForm,
  },
  computed: {
    currentHotel() {
      return this.$store.state.hotels.find((item) => item.id === +this.$route.params.id) || 'Загрузка';
    },
  },
};
</script>

<style lang="scss">
.hotel_page {
  padding-top: 20px;

  &__content {
    @include content-default;
    margin: 20px 0;
  }

  &__info {
    text-align: center;
  }

  &__name {
    font-size: 36px;
    font-weight: 800;
  }

  &__description {
    font-size: 20px;
  }
}

.previous_page {
  margin-top: 40px;
}
</style>
