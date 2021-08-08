<template>
  <section class="section order">
    <h1 class="section-heading">
      <span class="section-heading__text">Suivi de commande</span>
    </h1>
    <div class="section order__flex-sections small-screen-margin">
      <div class="order__flex-sections__left-half">
        <ul class="order__info">
          <li>
            N° de commande&nbsp;: <strong class="bold" v-text="orderId" />
          </li>
          <li>
            Date de commande&nbsp;:
            <strong class="bold" v-text="formatDate(orderDate)" />
          </li>
          <li>
            Date d'expédition&nbsp;:
            <strong class="bold" v-text="formatDate(shippingDate)" />
          </li>
        </ul>
        <Disclosure heading="Suivi de commande" headingTag="h2" defaultOpen>
          <component
            :is="shippingProgressComponent"
            :orderProgress="progress"
          />
        </Disclosure>
        <Disclosure heading="Informations sur les retours" headingTag="h2">
          <component :is="textSplitterComponent" :textContent="returnNotice" />
        </Disclosure>
      </div>
      <ProductsOverview :products="products" />
    </div>
    <ShippingDetails v-bind="shippingInfo" />
    <PaymentInfo :paymentInfo="paymentInfo" />
    <PriceOverview v-bind="priceInfo" />
  </section>
</template>

<script>
import { formatDate } from '@/utility';

import Disclosure from '@/components/Disclosure.vue';
import BasicTextSplitter from '@/components/BasicTextSplitter.vue';
import ProductsOverview from './OrderTrackingProductsOverview.vue';
import ShippingProgress from './OrderTrackingShippingProgress.vue';
import ShippingDetails from './OrderTrackingShippingDetails.vue';
import PaymentInfo from './OrderTrackingPaymentInfo.vue';
import PriceOverview from './OrderTrackingPriceOverview.vue';

export default {
  name: 'OrderTracking',
  data() {
    return {
      shippingProgressComponent: 'shippingProgress',
      textSplitterComponent: 'basicTextSplitter',
    };
  },
  props: {
    orderId: {
      type: Number,
      required: true,
    },
    orderDate: {
      type: String,
      required: true,
    },
    shippingDate: {
      type: String,
      required: true,
    },
    paymentInfo: {
      type: String,
      required: true,
    },
    progress: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
    shippingInfo: {
      type: Object,
      required: true,
    },
    priceInfo: {
      type: Object,
      required: true,
    },
    returnNotice: {
      type: Array,
      required: true,
      /* eslint-disable */
      validator: (prop) =>
        prop.every((paragraph) => typeof paragraph === 'string'),
    },
  },
  methods: {
    formatDate,
  },
  components: {
    ProductsOverview,
    Disclosure,
    ShippingProgress,
    BasicTextSplitter,
    ShippingDetails,
    PaymentInfo,
    PriceOverview,
  },
};
</script>

<style lang="scss">
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';

.order {
  padding-top: $gutter * 2;

  &__info {
    padding-top: $gutter;

    & li {
      margin-bottom: $gutter;
    }
  }

  @include breakpoint(small-desktop) {
    &__flex-sections {
      display: flex;
      flex-direction: row;
      gap: $gutter * 2;

      &__left-half {
        width: 50%;
      }
    }
  }
}
</style>
