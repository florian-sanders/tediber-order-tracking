<template>
  <nav class="menu" role="navigation" aria-label="principal">
    <button class="menu__toggle-btn" type="button">
      <span class="sr-only">Menu</span>
      <span class="menu__toggle-btn__stripes">
        <span />
        <span />
        <span />
      </span>
    </button>
    <ul class="menu__list">
      <li>
        <button class="menu__list__dropdown-btn" type="button">
          Nos produits
        </button>
      </li>
      <li><a href="/">Le concept</a></li>
      <li><a href="/">Avis</a></li>
      <li class="menu__list__logo">
        <a href="/" aria-hidden="true" tabindex="-1"
          ><img :src="tediberBearImg" width="50"
        /></a>
      </li>
      <li><a href="/">Pub TV</a></li>
      <li><a href="/">Mon Compte</a></li>
      <li><a href="/">Mag</a></li>
      <li><a href="/">Contactez-nous</a></li>
    </ul>
  </nav>
</template>

<script>
import tediberBearImg from '@/assets/logo-tediber-bear.svg';

export default {
  name: 'AppMenu',
  data() {
    return {
      tediberBearImg,
    };
  },
};
</script>

<style lang="scss">
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';

.menu {
  @include breakpoint(small-desktop) {
    flex-grow: 1;
  }

  &__toggle-btn {
    display: block;

    @include breakpoint(small-desktop) {
      display: none;
    }

    &__stripes {
      display: flex;
      flex-direction: column;
      width: 25px;

      span {
        background: $color-main;
        border-radius: 10px;
        height: 3px;
        margin: 3px 0;
        transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
      }

      span:nth-of-type(1) {
        width: 100%;
      }

      span:nth-of-type(2) {
        width: 100%;
      }

      span:nth-of-type(3) {
        width: 100%;
      }

      &--cross {
        span:nth-of-type(1) {
          transform-origin: bottom;
          transform: rotatez(45deg) translate(5px, 0px);
        }

        span:nth-of-type(2) {
          transform-origin: top;
          transform: rotatez(-45deg);
        }

        span:nth-of-type(3) {
          transform-origin: bottom;
          width: 50%;
          transform: translate(16px, -7px) rotatez(45deg);
        }
      }
    }
  }

  &__list {
    display: none;
    text-transform: uppercase;

    &__dropdown-btn {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &::after {
        content: '';
        width: 1rem;
        height: 1rem;
        margin-left: $gutter-small;
        background: url('~@/assets/dropdown-arrow.svg') no-repeat center right 0;
        background-size: 100%;
      }
    }

    @include breakpoint(small-desktop) {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      padding: 0;

      &__logo img {
        height: 3.8rem;
        width: auto;
      }
    }
  }
}
</style>
