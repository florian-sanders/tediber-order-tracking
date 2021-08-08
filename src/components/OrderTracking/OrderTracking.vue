<template>
  <div>
    <AppLoading v-if="loading" />
    <AppError v-if="error" :type="error" />
    <transition name="order">
      <section class="section order" v-if="order">
        <h1 class="section-heading">
          <span class="section-heading__text">Suivi de commande</span>
        </h1>
        <div class="section order__flex-sections small-screen-margin">
          <div class="order__flex-sections__left-half">
            <ul class="order__info">
              <li>
                N° de commande&nbsp;:
                <strong class="bold" v-text="order.orderId" />
              </li>
              <li>
                Date de commande&nbsp;:
                <strong class="bold" v-text="formatDate(order.orderDate)" />
              </li>
              <li>
                Date d'expédition&nbsp;:
                <strong class="bold" v-text="formatDate(order.shippingDate)" />
              </li>
            </ul>
            <Disclosure heading="Suivi de commande" headingTag="h2" defaultOpen>
              <component
                :is="shippingProgressComponent"
                :orderProgress="order.progress"
              />
            </Disclosure>
            <Disclosure heading="Informations sur les retours" headingTag="h2">
              <component
                :is="textSplitterComponent"
                :textContent="returnNotice"
              />
            </Disclosure>
          </div>
          <ProductsOverview :products="order.products" />
        </div>
        <ShippingDetails v-bind="order" />
        <PaymentInfo v-bind="order" />
        <PriceOverview v-bind="order" />
      </section>
    </transition>
  </div>
</template>

<script>
import { formatDate } from '@/utility';
import getOrder from '@/API/getOrder';

import Disclosure from '@/components/Disclosure.vue';
import AppError from '@/components/AppError.vue';
import AppLoading from '@/components/AppLoading.vue';
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
      order: null,
      error: null,
      loading: false,
      shippingProgressComponent: 'shippingProgress',
      textSplitterComponent: 'basicTextSplitter',
    };
  },
  created() {
    this.fetchOrder();
  },
  props: {
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
    fetchOrder() {
      this.error = null;
      this.post = null;
      this.loading = true;

      const fetchedId = this.$route.params.orderId;

      getOrder(fetchedId, (err, order) => {
        if (this.$route.params.orderId !== fetchedId) return;

        this.loading = false;

        if (err) {
          this.error = err.response.status;
        } else {
          this.order = order.data;
        }
      });
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
    AppError,
    AppLoading,
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

.order-enter-active,
.order-leave-active {
  transition: opacity 2s;
}

.order-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
