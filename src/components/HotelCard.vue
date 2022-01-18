<template>
  <div class="hotel col s12 m6 l4 xl3">
    <router-link :to="{ path: `/hotel/${hotel.id}`}" tag="div"  class="hotel__content z-depth-1">
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
    // height: auto;
    // min-height: 400px;
    background-color: white;
    border-radius: 20px;
    // box-shadow: black;
    // border: 1px solid black;
    padding: 20px;

    &:hover {
      opacity: 0.7;
    }
  }

  &__name {
    height: 105px;
    overflow: hidden;
    font-size: 18px;
    font-weight: 700;
  }

  &__description {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}

</style>
