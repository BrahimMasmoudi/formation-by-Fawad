<template>
  <div>
    <NavBar/>
    <main>
      <slot/>
    </main>
  </div>
</template>
<script setup lang="ts">

</script>


<style scoped>
main {
  padding:  1rem;
}
</style>