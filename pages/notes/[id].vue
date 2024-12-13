<template>
<h1> Notes {{$route.params.id}}</h1>
</template>
<script setup lang="ts">
import {definePageMeta} from "#imports";

definePageMeta({
  layout : 'custom'
})
</script>

<style scoped>

</style>