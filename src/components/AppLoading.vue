<template>
  <section class="loading">
    <h1 class="section-heading">
      <span class="section-heading__text">Tediber cherche votre commande</span>
    </h1>
    <TediberLoader />
  </section>
</template>

<script>

import TediberLoader from './TediberLoader.vue';

export default {
  name: 'AppLoading',
  components: {
    TediberLoader,
  },
};
</script>

<style lang="scss" scoped>
.loading {
  margin: 5rem 0;
  padding-bottom: 3rem;
}
</style>
