<template>
  <div>
    <h2 class="section-heading"><span class="section-heading__text">Besoin d'aide&nbsp;?</span></h2>
    <Disclosure
      heading="Foire aux questions Tediber"
      headingTag="h3"
      :mdContent="helpContent.faq"
      isFullWidthMobile
      isCapitalized
    >
    </Disclosure>
    <Disclosure
      heading="La garantie Tediber"
      headingTag="h3"
      isFullWidthMobile
      isCapitalized
    >
      <component
        :is="textSplitterComponent"
        :textContent="helpContent.warranty"
      />
    </Disclosure>
    <Disclosure
      heading="Reprise de l'ancienne literie"
      headingTag="h3"
      isFullWidthMobile
      isCapitalized
    >
      <component
        :is="textSplitterComponent"
        :textContent="helpContent.recycling"
      />
    </Disclosure>
    <Disclosure
      heading="Comment faire un retour ?"
      headingTag="h3"
      isFullWidthMobile
      isCapitalized
    >
      <component
        :is="textSplitterComponent"
        :textContent="helpContent.returnNotice"
      />
    </Disclosure>
  </div>
</template>

<script>
import Disclosure from '@/components/Disclosure.vue';
import BasicTextSplitter from './BasicTextSplitter.vue';

export default {
  name: 'Help',
  data() {
    return {
      textSplitterComponent: BasicTextSplitter,
    };
  },
  components: {
    BasicTextSplitter,
    Disclosure,
  },
  props: {
    helpContent: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>
