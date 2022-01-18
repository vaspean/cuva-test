<template>
  <div class="hotel col s12 m6 l6 xl4">
    <router-link :to="{ path: `/hotel/${hotel.id}`}" tag="div"  class="hotel__content z-depth-1">
      <img class="hotel__img" src="../assets/img/hotel.jpg" alt="Отель">
      <p class="hotel__name">{{hotel.title}}</p>
      <p class="hotel__description">{{hotel.body}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['hotel'],
  data() {
    return {
      test: 123,
    };
  },
};
</script>

<style lang="scss">
.hotel {
  margin-bottom: 20px;
  cursor: pointer;

  &__content {
    @include content-default;

    &:hover {
      opacity: 0.7;
    }
  }

  &__img {
    height: 100%;
    width: 100%;
  }

  &__name {
    height: 105px;
    overflow: hidden;
    font-size: 22px;
    font-weight: 700;
  }

  &__description {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}

</style>
