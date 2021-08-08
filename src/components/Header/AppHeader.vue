<template>
  <header class="header" role="banner">
    <app-menu />
    <a class="header__home-link" href="/">
      <img
        :src="logoText"
        alt="Tediber - Retour à l'accueil"
        width="64"
      />
    </a>
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
@import '@/scss/_mixins.scss';

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  margin-bottom: 1rem;
  box-shadow: $shadow-light;
  height: 3.375rem;

  @include breakpoint(desktop) {
    height: 5rem;
  }

  .header__home-link {
    height: 80%;

    & img {
      height: 100%;
      width: auto;
    }

    @include breakpoint(desktop) {
      order: -1;
    }
  }
}
</style>
