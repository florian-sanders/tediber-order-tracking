<template>
  <div>
      <img :src="product.imgPath" alt="">
      <div>
        <h3>{{product.name}}</h3>
        <p>{{product.price}}</p>
        <p>{{product.size}}</p>
        <p>{{product.quantity}}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'OrderTrackingProduct',
  props: {
    product: Object,
    /* eslint-disable */
    validate: (prop) => {
      return typeof prop.name === 'string'
              && typeof prop.price === 'number'
              && typeof prop.size === 'string'
              && typeof prop.quantity === 'number'
              && typeof prop.imgPath === 'string';
    },
  },
};
</script>

<style>
</style>
