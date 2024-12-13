<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/todos">All todos</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/todos/add/new">Add New todos</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">


</script>

<style scoped>
nav {
  background-color: #333;
  color: #ffff;
  padding: 1rem;
}

ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

a{
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #ddd;
  text-decoration: underline;
}

</style>