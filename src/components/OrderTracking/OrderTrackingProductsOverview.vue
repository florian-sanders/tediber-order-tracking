<template>
  <div>
    <h2>Articles ({{products.length}})</h2>
    <OrderTrackingProduct v-for="product in products" :key="product.id" :product="product"/>
  </div>
</template>

<script>
import OrderTrackingProduct from './OrderTrackingProduct.vue';

export default {
  name: 'OrderTrackingProductOverview',
  components: {
    OrderTrackingProduct,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>
