const router = require('express').Router()

const TodosController = require('./controllers/TodosController')
const UsersController = require('./controllers/UsersController')

router.post('/users', UsersController.create)
router.get('/users/:id', UsersController.read)

router.get('/todos', TodosController.list)
router.post('/todos', TodosController.create)
router.put('/todos/:id', TodosController.update)
router.put('/todos/:id/complete', TodosController.markAsDone)
router.delete('/todos/:id', TodosController.delete)

module.exports = router
