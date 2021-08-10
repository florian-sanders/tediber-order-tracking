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
      <div class="flexed-content__more-info">
        <h2 class="flexed-content__more-info__heading">Plus d'informations</h2>
        <p class="flexed-content__more-info__note bold">
          Note&nbsp;: Dans le menu de navigation, seuls les liens de retour vers
          l'accueil sont fonctionnels.
        </p>
        <transition name="fade" mode="out-in">
          <div class="flexed-content__more-info__texts" v-if="textsLoaded">
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
          <TediberLoader
            class="flexed-content__more-info__loader"
            v-else-if="isLoading"
          />
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import AppDisclosure from './AppDisclosure.vue';
import TediberLoader from './TediberLoader.vue';

export default {
  name: 'AppHome',
  components: {
    AppDisclosure,
    TediberLoader,
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
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';

.flexed-content {
  position: relative;
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
    position: relative;

    @include breakpoint(desktop) {
      max-width: 50%;
    }

    &__heading {
      font-size: 1.2rem;
      margin-bottom: $gutter;
    }

    &__note {
      margin: 1rem 0;
    }

    &__loader {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s, transform 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.9) translateX(100%);
}
</style>
