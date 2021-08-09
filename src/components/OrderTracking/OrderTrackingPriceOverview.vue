<template>
  <section class="section price-overview">
    <h2 class="section-heading">
      <span class="section-heading__text">Total Commande</span>
    </h2>
    <div class="price-overview__card small-screen-margin">
      <ul class="price-overview__card__body">
        <li>
          Sous-total
          <span>{{ subtotal }}</span>
        </li>
        <li>
          Livraison
          <span class="caps">{{ formattedShippingFee }}</span>
        </li>
        <li>
          Total&nbsp;:
          <span>{{ total }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OrderTrackingPriceOverview',
  computed: {
    formattedShippingFee() {
      return this.shippingFee === 0 ? 'Gratuite' : this.shippingFee;
    },
    subtotal() {
      return this.$store.state.order.subtotal;
    },
    shippingFee() {
      return this.$store.state.order.shippingFee;
    },
    total() {
      return this.$store.state.order.total;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';

.price-overview {
  &__card {
    box-shadow: $shadow;
    padding: 1rem 2rem;

    .price-overview__card__body {
      @include breakpoint(tablet-desktop) {
        max-width: 10rem;
        margin: 0 auto;
      }

      & li {
        display: flex;
        justify-content: space-between;
        margin-bottom: $gutter;

        &:last-child {
          margin-bottom: 0;
          font-weight: $bold;
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>
