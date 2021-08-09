<template>
  <section class="section">
    <h2 class="section-heading">
      <span class="section-heading__text">Informations sur la livraison</span>
    </h2>
    <div class="shipping-info small-screen-margin">
      <div class="shipping-info__group">
        <h3 class="shipping-info__group__heading">
          {{ headingPickupOrDelivery }}
        </h3>
        <p class="caps">{{ poiName }}</p>
        <p>{{ address }}</p>
        <p class="caps">{{ city }}</p>
        <p>{{ zip }}</p>
        <p class="caps">{{ country }}</p>
      </div>

      <div class="shipping-info__group">
        <h3 class="shipping-info__group__heading">Vos coordonnées</h3>
        <p>{{ firstname }} {{ lastname }}</p>
        <p>{{ phone }}</p>
      </div>

      <div class="shipping-info__group">
        <h3 class="shipping-info__group__heading">Livraison estimée</h3>
        <p>{{ formattedEstimatedDelivery }}</p>
      </div>

      <div class="shipping-info__group">
        <h3 class="shipping-info__group__heading">Mode de livraison</h3>
        <p>
          {{ formattedDeliveryMethodText }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { formatDate } from '@/utils';

export default {
  name: 'OrderTrackingShippingDetails',
  computed: {
    formattedEstimatedDelivery() {
      // format the date with the week-day as well as the usual format
      return formatDate(this.estimatedDelivery, 'long');
    },
    headingPickupOrDelivery() {
      return this.poiType === 'pickup'
        ? 'Adresse de collecte'
        : 'Adresse de livraison';
    },
    formattedDeliveryMethodText() {
      /*
      * API sends strings like "express", "standard", "pickup", "home"
      * to specify the delivery method. We use an object to match these strings
      * with their proper formatted text.
      * This is not the best solution, maybe this should be processed by the API ?
      */
      const stringTemplate = {
        express: 'Livraison express',
        standard: 'Livraison standard',
        pickup: 'en relais colis',
        home: 'à domicile',
      };

      return `${stringTemplate[this.shippingStandard]} ${
        stringTemplate[this.poiType]
      }`;
    },
  },
  props: {
    poiName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zip: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    estimatedDelivery: {
      type: String,
      required: true,
    },
    poiType: {
      type: String,
      required: true,
    },
    shippingStandard: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';

.shipping-info {
  display: flex;
  flex-direction: column;
  gap: $gutter;
  padding: $gutter-small;
  padding-bottom: 1.6rem;
  margin-bottom: $gutter * 2;
  box-shadow: $shadow;

  @include breakpoint(small-desktop) {
    flex-direction: row;
    padding: $gutter;
  }

  &__group {
    @include breakpoint(small-desktop) {
      width: 33%;
    }

    &:not(:last-child) {
      padding-bottom: 1rem;
      border-bottom: solid 1px rgba(53, 53, 53, 0.247);

      @include breakpoint(small-desktop) {
        padding-bottom: 0;
        border-bottom: none;
        border-right: solid 1px rgba(53, 53, 53, 0.247);
      }
    }

    &__heading {
      margin-bottom: $gutter;
      text-transform: uppercase;
      font-weight: $bold;
    }
  }
}
</style>
