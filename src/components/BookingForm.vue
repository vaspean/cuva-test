<template>
  <form action="" class="booking z-depth-1">
    <div v-if="!isSent" class="form__content">
      <p>Забронировать:</p>
      <input placeholder="Адрес" type="text" name="" id="" v-model="address">
      <input placeholder="Имя" type="text" name="" id="" v-model="name">
      <input placeholder="Телефон" type="tel" name="" id="" v-model="telephone">
      <button type="submit" @click.prevent="book(hotelId)">Отправить</button>
    </div>
    <div v-else class="thanks_message">
      <p>Спасибо! Отель забронирован.</p>
      <img src="../assets/submit.svg" alt="">
    </div>
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
      isSent: false,
    };
  },
  methods: {
    book(id) {
      if (this.address && this.name && this.telephone) {
        this.isSent = !this.isSent;
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

.thanks_message {
  text-align: center;
  img {
    width: 100px;
    height: 100px;
  }
}

@media (max-width: 1200px) {
  .booking {
    width: 100%;
  }
}

</style>
