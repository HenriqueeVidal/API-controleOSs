import express from 'express'
import ClienteController from '../controllers/ClienteController.js'

const ClienteRouter = express.Router()

ClienteRouter.get('/', ClienteController.list)
ClienteRouter.get('/:id', ClienteController.find)
ClienteRouter.post('/', ClienteController.create)
ClienteRouter.put('/:id', ClienteController.update)
ClienteRouter.delete('/:id', ClienteController.delete)

export default ClienteRouter
