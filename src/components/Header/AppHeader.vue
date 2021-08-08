<template>
  <header class="header" role="banner">
    <app-menu />
    <img class="header__logo-text" :src="logoText" alt="Tediber" width="64" />
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
  box-shadow: $shadow-light;
  height: 3.375rem;

  @include breakpoint(desktop) {
    height: 5rem;
  }

  &__logo-text {
    width: auto;
    height: 80%;

    @include breakpoint(desktop) {
      order: -1;
    }
  }
}
</style>
