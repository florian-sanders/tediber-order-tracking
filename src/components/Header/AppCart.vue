<template>
  <button class="cart" type="button" aria-expanded="false">
    <img class="cart__img" :src="cartImg" alt="Mon Panier" height="70" width="70" >
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

<style lang="scss" scoped>
.cart {
  height: 70%;
  &__img {
    width: auto;
    height: 100%;
  }
}
</style>
