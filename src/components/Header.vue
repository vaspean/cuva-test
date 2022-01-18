<template>
  <header class="header">
    <div class="header__container container">
      <router-link to="/">
        <img class="header__logo" src="../assets/img/cuva_logo_white.png" alt="">
      </router-link>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  background: #151515;
  height: 60px;

  &__container {
    height: inherit;
  }

  &__logo {
    padding: 10px 0;
    height: 100%;
  }
}
</style>
