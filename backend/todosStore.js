let todos = [

]

let nextId = 0

const getAllTodos = () => {
    return todos    
}

const getTodoById = (id) => {
    const todo = todos.find(todo => todo.id == Number(id))
    return todo
}

const addTodo = (task) => {
    nextId++
    const newTodo = {
        "id":nextId,
        "task":task,
    }
    todos.push(newTodo)
    return newTodo

}

const updateTodo = (id, newTask) => {
    const todo = todos.find(todo => todo.id == id)
    if (!todo) {
        throw new Error("Todo not found")
    } else {
        todo.task = newTask
    }
    return todo
}

const deleteTodo = (id) => {
    const idToDelete = todos.findIndex(task => task.id === Number(id))
    if (idToDelete !== -1) {
        todos.splice(idToDelete, 1)
    }
    return idToDelete !== -1
}

module.exports = {
    getAllTodos,
    getTodoById,
    addTodo,
    updateTodo,
    deleteTodo
}
