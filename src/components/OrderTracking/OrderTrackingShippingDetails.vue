<template>
  <div>
    <h2>Informations sur la livraison</h2>
    <div>
      <div>
        <h3>{{ headingPickupOrDelivery }}</h3>
        <p>{{ poiName }}</p>
        <p>{{ address }}</p>
        <p>{{ city }}</p>
        <p>{{ zip }}</p>
        <p>{{ country }}</p>
      </div>

      <div>
        <h3>Vos coordonnées</h3>
        <p>{{ recipientName }}</p>
        <p>{{ recipientPhone }}</p>
      </div>

      <div>
        <h3>Livraison estimée</h3>
        <p>{{ formattedEstimatedDelivery }}</p>
      </div>

      <div>
        <h3>Mode de livraison</h3>
        <p>
          {{ StringTemplate[method.type] }}
          {{ StringTemplate[method.poiType] }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from '@/utility';

export default {
  name: 'OrderTrackingShippingDetails',
  data() {
    return {
      StringTemplate: {
        express: 'Livraison express',
        standard: 'Livraison standard',
        pickup: 'en relais colis',
        home: 'à domicile',
      },
    };
  },
  computed: {
    formattedEstimatedDelivery() {
      return formatDate(this.estimatedDelivery);
    },
    headingPickupOrDelivery() {
      return this.method === 'pickup'
        ? 'Adresse de collecte'
        : 'Adresse de livraison';
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
    recipientName: {
      type: String,
      required: true,
    },
    recipientPhone: {
      type: String,
      required: true,
    },
    estimatedDelivery: {
      type: String,
      required: true,
    },
    method: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>
