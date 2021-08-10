<template>
  <div class="loading__content">
    <img
      class="loading__content__bear"
      :src="tediberBearImg"
      alt=""
      width="200"
    />
    <img
      class="loading__content__glass"
      :src="magnifyingGlassImg"
      alt=""
      width="100"
    />
  </div>
</template>

<script>
import tediberBearImg from '@/assets/logo-tediber-bear.svg';
import magnifyingGlassImg from '@/assets/magnifying-glass.svg';

export default {
  name: 'TediberLoader',
  data() {
    return {
      tediberBearImg,
      magnifyingGlassImg,
    };
  },
};
</script>

<style lang="scss" scoped>
.loading__content {
  position: relative;
  margin-top: 5rem;
  &__bear {
    margin: 0 auto;
    display: block;
  }

  &__glass {
    position: absolute;
    top: 45px;
    left: 52%;
    animation: 2s linear infinite circle;
  }
}

@keyframes circle {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(-15%, 15%);
  }
  50% {
    transform: translate(-15%, 0%);
  }
  75% {
    transform: translate(0%, -15%);
  }
  100% {
    transform: translate(0%, 0%);
  }
}
</style>
