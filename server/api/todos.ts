const todos = [{
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
}]


export default defineEventHandler(async (event) => {
  // get all todos
    if (event.node.req.method === 'GET') {
        return {
            result : todos,
            success : true,
            statusCode: 201,
        }
    }

    // add new todo
    if (event.node.req.method === 'POST') {
        const newTodo = await readBody(event)
        todos.push(newTodo)
        return  {
            result : newTodo,
            success : true,
            statusCode: 201,
        }
    }

    if(event.node.req.method === 'PUT') {
        const updatedTodo = await readBody(event)
        const todoIndex = todos.findIndex((todo) => todo.id === updatedTodo.id)
        if( todoIndex !== 1) {
            todos[todoIndex] = updatedTodo
            return {
                result : updatedTodo,
                success : true,
                statusCode : 201
            }
        }
        return {
            statusCode : 404
        }
    }

    if(event.node.req.method === 'DELETE') {
        const {id}  = await readBody(event)
        const todoIndex = todos.findIndex((todo) => todo.id === id)
        if(todoIndex !== -1) {
            todos.splice(todoIndex, 1)
            return {
                success : true,
                statusCode : 204
            }
        }
        return {
            statusCode : 404
        }
    }
    return {error : 'invalid method'}
})