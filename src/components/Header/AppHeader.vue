<template>
  <header class="header" role="banner">
    <Menu />
    <img class="header__logo-text" :src="logoText" alt="Tediber" width="90">
    <Cart />
  </header>
</template>

<script>
import logoText from '@/assets/logo-tediber-text.svg';

import Menu from './Menu.vue';
import Cart from './Cart.vue';

export default {
  name: 'AppHeader',
  data() {
    return {
      logoText,
    };
  },
  components: {
    Menu,
    Cart,
  },
};
</script>

<style lang="scss">
@import '@/scss/_variables.scss';

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem 1.5rem;
  box-shadow: $shadow;

  &__logo-text {
    max-height: 3.3rem;
  }
}
</style>
