<template>
<div>
  <h1>All todos:</h1>
  <TodoList :todos="todos"/>
</div>
</template>

<script setup lang="ts">
import {useTodoSTore} from "~/stores/todo";

const {todos} = useTodoSTore()

</script>


<style scoped>

</style>