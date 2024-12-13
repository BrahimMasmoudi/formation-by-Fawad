import {defineStore} from "pinia";
import type {Todo} from "~/types/todo";

export const useTodoSTore = defineStore('todo', () => {
    const todos = ref<Todo[]>([])

    const getTodoById = (id: number) => todos.value.find((todo) => todo.id === id)

    const fetchTodos = async () => {
        try {
            const {data} = await useFetch<{ result: Todo[], success: boolean, statusCode: number }>('/api/todos')
            if (data.value) {
                todos.value = data?.value?.result ?? []
            }
        } catch (e) {
            console.error('failted to fetch', e)
        }
    }

    const addTodo = async (todo: Todo) => {
        await useFetch<Todo[]>('/api/todos', {
            method: 'POST',
            body: todo
        })
    }

    const updateTodo = async (updateTodo: Todo) => {
        const {data} = await useFetch<Todo[]>('/api/todos', {
            method: 'PUT',
            body: updateTodo
        })

    }

    const deleteTodo = async (id: number) => {
        const {data} = await useFetch<Todo[]>('/api/todos', {
            method: 'DELETE',
            body: {id}
        })

    }

    const updateIsCompleted = (id: number) => {
        const index = todos.value.findIndex((todo) => todo.id === id)

        if (index >= 0) {
            todos.value[index].isCompleted = !todos.value[index].isCompleted
        }
    }

    return {
        todos,
        addTodo,
        getTodoById,
        updateTodo,
        deleteTodo,
        updateIsCompleted,
        fetchTodos
    }
})