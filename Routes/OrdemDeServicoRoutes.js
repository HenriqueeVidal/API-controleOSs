// Importing necessary modules
import express from 'express'
import OrdemDeServicoController from '../Controllers/OrdemDeServicoController.js'

// Creating a new router object from Express
const OrdemDeServicoRouter = express.Router()

// Defining the routes for the OrdemDeServico entity
// GET request on '/ordensdeservico/' - retrieves all ordens de serviço
OrdemDeServicoRouter.get('/', OrdemDeServicoController.list)

// POST request on '/ordensdeservico/' - creates a new ordem de serviço
OrdemDeServicoRouter.post('/', OrdemDeServicoController.createOrdemDeServico)

// GET request on '/ordensdeservico/:id' - retrieves a ordem de serviço by its id
OrdemDeServicoRouter.get('/:id', OrdemDeServicoController.getOrdemDeServicoById)

// DELETE request on '/ordensdeservico/:id' - deletes a ordem de serviço by its id
OrdemDeServicoRouter.delete('/:id', OrdemDeServicoController.destroyOrdemDeServico)

// PUT request on '/ordensdeservico/:id' - updates a ordem de serviço by its id
OrdemDeServicoRouter.put('/:id', OrdemDeServicoController.updateOrdemDeServico)

// Exporting the router to be used in other parts of the application
export default OrdemDeServicoRouter
