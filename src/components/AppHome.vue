<template>
  <section>
    <h1 class="section-heading">
      <span class="section-heading__text">Bienvenue</span>
    </h1>
    <div class="flexed-content">
      <ul class="flexed-content__test-links">
        <li><router-link to="order/450652">Test 1</router-link></li>
        <li><router-link to="order/450653">Test 2</router-link></li>
        <li><router-link to="order/450654">Test 3</router-link></li>
        <li><router-link to="order/450655">Test 4</router-link></li>
        <li><router-link to="order/450656">Test 5</router-link></li>
      </ul>
      <div>
        <!-- <AppDisclosure /> -->
      </div>
    </div>
  </section>
</template>

<script>
// import AppDisclosure from '@/components/AppDisclosure.vue';

export default {
  name: 'AppHome',
  components: {
    // AppDisclosure,
  },
};
</script>

<style lang="scss" scoped>
.flexed-content {
  display: flex;

  &__test-links {
    list-style: circle;

    li {
      margin-bottom: 1rem;
    }
  }
}
</style>
