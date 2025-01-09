<template>
  <div class="conteiner" ref="containerWidth">
    <Result />
    <Summary />
  </div>
</template>

<script setup>
import { computed, onMounted, ref, useTemplateRef } from 'vue';
import Result from './components/Result.vue';
import Summary from './components/Summary.vue';


const width = useTemplateRef('containerWidth')
onMounted(() => {
  if(width.value.getBoundingClientRect().width > 360) {
     width.value.classList.add('desktob')
  }
})


</script>

<style lang="scss">
  @import '/src/main.sass';
  body {
    font-family: $font-family;
    font-size: $fontBody;
  }
</style>
