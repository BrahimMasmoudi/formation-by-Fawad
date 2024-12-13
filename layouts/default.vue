<template>
  <NuxtLink to="/about">about</NuxtLink>
  <br/>
  <NuxtLink to="/notes">Notes</NuxtLink>
  <br/>
  <NuxtLink :to="`/notes/${randomNumber()}`">Notes by id</NuxtLink>

  <slot/>
</template>
<script setup lang="ts">
const randomNumber = () => Math.floor(Math.random() * 100) + 1

</script>


<style scoped>

</style>