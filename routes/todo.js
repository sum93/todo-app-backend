const express = require('express')
const TodoController = require('../controller/TodoController')

const router = express.Router()
const controller = new TodoController()

router.get('/', (_, res) => controller.getAll(res))
router.post('/', (req, res) => controller.create(req, res))
router.delete('/:id', (req, res) => controller.remove(req, res))
router.patch('/:id', (req, res) => controller.update(req, res))

module.exports = router
