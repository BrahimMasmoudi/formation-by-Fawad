<template>
  <div>
    <NotesBanner/>

    <br>

    <TodoList :todos="recentTodos"/>
  </div>
</template>
<script setup lang="ts">

import {useTodoSTore} from "~/stores/todo";

const {todos} = useTodoSTore()

const recentTodos = computed(()=> todos.slice(-2).reverse())
</script>


<style scoped>

</style>