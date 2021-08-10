<template>
  <div id="app">
    <p class="sr-only" tabindex="-1" ref="pageTitle">{{ pageTitle }}</p>
    <a href="#main-content" class="skip-link sr-only-focusable">Contenu</a>
    <AppHeader />
    <main
      class="big-screen-centered"
      role="main"
      id="main-content"
      tabindex="-1"
    >
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AppHeader from '@/components/Header/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
  created() {
    /*
     * Texts are common to every order and they are not essential to the page
     * try to fetch them once and for all upon loading the App, avoid fetching them again
     * if fetch fails, order component is displayed with no help text
     */
    this.fetchTexts();
  },
  computed: {
    pageTitle() {
      return document.title;
    },
  },
  watch: {
    $route() {
      // if texts failed to load, try again at next page change
      if (!this.$store.state.texts) this.fetchTexts();

      /*
       * everytime the page changes, place focus on the page title container.
       * Users are placed back at the top of the page and thus made aware of page change
       */
      this.$refs.pageTitle.focus();
    },
  },
  methods: {
    ...mapActions(['fetchTexts']),
  },
};
</script>

<style lang="scss">
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';
@import '@/scss/_fonts.scss';
@import '@/scss/_a11y.scss';

body {
  font-family: 'Roboto', 'Ubuntu', 'sans-serif';
  font-weight: 300;
  font-size: 0.9rem;
  line-height: 1.05rem;
  color: $color-main;
}

*:focus-visible {
  outline: dashed 2px $color-main;
  outline-offset: 4px;
}

.hidden {
  display: none;
}

.bold {
  font-weight: $bold;
}

.caps {
  text-transform: uppercase;
}

.section {
  margin-bottom: $gutter-section;
}

.section-heading {
  position: relative;
  margin-bottom: $gutter;

  &__text {
    display: block;
    margin: 0 auto;
    padding: 0 1.1rem;
    width: fit-content;
    max-width: 84%;
    background-color: #fff;
    text-align: center;
    font-size: 1.375rem;
    font-weight: $bold-soft;
    letter-spacing: 1px;
    line-height: 1.5rem;
    text-transform: uppercase;
  }

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    bottom: 75%;
    display: block;
    width: 100%;
    height: 1px;
    background-color: $color-main;
  }

  &::after {
    content: '';
    display: block;
    margin-top: 1rem;
    width: 100%;
    height: 0.875rem;
    background: url('~@/assets/zigzag.svg') no-repeat center;
  }
}

.small-screen-margin {
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  @include breakpoint(desktop) {
    margin-left: 0;
    margin-right: 0;
  }
}

.big-screen-centered {
  max-width: 1042px;
  margin: 0 auto;
}
</style>
