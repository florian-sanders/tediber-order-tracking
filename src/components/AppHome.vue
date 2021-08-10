<template>
  <section class="section">
    <h1 class="section-heading">
      <span class="section-heading__text">Bienvenue</span>
    </h1>
    <div class="flexed-content">
      <ul class="flexed-content__test-links">
        <li>
          <router-link to="order/450652"
            >Test 1 - Commande n°450652</router-link
          >
        </li>
        <li>
          <router-link to="order/450653"
            >Test 2 - Commande n°450653</router-link
          >
        </li>
        <li>
          <router-link to="order/450654"
            >Test 3 - Commande n°450654</router-link
          >
        </li>
        <li>
          <router-link to="order/450655"
            >Test 4 - Commande n°450655</router-link
          >
        </li>
        <li>
          <router-link to="order/450656"
            >Test 5 - Commande n°450656</router-link
          >
        </li>
        <li>
          <router-link to="order/4506565985"
            >Erreur404 - Commande introuvable</router-link
          >
        </li>
        <li>
          <router-link to="order/500"
            >Erreur500 - Le serveur ne répond pas</router-link
          >
        </li>
      </ul>
      <div class="flexed-content__more-info" v-if="textsLoaded">
        <h2 class="flexed-content__more-info__heading">Plus d'informations</h2>
        <AppDisclosure
          heading="Etapes clés"
          headingTag="h3"
          defaultOpen
          isCapitalized
          :mdContent="steps"
        />
        <AppDisclosure
          heading="Choix techniques (et doutes)"
          headingTag="h3"
          isCapitalized
          :mdContent="choices"
        />
        <AppDisclosure
          heading="Navigateurs testés"
          headingTag="h3"
          isCapitalized
          :mdContent="tests"
        />
        <AppDisclosure heading="API" headingTag="h3" :mdContent="api" />
        <AppDisclosure
          heading="Conventions et nommage"
          headingTag="h3"
          isCapitalized
          :mdContent="naming"
        />
        <AppDisclosure
          heading="Expérience Utilisateur"
          headingTag="h3"
          isCapitalized
          :mdContent="ux"
        />
        <AppDisclosure
          heading="Accessibilité"
          headingTag="h3"
          isCapitalized
          :mdContent="a11y"
        />
      </div>
    </div>
  </section>
</template>

<script>
import AppDisclosure from '@/components/AppDisclosure.vue';

export default {
  name: 'AppHome',
  components: {
    AppDisclosure,
  },
  computed: {
    textsLoaded() {
      return !!this.$store.state.texts;
    },
    steps() {
      return this.$store.state.texts.steps;
    },
    choices() {
      return this.$store.state.texts.choices;
    },
    tests() {
      return this.$store.state.texts.tests;
    },
    api() {
      return this.$store.state.texts.api;
    },
    naming() {
      return this.$store.state.texts.naming;
    },
    ux() {
      return this.$store.state.texts.ux;
    },
    a11y() {
      return this.$store.state.texts.a11y;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';

.flexed-content {
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @include breakpoint(desktop) {
    flex-direction: row;
  }

  &__test-links {
    list-style: circle;
    margin: 1rem auto;

    @include breakpoint(desktop) {
      max-width: 50%;
    }

    li {
      margin-bottom: 1rem;
    }
  }

  &__more-info {
    @include breakpoint(desktop) {
      max-width: 50%;
    }

    &__heading {
      font-size: 1.2rem;
      margin-bottom: $gutter;
    }
  }
}
</style>
