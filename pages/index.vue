<template>
  <div>
    <NotesBanner/>

    <br>

    <TodoList :todos="recentTodos"/>

  </div>
</template>
<script setup lang="ts">

import {useTodoSTore} from "~/stores/todo";

const todoStore = useTodoSTore()

await todoStore.fetchTodos()

const recentTodos = computed(()=> todoStore.todos?.slice(-2).reverse())

</script>


<style scoped>

</style>