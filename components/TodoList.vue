<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <NuxtLink :to="`/todos/${todo.id}`">{{ todo.title}}</NuxtLink>
      <span>{{ todo.isCompleted ? 'Completed' : 'Not completed' }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type {Todo} from "~/types/todo";

defineProps<{
todos : Todo[]
}>()
</script>
<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #f9f9f9f9;
}
</style>