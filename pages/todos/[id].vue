<template>
  <div v-if="todo">
    <h1>{{ todo.title }} </h1>
    <p>{{ todo.description }}</p>

    <hr class="my-5">

    <p> Completed : {{ todo.isCompleted ? 'Yes' : 'No' }}</p>
    <p> Created at : 12:00</p>

    <NuxtLink :to="`/todos/edit/${todo.id}`" class="btn">Edit</NuxtLink>

    <button :class="todo.isCompleted ? 'btn-danger' : 'btn-success'" @click="()=> updateIsCompleted(todo!.id)">
      Mark as {{todo.isCompleted ? ' not completed' : 'completed'}}
    </button>
  </div>
</template>

<script setup lang="ts">
import {useTodoSTore} from "~/stores/todo";

const {getTodoById, updateIsCompleted} = useTodoSTore()
const route = useRoute()
const todo = getTodoById(parseInt(route.params.id as string))

</script>

<style>
.btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
  font-size: 16px;
}

.btn:hover {
  background-color: #0056b3;
}

.btn-success {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
  font-size: 16px;
}

.btn-success:hover {
  background-color: #218838;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
  font-size: 16px;
}

.btn-danger:hover {
  background-color: #c62828;
}
</style>