<!--
  Opting for the aside element is debatable.
  Some might consider it an essential part of the page,
  others might consider it as complementary information.
  In any case, consequences are close to inexistent.
-->

<template>
  <aside class="section" v-if="anyText">
    <h2 class="section-heading">
      <span class="section-heading__text">Besoin d'aide&nbsp;?</span>
    </h2>
    <Disclosure
      v-if="faq"
      heading="Foire aux questions Tediber"
      headingTag="h3"
      :mdContent="faq"
      isFullWidthMobile
      isCapitalized
    />
    <Disclosure
      v-if="warranty"
      heading="La garantie Tediber"
      headingTag="h3"
      :mdContent="warranty"
      isFullWidthMobile
      isCapitalized
    />
    <Disclosure
      v-if="recycling"
      heading="Reprise de l'ancienne literie"
      headingTag="h3"
      :mdContent="recycling"
      isFullWidthMobile
      isCapitalized
    />
    <Disclosure
      v-if="returnNotice"
      heading="Comment faire un retour ?"
      headingTag="h3"
      :mdContent="returnNotice"
      isFullWidthMobile
      isCapitalized
    />
  </aside>
</template>

<script>
import Disclosure from '@/components/Disclosure.vue';

export default {
  name: 'OrderTrackingHelp',
  components: {
    Disclosure,
  },
  computed: {
    anyText() {
      return (
        /* eslint-disable */
        this.faq
          || this.warranty
          || this.returnNotice
          || this.recycling
      );
    },
    /*
    * these texts are not essential and we do not want the app to crash
    * if the fetch has failed
    */
    warranty() {
      return this.$store.state.texts?.warranty;
    },
    returnNotice() {
      return this.$store.state.texts?.returnNotice;
    },
    recycling() {
      return this.$store.state.texts?.recycling;
    },
    faq() {
      return this.$store.state.texts?.faq;
    },
  },
};
</script>

<style>
</style>
