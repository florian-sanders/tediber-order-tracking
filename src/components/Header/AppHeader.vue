<template>
  <header class="header" role="banner">
    <app-menu />
    <img class="header__logo-text" :src="logoText" alt="Tediber" width="90">
    <app-cart />
  </header>
</template>

<script>
import logoText from '@/assets/logo-tediber-text.svg';

import AppMenu from './AppMenu.vue';
import AppCart from './AppCart.vue';

export default {
  name: 'AppHeader',
  data() {
    return {
      logoText,
    };
  },
  components: {
    AppMenu,
    AppCart,
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
