<!--
  aria-expanded value is set as a string to prevent vue from
  removing the attribute when value = false

  aria-expanded="false" has a meaning (component can be used
  to display content + content is currently hidden)

  without this, blind users cannot infer that this component
  is used to display / hide content.
 -->

<template>
  <div class="disclosure">
    <component :is="headingTag" class="disclosure__heading">
      <button
        class="disclosure__toggle-btn"
        type="button"
        :aria-expanded="isVisible ? 'true' : 'false'"
        :aria-controls="uuid"
        @click="toggleIsVisible"
      >
        {{ heading }}
      </button>
    </component>
    <div class="disclosure__content" :class="{ hidden: !isVisible }" :id="uuid">
      <slot />
      <div v-if="mdContent" v-html="sanitizeHtmlContent"></div>
    </div>
  </div>
</template>

<script>
import { Converter } from 'showdown';
import DOMPurify from 'dompurify';
// used to provide unique id to each instance
let uuid = 0;

const mdConverter = new Converter({
  noHeaderId: true,
});

export default {
  name: 'Disclosure',
  data() {
    return {
      isVisible: false,
    };
  },
  computed: {
    sanitizeHtmlContent() {
      /*
        ensures heading hierarchy is consistent depending on the context
        start heading level right below the disclosure heading level passed as props
      */
      const startLevel = Number(this.headingTag[1]) + 1;

      mdConverter.setOption('headerLevelStart', startLevel);
      return DOMPurify.sanitize(mdConverter.makeHtml(this.mdContent));
    },
  },
  beforeCreate() {
    this.uuid = `disclosure-${uuid}`;
    uuid += 1;
  },
  methods: {
    toggleIsVisible() {
      this.isVisible = !this.isVisible;
    },
  },
  props: {
    heading: {
      type: String,
      required: true,
    },
    headingTag: {
      type: String,
      validate: (prop) => prop.match(/h[1-6]/gim),
      required: true,
    },
    childComponent: String,
    mdContent: String,
  },
};
</script>

<style lang="scss">
.disclosure {
  &__heading {
  }

  &__toggle-btn {
    display: block;
    padding: 1rem;
    width: 100%;
    background: url('~@/assets/arrow-down.svg') no-repeat top 50% right 20px;
  }
}
</style>
