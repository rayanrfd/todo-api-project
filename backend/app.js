const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()
const todoRouter = require('./routes/todo.js')
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.json())
app.use(morgan('dev'))
app.use('/todos', todoRouter)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
