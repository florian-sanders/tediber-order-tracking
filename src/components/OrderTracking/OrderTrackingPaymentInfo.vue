<template>
  <section class="section payment-info">
    <h2 class="section-heading">
      <span class="section-heading__text">Informations de paiement</span>
    </h2>
    <div class="payment-info__card small-screen-margin">
      <img class="payment-info__card__img" :src="paymentMethodImg" alt="" width="34" />
      <span class="payment-info__card__name">{{ paymentMethod }}</span>
    </div>
  </section>
</template>

<script>
import { firstLetterToUpper } from '@/utils';

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
      // get the right img depending on the payment method (cb, visa, mastercard)
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

<style lang="scss">
@import '@/scss/_variables.scss';

.payment-info {
  &__card {
    display: flex;
    align-items: center;
    box-shadow: $shadow;
    padding: $gutter-small $gutter;

    &__name {
      margin-left: $gutter-small;
      text-transform: uppercase;
    }

    &__img {
      height: 34px;
      width: auto;
    }
  }
}
</style>
