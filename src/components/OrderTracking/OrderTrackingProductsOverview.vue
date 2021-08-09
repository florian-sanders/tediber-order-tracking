<template>
  <section class="products">
    <h2 class="products__heading">
      {{ headingSgPlural }} (<span class="sr-only">Nombre d'articles : </span
      >{{ products.length }})
    </h2>
    <OrderTrackingProduct
      v-for="product in products"
      :key="product.id"
      :product="product"
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
    products() {
      return this.$store.state.order.products;
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
