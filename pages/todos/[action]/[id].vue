<template>
  <TodoForm :todo="todo" :isEdit="isEdit"/>
</template>

<script setup lang="ts">
import type {Todo} from "~/types/todo";
import {useTodoSTore} from "~/stores/todo";

const route = useRoute()

const isEdit = computed (( )=> route.params.action == 'edit' )

const id = route.params.id as string

const {getTodoById} = useTodoSTore()

const todo = ref<Todo>(getTodoById(parseInt(id)) ?? {
  id : -1,
  title : '',
  description : '',
  isCompleted : false,
  createdAt : new Date().toISOString(),
})
</script>

<style scoped>

</style>