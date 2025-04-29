const express = require('express')
const {getAllTodos, getTodoById, addTodo, updateTodo, deleteTodo} = require('../todosStore.js')

todoRouter = express.Router()

todoRouter.get('/', (req, res, next) => {
    const todos = getAllTodos()
    if (todos) {
        res.status(200).send(todos)
    } else {
        res.status(404).send("Not found")
    }
})

todoRouter.get('/:id', (req, res, next) => {
    const id = Number(req.params.id)
    const todo = getTodoById(id)
    if (todo) {
        res.status(200).send(todo)
    } else {
        res.status(404).json({ error: "Todo not found" })
    }
})

todoRouter.post('/', (req, res, next) => {
    const body = req.body
    const task = body.task
    if (task) {
        const newTodo = addTodo(task)
        res.status(201).send(newTodo)
    } else {
        res.status(400).send("Not created")
    }
})

todoRouter.put('/:id', (req, res, next) => {
    const id = Number(req.params.id)
    const body = req.body
    const task = body.task
    const todo = getTodoById(id)
    if (todo) {
        const updatedTodo = updateTodo(id, task)
        res.status(200).send(updatedTodo)
    } else {
        res.status(400).send("Not updated")
    }
})

todoRouter.delete('/:id', (req, res, next) => {
    const id = Number(req.params.id)
    const todo = getTodoById(id)
    if (todo) {
        deleteTodo(id)
        res.status(204).send()
    } else {
        res.status(404).json({ error: "Todo not found" })
    }
})

module.exports = todoRouter
