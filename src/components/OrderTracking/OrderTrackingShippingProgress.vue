<template>
  <div>
    <p class="sr-only">Statut : {{ orderStatus }}</p>
    <ol class="order-progress">
      <li
        class="order-progress__step"
        v-for="(step, index) in shippingSteps"
        :key="step"
      >
        <img
          class="order-progress__step__img"
          :src="getImgUrl(step)"
          alt=""
          rel="preload"
          :key="`${step}Img`"
        />
        <span
          aria-hidden="true"
          class="order-progress__step__check"
          :class="{
            'order-progress__step__check--checked': currentStepIndex >= index,
          }"
        />
        <span class="sr-only">
          {{ shippingStepsFr[index] }} :
          {{ currentStepIndex >= index ? 'oui' : 'Pas encore' }}</span
        >
      </li>
    </ol>
  </div>
</template>

<script>
import processedImg from '@/assets/in-process.svg';
import sentImg from '@/assets/sent.svg';
import shippedImg from '@/assets/in-transit.svg';
import deliveredImg from '@/assets/delivery.svg';

export default {
  name: 'OrderTrackingShippingProgress',
  data() {
    return {
      processedImg,
      sentImg,
      shippedImg,
      deliveredImg,
      shippingSteps: ['processed', 'sent', 'shipped', 'delivered'],
      shippingStepsFr: [
        'Commande traitée',
        'Commande envoyée',
        'Commande en cours de livraison',
        'Commande livrée',
      ],
    };
  },
  computed: {
    currentStepIndex() {
      /*
       * get the current step index to know if this step is done or not
       * step is considered done if it preceeds the last step done sent
       * by the api (orderProgress).
       * i.e: if orderProgress = shipped, then it is processed, sent and
       * shipped.
       */
      return this.shippingSteps.indexOf(this.orderProgress);
    },
    orderStatus() {
      /*
       * for blind users, specify the current status of the order
       * most users see it at first glance looking at the images but
       * they cannot so this makes up for it. If they want, they can
       * still read the details after.
       */
      return this.shippingStepsFr[this.currentStepIndex];
    },
  },
  methods: {
    getImgUrl(pic) {
      /*
       * get the image corresponding to the step. This is based on image names
       * which might not be the most robust method.
       */
      return this[`${pic}Img`];
    },
  },
  props: {
    orderProgress: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';

.order-progress {
  display: flex;
  // fixed gap for arrows not subject to change when increasing font-size
  gap: 10%;
  list-style: none;
  padding: 0;

  &__step {
    position: relative;
    flex-grow: 1;
    margin-bottom: 0;

    // right arrow point to the next step
    &::after {
      content: '';
      position: absolute;
      top: 25%;
      right: 0;
      transform: translateX(6.5vw);
      width: 5.5vw;
      @include breakpoint(tablet-desktop) {
        /*
          clamp is used to make sure arrows stop growing
          bigger when their container stops growing (> 1024px screen width)
        */
        transform: translateX(clamp(30px, 3.5vw, 40px));
        width: clamp(24px, 2.5vw, 35px);
      }
      height: 20%;
      background: url('~@/assets/arrow-right.svg') no-repeat right;
    }

    &__img {
      height: 70%;
      width: 100%;
    }

    &__check {
      position: relative;
      display: block;
      margin: 0.5rem auto 0 auto;
      width: 0.9rem;
      height: 0.9rem;
      border: solid 1px $color-light;

      &--checked::after {
        content: '';
        position: absolute;
        top: -25%;
        left: -25%;
        width: 150%;
        height: 150%;
        background: url('~@/assets/shipment-progress-check.svg') no-repeat
          center;
        background-size: 100% 100%;
      }
    }
  }
}

.order-progress__step:last-child::after {
  display: none;
}
</style>
