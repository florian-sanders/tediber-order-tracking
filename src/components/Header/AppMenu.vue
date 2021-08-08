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
  @include breakpoint(desktop) {
    flex-grow: 1;
  }

  &__toggle-btn {
    display: block;

    @include breakpoint(desktop) {
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
    text-align: center;

    &__dropdown-btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;

      &::after {
        content: '';
        width: 1rem;
        height: 1rem;
        margin-left: $gutter-small;
        background: url('~@/assets/dropdown-arrow.svg') no-repeat center right 0;
        background-size: 100%;
      }
    }

    @include breakpoint(desktop) {

      display: grid;
      grid-template-columns: 12.5% 12.5% 12.5% 2fr 1fr 1fr 1fr;
      grid-template-rows: 100%;
      grid-auto-columns: 1fr;
      grid-auto-flow: column;
      align-items: center;
      padding: 0 $gutter * 2;

      &__logo img {
        height: 3.8rem;
        width: auto;

        &:hover {
          animation: 0.5s linear 2 shake;
        }
      }
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(20deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-20deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
}
</style>
