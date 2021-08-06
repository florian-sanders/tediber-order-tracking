<template>
  <div>
    <p v-for="(paragraph, index) in textContent" :key="index">
      {{paragraph}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'BasicTextSplitter',
  props: {
    textContent: {
      type: Array,
      validator: (prop) => prop.every((paragraph) => typeof paragraph === 'string'),
    },
  },
};
</script>

<style>
</style>
