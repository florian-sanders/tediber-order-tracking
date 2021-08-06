<template>
  <div>
    <h1 class="">Suivi de commande</h1>
    <p>N° de commande&nbsp;: <span class="" v-text="orderId" /></p>
    <p>Date de commande&nbsp;: <span class="" v-text="orderDate" /></p>
    <p>Date d'expédition&nbsp;: <span class="" v-text="formattedOrderShippingDate" /></p>
    <div>
      <Disclosure heading="Suivi de commande" headingTag="h2">
        <component
          :is="shippingProgressComponent"
          :orderProgress="progress"
        />
      </Disclosure>
      <Disclosure heading="Information sur les retours" headingTag="h2">
        <component :is="textSplitterComponent" :textContent="returnNotice" />
      </Disclosure>
    </div>
    <ProductsOverview :products="products" />
    <ShippingDetails v-bind="shippingInfo" />
    <PaymentInfo :paymentInfo="paymentInfo" />
    <PriceOverview v-bind="priceInfo" />
  </div>
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
      validator: (prop) => prop.every((paragraph) => typeof paragraph === 'string'),
    },
  },
  computed: {
    formattedOrderShippingDate() {
      return formatDate(this.shippingDate);
    },
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
</style>
