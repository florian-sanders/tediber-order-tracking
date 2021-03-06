<template>
  <transition name="fade" mode="out-in">
    <AppLoading v-if="isLoading" />
    <section class="section order" v-else-if="order">
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
          <AppDisclosure
            heading="Suivi de commande"
            headingTag="h2"
            defaultOpen
          >
            <component
              :is="shippingProgressComponent"
              :orderProgress="order.progress"
            />
          </AppDisclosure>
          <AppDisclosure
            v-if="returnNotice"
            heading="Informations sur les retours"
            headingTag="h2"
            :mdContent="returnNotice"
          />
        </div>
        <OrderTrackingProductsOverview />
      </div>
      <OrderTrackingShippingDetails />
      <OrderTrackingPaymentInfo />
      <OrderTrackingPriceOverview />
      <OrderTrackingHelp />
    </section>
    <AppError v-else :type="error" />
  </transition>
</template>

<script>
import { mapActions } from 'vuex';
import { formatDate } from '@/utils';

import AppDisclosure from '@/components/AppDisclosure.vue';
import AppError from '@/components/AppError.vue';
import AppLoading from '@/components/AppLoading.vue';
import OrderTrackingProductsOverview from './OrderTrackingProductsOverview.vue';
import OrderTrackingShippingProgress from './OrderTrackingShippingProgress.vue';
import OrderTrackingShippingDetails from './OrderTrackingShippingDetails.vue';
import OrderTrackingPaymentInfo from './OrderTrackingPaymentInfo.vue';
import OrderTrackingPriceOverview from './OrderTrackingPriceOverview.vue';
import OrderTrackingHelp from './OrderTrackingHelp.vue';

export default {
  name: 'OrderTracking',
  data() {
    return {
      shippingProgressComponent: 'OrderTrackingShippingProgress',
      appLoadingComponent: 'AppLoading',
    };
  },
  created() {
    this.fetchOrder(this.$route.params.orderId);
  },
  destroyed() {
    this.resetOrder();
  },
  computed: {
    order() {
      return this.$store.state.order;
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
    error() {
      return this.$store.state.error;
    },
    returnNotice() {
      return this.$store.state.texts?.returnNotice;
    },
  },
  methods: {
    formatDate,
    ...mapActions(['fetchOrder', 'resetOrder']),
  },
  components: {
    AppError,
    AppLoading,
    AppDisclosure,
    OrderTrackingProductsOverview,
    OrderTrackingShippingProgress,
    OrderTrackingShippingDetails,
    OrderTrackingPaymentInfo,
    OrderTrackingPriceOverview,
    OrderTrackingHelp,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';

.order {
  padding: $gutter 0;

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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s, transform 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8)
}
</style>
