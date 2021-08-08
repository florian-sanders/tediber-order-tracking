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
  </nav>
</template>

<script>
export default {
  name: 'AppMenu',
};
</script>

<style lang="scss">
@import '@/scss/_variables.scss';

.menu {
  &__toggle-btn {
    display: block;

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
}
</style>
