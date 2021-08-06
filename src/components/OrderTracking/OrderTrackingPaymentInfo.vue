<template>
  <div>
    <img :src="paymentMethodImg" alt="" />
    {{ paymentMethod }}
  </div>
</template>

<script>
import { firstLetterToUpper } from '@/utility';

import visaImg from '@/assets/payment-visa.jpg';
import cbImg from '@/assets/payment-cb.png';
import mastercardImg from '@/assets/payment-mastercard.png';

export default {
  name: 'OrderTrackingPaymentInfo',
  data() {
    return {
      imgPaths: {
        cb: cbImg,
        visa: visaImg,
        mastercard: mastercardImg,
      },
    };
  },
  computed: {
    paymentMethod() {
      return firstLetterToUpper(this.paymentInfo);
    },
    paymentMethodImg() {
      return this.imgPaths[this.paymentInfo];
    },
  },
  props: {
    paymentInfo: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>
