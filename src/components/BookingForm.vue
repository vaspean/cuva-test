<template>
  <form action="" class="booking">
    <p>Забронировать:</p>
    <input placeholder="Адрес" type="text" name="" id="" v-model="address">
    <input placeholder="Имя" type="text" name="" id="" v-model="name">
    <input placeholder="Телефон" type="tel" name="" id="" v-model="telephone">
    <button type="submit" @click.prevent="book(hotelId)">Отправить</button>
  </form>
</template>

<script>
export default {
  props: ['hotelId'],
  data() {
    return {
      address: '',
      name: '',
      telephone: '',
    };
  },
  methods: {
    book(id) {
      if (this.address && this.name && this.telephone) {
        console.log({
          id, address: this.address, name: this.name, telephone: this.telephone,
        });
      } else {
        alert('Пожалуйста, заполните все поля');
      }
    },
  },
};
</script>

<style lang="scss">

.booking {
  @include content-default;
  margin: 20px auto;
  width: 60%;

  p {
    margin: 0;
    font-size: 22px;
    font-weight: 800;
  }

  button {
    margin: 15px 0;
    border-radius: 10px;
    height: 40px;
    width: 100%;
    background-color: #151515;
    color: white;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }
  }
}

@media (max-width: 1200px) {
  .booking {
    width: 100%;
  }
}

</style>
