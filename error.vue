<template>
  {{error}}
  <NuxtLink to="/">Go Home</NuxtLink>
</template>
<script setup lang="ts">
import type {NuxtError} from '#app'
defineProps({
  error: Object as () => NuxtError
})
</script>

<i18n>
fr:
  error: "Une erreur est survenue"
  go-back: 'Retour à la page initiale'
en:
  create: An error occurred
  go-back: 'Go back home'
</i18n>
