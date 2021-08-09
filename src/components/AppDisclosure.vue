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
    <component :is="headingTag">
      <button
        class="disclosure__toggle-btn"
        :class="{
          'disclosure__toggle-btn--open': isOpen,
          'disclosure__toggle-btn--fully-padded': isFullWidthMobile,
          caps: isCapitalized,
        }"
        type="button"
        :aria-expanded="isOpen ? 'true' : 'false'"
        :aria-controls="uuid"
        @click="toggleisOpen"
      >
        {{ heading }}
        <svg
          class="disclosure__toggle-btn__img"
          viewBox="0 0 22 13"
          aria-hidden="true"
          focusable="false"
        >
          <use :href="`${arrowDown}#arrow`"></use>
        </svg>
      </button>
    </component>
    <transition
      name="slide-down"
      enter-active-class="animate__animated animate__slideInDown"
      leave-active-class="animate__animated animate__slideOutUp"
    >
      <div
        class="disclosure__content"
        :class="{ 'disclosure__content--visible': isOpen }"
        :id="uuid"
      >
        <slot />
        <div v-if="mdContent" v-html="sanitizeHtmlContent"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import { Converter } from 'showdown';
import DOMPurify from 'dompurify';
import arrowDown from '@/assets/arrow-down.svg';

// used to provide unique id to each instance
let uuid = 0;

const mdConverter = new Converter({
  noHeaderId: true,
});

export default {
  name: 'Disclosure',
  data() {
    return {
      isOpen: this.defaultOpen,
      arrowDown,
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
    // make sure each disclosure area has a unique id for aria-controls
    this.uuid = `disclosure-${uuid}`;
    uuid += 1;
  },
  methods: {
    toggleisOpen() {
      this.isOpen = !this.isOpen;
    },
  },
  props: {
    defaultOpen: {
      type: Boolean,
    },
    heading: {
      type: String,
      required: true,
    },
    // must be h1 - h6
    headingTag: {
      type: String,
      validate: (prop) => prop.match(/h[1-6]/gim),
      required: true,
    },
    // no padding for arrow img in mobile view
    isFullWidthMobile: {
      type: Boolean,
      default: false,
    },
    isCapitalized: {
      type: Boolean,
      default: false,
    },
    // can display a component, parsed markdown or both
    childComponent: String,
    mdContent: String,
  },
};
</script>

<style lang="scss">
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';

.disclosure {
  &__toggle-btn {
    position: relative;
    width: 100%;
    padding: $gutter-small 0 $gutter-small 0.5rem;
    border-top: solid 1px $color-main;
    // avoid border collapse in case several buttons follow each other
    box-shadow: 0px 1px 0px 0px $color-main;

    &--fully-padded {
      padding: $gutter-small 0.8rem $gutter-small 2rem;
      @include breakpoint(desktop) {
        padding: $gutter-small 0 $gutter-small 0.5rem;
      }
    }

    &--open {
      box-shadow: none;

      .disclosure__toggle-btn__img {
        transform: rotate(-180deg);
        transition: transform 0.2s ease-out;
      }
    }

    &__img {
      // cannot use flex inside button so use float
      float: right;
      max-height: 1rem;
      max-width: 1rem;
      transform: translateY(50%);
      margin-left: auto;
      margin-right: 0;
      transition: transform 0.2s ease-out;
      stroke: $color-main;
    }

    &:hover svg {
      stroke: $color-secondary;
    }
  }

  &__content {
    // makes it posssible to transition while hiding from screen readers
    visibility: hidden;
    transform: scaleY(0);
    transform-origin: top;
    opacity: 0;
    max-height: 0;

    h2,
    h3,
    h4,
    h5 {
      margin-bottom: $gutter-small;
      font-size: 1rem;
      font-weight: $bold-soft;
      color: $color-main;

      &:not(:first-child) {
        margin-top: $gutter;
      }
    }

    &--visible {
      visibility: visible;
      opacity: 1;
      padding: $gutter $gutter-small;
      transform: scaleY(1);
      max-height: 100%;
      transition: max-height 0.5s, opacity 0.3s, transform 0.5s;
    }
  }
}
</style>
