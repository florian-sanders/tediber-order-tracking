<template>
  <section class="error-content" v-if="errorType">
    <h1 class="section-heading">
      <span class="section-heading__text">{{ heading }}</span>
    </h1>
    <div class="error-content__img-container">
      <img
        class="error-content__img-container__bear"
        :src="tediberBearImg"
        alt=""
        width="200"
      />
      <img
        class="error-content__img-container__teardrop"
        :src="teardropImg"
        alt=""
        width="30"
      />
    </div>
    <p class="error-content__text">
      {{ line1 }}
    </p>
    <p class="error-content__text">
      {{ line2 }}
    </p>
  </section>
  <AppLoading v-else />
</template>

<script>
import tediberBearImg from '@/assets/logo-tediber-bear.svg';
import teardropImg from '@/assets/teardrop.svg';

import AppLoading from './AppLoading.vue';

export default {
  name: 'AppError',
  data() {
    return {
      tediberBearImg,
      teardropImg,
      texts404: {
        heading: "La page demandée n'existe pas",
        line1:
          "Tediber a tout donné mais il n'a trouvé aucun résultat correspondant à cette recherche...",
        line2: "Peut-être une petite erreur dans l'adresse saisie ?",
      },
      texts500: {
        heading: 'Problème technique...',
        line1:
          "J'ai l'impression que Tediber rencontre de petits soucis techniques.",
        line2:
          "Pour plus d'informations contacter notre développeur en herbe sanders.florian@gmail.com (j'ai entendu dire qu'il cherchait un stage aussi...).",
      },
    };
  },
  mounted() {
    document.title = 'Erreur - Test Tediber';
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    errorType() {
      return this.$store.state.error || this.errorTypeProp;
    },
    heading() {
      return this[`texts${this.errorType}`].heading;
    },
    line1() {
      return this[`texts${this.errorType}`].line1;
    },
    line2() {
      return this[`texts${this.errorType}`].line2;
    },
  },
  props: {
    errorTypeProp: Number,
  },
  components: {
    AppLoading,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/_variables';

.error-content {
  margin-top: 5rem;
  padding: $gutter;

  .error-content__img-container {
    position: relative;
    margin: 1rem auto;
    width: max-content;

    &__bear {
      padding: 1rem;
    }

    &__teardrop {
      position: absolute;
      max-width: 1rem;
      opacity: 0;
      top: 35%;
      right: 17%;
      animation: 2s linear 2 dropdown;
    }
  }

  &__text {
    margin-top: 1rem;
    font-size: 1.2rem;
  }

  @keyframes dropdown {
    0% {
      transform: translate(0, 0);
      opacity: 1;
    }
    25% {
      transform: translate(-15%, 20px);
    }
    50% {
      transform: translate(0, 30px);
    }
    75% {
      transform: translate(10%, 40px);
    }
    100% {
      opacity: 0;
      transform: translate(0%, 50px);
    }
  }
}
</style>
