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
            <Disclosure
              v-if="texts"
              heading="Informations sur les retours"
              headingTag="h2"
              :mdContent="texts.returnNotice"
            />
          </div>
          <ProductsOverview :products="order.products" />
        </div>
        <ShippingDetails v-bind="order" />
        <PaymentInfo v-bind="order" />
        <PriceOverview v-bind="order" />
        <order-tracking-help v-if="texts" v-bind="texts" />
      </section>
    </transition>
  </div>
</template>

<script>
import { formatDate } from '@/utils';
import getOrder from '@/API/getOrder';

import Disclosure from '@/components/Disclosure.vue';
import AppError from '@/components/AppError.vue';
import AppLoading from '@/components/AppLoading.vue';
import ProductsOverview from './OrderTrackingProductsOverview.vue';
import ShippingProgress from './OrderTrackingShippingProgress.vue';
import ShippingDetails from './OrderTrackingShippingDetails.vue';
import PaymentInfo from './OrderTrackingPaymentInfo.vue';
import PriceOverview from './OrderTrackingPriceOverview.vue';
import OrderTrackingHelp from './OrderTrackingHelp.vue';

export default {
  name: 'OrderTracking',
  data() {
    return {
      order: null,
      error: null,
      loading: false,
      shippingProgressComponent: 'shippingProgress',
    };
  },
  created() {
    this.fetchOrder();
  },
  props: {
    // help texts are not essential, only displayed if they exist.
    texts: {
      type: Object,
    },
  },
  methods: {
    formatDate,
    fetchOrder() {
      // get the order using route parameter. Display loader while fetching
      this.error = null;
      this.order = null;
      this.loading = true;

      const fetchedId = this.$route.params.orderId;

      getOrder(fetchedId, (err, order) => {
        if (this.$route.params.orderId !== fetchedId) return;

        this.loading = false;

        if (err) {
          /*
          * error status is used to display relevant content in the error page
          * to avoid showing 404 page when server is down for instance.
          */
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
    ShippingDetails,
    PaymentInfo,
    PriceOverview,
    AppError,
    AppLoading,
    OrderTrackingHelp,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';

.order {
  padding-top: $gutter;

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
      margin-top: $gutter * 2;

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
