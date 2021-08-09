<template>
  <section class="section products">
    <h2 class="products__heading">
      {{ headingSgPlural }} (<span class="sr-only">Nombre d'articles : </span
      >{{ products.length }})
    </h2>
    <OrderTrackingProduct
      v-for="product in products"
      :key="product.id"
      v-bind="product"
    />
  </section>
</template>

<script>
import OrderTrackingProduct from './OrderTrackingProduct.vue';

export default {
  name: 'OrderTrackingProductOverview',
  components: {
    OrderTrackingProduct,
  },
  computed: {
    headingSgPlural() {
      return this.products.length > 1 ? 'Articles' : 'Article';
    },
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';

.products {
  margin-top: $gutter;

  &__heading {
    margin-bottom: 0.8rem;
    text-transform: uppercase;
  }

  @include breakpoint(desktop) {
    width: 50%;
  }
}
</style>
