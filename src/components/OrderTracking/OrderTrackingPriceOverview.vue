<template>
  <div>
    <h2>Total Commande</h2>
    <p>
      Sous-total&nbsp;: <span>{{ subTotal }}</span>
    </p>
    <p>
      Livraison&nbsp;: <span>{{ formattedShippingFee }}</span>
    </p>
    <p>
      Total&nbsp;: <span>{{ total }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'OrderTrackingPriceOverview',
  computed: {
    formattedShippingFee() {
      return this.shippingFee === 0
        ? 'Gratuite'
        : this.shippingFee;
    },
  },
  props: {
    subTotal: {
      type: Number,
      required: true,
    },
    shippingFee: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
</style>
