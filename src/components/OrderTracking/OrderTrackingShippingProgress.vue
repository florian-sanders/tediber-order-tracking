<template>
  <div class="order-progress">
    <div
      class="order-progress__step"
      v-for="(step, index) in shippingSteps"
      :key="step"
    >
      <img class="order-progress__step__img" :src="getImgUrl(step)" alt="" height="50" />
      <span
        class="order-progress__step__check"
        :class="{
          'order-progress__step__check--checked': currentStepIndex >= index,
        }"
      />
    </div>
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
    };
  },
  computed: {
    currentStepIndex() {
      return this.shippingSteps.indexOf(this.orderProgress);
    },
  },
  methods: {
    getImgUrl(pic) {
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

<style lang="scss">
@import '@/scss/_variables.scss';

.order-progress {
  display: flex;
  gap: 1rem;

  &__step {
    &__img {
      margin: 0 auto;
    }

    &__check {
      display: block;
      margin: 0.5rem auto 0 auto;
      border: solid 1px $color-light;
      width: 1rem;
      height: 1rem;

      &--checked {
        background-color: green;
      }
    }
  }
}
</style>
