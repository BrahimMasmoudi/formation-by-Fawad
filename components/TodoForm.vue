<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="title">Title</label>
      <input type="text" id="title" required v-model="form.title"></input>
    </div>

    <div>
      <label for="description">Description</label>
      <textarea id="description" required v-model="form.description"/>
    </div>

    <button type="submit" class="btn-success">{{ isEdit ? 'Update Todo' : 'Add todo' }}</button>
  </form>
</template>

<script setup lang="ts">
import type {Todo} from "~/types/todo";
import {useTodoSTore} from "~/stores/todo";

const {updateTodo, addTodo} = useTodoSTore()

const {todo, isEdit} = defineProps<{
  todo: Todo
  isEdit: boolean
}>()
const form = ref(todo)

const handleSubmit = () => {
  if (isEdit) {
    updateTodo(form.value)
  } else {
    form.value.id = Date.now()
    addTodo(form.value)
  }
  navigateTo(`/todos/${form.value.id}`)
}
</script>

<style scoped>
form {
  background-color: #fff;
  padding: 10px;
  margin: 20px 0;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

div {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

</style>