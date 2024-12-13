import {defineStore} from "pinia";
import type {Todo} from "~/types/todo";
import SecureLS from "secure-ls";

export const useTodoSTore = defineStore('todo', () => {
    const todos = ref<Todo[]>([{
        id: 1,
        title: 'Task 1',
        description: 'This is task 1',
        isCompleted: false,
        createdAt: new Date().toISOString()
    }, {
        id: 2,
        title: 'Task 2',
        description: 'This is task 2',
        isCompleted: false,
        createdAt: new Date().toISOString()
    }, {
        id: 3,
        title: 'Task 3',
        description: 'This is task 3',
        isCompleted: true,
        createdAt: new Date().toISOString()
    }])

    const getTodoById = (id: number) => todos.value.find((todo) => todo.id === id)


    const addTodo = (todo: Todo) => todos.value.push(todo)

    const updateTodo = (updateTodo: Todo) => {
        const index = todos.value.findIndex((todo) => todo.id === updateTodo.id)

        if (index >= 0) {
            todos.value[index] = updateTodo
        }
    }

    const deleteTodo = (id: number) => {
        todos.value = todos.value.filter((todo) => todo.id === id)
    }

    const updateIsCompleted = (id: number) => {
        const index = todos.value.findIndex((todo) => todo.id === id)

        if (index >= 0) {
            todos.value[index].isCompleted = !todos.value[index].isCompleted
        }
    }

    return {
        todos,
        getTodoById,
        addTodo,
        updateTodo,
        deleteTodo,
        updateIsCompleted
    }
}, {
    persist: {
        storage: {
            getItem(key) {
                return new SecureLS({
                    encodingType: 'des',
                    encryptionSecret: '#&@fcvhgjhbkjnl'
                }).get(key)
            },
            setItem(key, value) {
                return new SecureLS({
                    encodingType: 'des',
                    encryptionSecret: '#&@fcvhgjhbkjnl'
                }).set(key, value)
            }
        }
    }
})