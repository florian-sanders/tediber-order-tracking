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

/*
Improved screen reader only CSS class
  @author Gaël Poupard
  @note Based on Yahoo!'s technique
  @author Thierry Koblentz
  @see https://developer.yahoo.com/blogs/ydn/clip-hidden-content-better-accessibility-53456.html
  * 1.
  @note `clip` is deprecated but works everywhere
  @see https://developer.mozilla.org/en-US/docs/Web/CSS/clip
  * 2.
  @note `clip-path` is the future-proof version, but not very well supported yet
  @see https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path
  @see http://caniuse.com/#search=clip-path
  @author Yvain Liechti
  @see https://twitter.com/ryuran78/status/778943389819604992
  * 3.
  @note preventing text to be condensed
  author J. Renée Beach
  @see https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
  @note Drupal 8 goes with word-wrap: normal instead
  @see https://www.drupal.org/node/2045151
  @see http://cgit.drupalcode.org/drupal/commit/?id=5b847ea
  * 4.
  @note !important is important
  @note Obviously you wanna hide something
  @author Harry Roberts
  @see https://csswizardry.com/2016/05/the-importance-of-important/
*/

.sr-only,
.sr-only-focusable {
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important; /* 2 */
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important; /* 3 */
}

/*
Use in conjunction with .sr-only to only display content when it's focused.
  @note Useful for skip links
  @see http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G1
  @note Based on a HTML5 Boilerplate technique, included in Bootstrap
  @note Fixed a bug with position: static on iOS 10.0.2 + VoiceOver
  @author Sylvain Pigeard
  @see https://github.com/twbs/bootstrap/issues/20732
*/
.sr-only-focusable:focus,
.sr-only-focusable:active {
  clip: auto !important;
  -webkit-clip-path: none !important;
  clip-path: none !important;
  height: auto !important;
  margin: auto !important;
  overflow: visible !important;
  width: auto !important;
  white-space: normal !important;
}
</style>
