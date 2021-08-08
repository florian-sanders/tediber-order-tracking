<template>
  <div class="product-card">
    <img class="product-card__img" :src="imgPath" alt="" width="200" />
    <div class="product-card__body">
      <h3 class="product-card__body__heading">{{ name }}</h3>
      <p class="product-card__body__price">{{ price }}&nbsp;€</p>
      <p>
        <span class="product-card__body__label">Taille&nbsp;:</span> {{ size }}
      </p>
      <p>
        <span class="product-card__body__label" aria-hidden="true">Qté</span>
        <span class="sr-only">Quantité</span>&nbsp;: {{ quantity }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderTrackingProduct',
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    imgPath: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';

.product-card {
  display: flex;
  padding: $gutter-small;
  margin-bottom: 1.3rem;
  box-shadow: $shadow;

  &__img {
    height: 116px;
    width: 120px;
  }

  &__body {
    padding-left: $gutter-small;

    &__heading {
      margin-bottom: $gutter;
      font-weight: $bold;
      text-transform: uppercase;
      letter-spacing: 1px;

      @include breakpoint(desktop) {
        font-size: 1.25rem;
      }
    }

    &__price {
      margin-bottom: $gutter;
      font-weight: $bold;

      @include breakpoint(desktop) {
        font-size: 1.25rem;
      }
    }

    &__label {
      text-transform: uppercase;
    }
  }
}
</style>
