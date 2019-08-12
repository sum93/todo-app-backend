const mongoose = require('mongoose')
const Todo = require('../model/todo')

class TodoController {
  getAll(res) {
    Todo.find((err, todos) => {
      if (err) {
        return res.json(err)
      }
      res.json(todos)
    })
  }

  create(req, res) {
    const newTodo = {
      message: req.body.data.message,
      completed: false
    }

    Todo.create(newTodo).then((err, todo) => {
      if (err) {
        return res.json(err)
      }
      res.json(todo)
    })
  }

  update(req, res) {
    const updatedTodo = {
      message: req.body.data.todo.message,
      completed: req.body.data.todo.completed
    }

    Todo.updateOne({ _id: req.params.id }, updatedTodo)
      .then(info => {
        res.json(info.nModified)
      })
      .catch(err => {
        res.json(err)
      })
  }

  remove(req, res) {
    Todo.deleteOne({ _id: req.params.id })
      .then(info => {
        res.json(info.deletedCount)
      })
      .catch(err => {
        res.json(err)
      })
  }

  removeDone(req, res) {
    Todo.deleteMany({completed: true})
      .then(info => {
        res.json(info.deletedCount)
      })
      .catch(err => {
        res.json(err)
      })
  }
}

module.exports = TodoController
