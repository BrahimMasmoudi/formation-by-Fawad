<template>
  <h1>About</h1>
  <button @click="enableLayout"> Update Layout</button>
</template>
<script setup lang="ts">

definePageMeta({layout: false})
const enableLayout = () => {
  setPageLayout('custom')
}
</script>


<style scoped>

</style>