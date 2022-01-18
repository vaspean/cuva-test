<template>
  <div class="hotel_page">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: 123,
    };
  },
  created() {
    console.log(this.$route.params.id);
  },
};
</script>
