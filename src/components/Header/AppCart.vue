<template>
  <button type="button" aria-expanded="false">
    <img :src="cartImg" alt="Mon Panier" width="45">
  </button>
</template>

<script>
import cartImg from '@/assets/cart.svg';

export default {
  name: 'AppCart',
  data() {
    return {
      cartImg,
    };
  },
};
</script>

<style>

</style>
