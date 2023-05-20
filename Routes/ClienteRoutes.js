// Importing necessary modules
import express from 'express'
import ClienteController from '../controllers/ClienteController.js'

// Creating a new router object from Express
const ClienteRouter = express.Router()

// Defining the routes for the Cliente entity
// GET request on '/clientes/' - retrieves all clientes
ClienteRouter.get('/', ClienteController.list)

// POST request on '/clientes/' - creates a new cliente
ClienteRouter.post('/', ClienteController.createCliente)

// GET request on '/clientes/:id' - retrieves a cliente by its id
ClienteRouter.get('/:id', ClienteController.getClienteById)

// DELETE request on '/clientes/:id' - deletes a cliente by its id
ClienteRouter.delete('/:id', ClienteController.destroyCliente)

// PUT request on '/clientes/:id' - updates a cliente by its id
ClienteRouter.put('/:id', ClienteController.updateCliente)

// Exporting the router to be used in other parts of the application
export default ClienteRouter
