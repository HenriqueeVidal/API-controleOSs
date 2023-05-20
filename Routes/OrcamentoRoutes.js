// importing the necessaries modules
import express from 'express'
import OrcamentoController from '../Controllers/OrcamentoController.js'

// Creating a new router object from Express
const OrcamentoRouter = express.Router()

// Defining the routes for the Orcamento entity
// GET request on '/orcamento/' - retrieves all orcamentos
OrcamentoRouter.get('/', OrcamentoController.list)

// POST request on '/orcamento/' - creates a new orcamento
OrcamentoRouter.post('/', OrcamentoController.createOrcamento)

// GET request on '/orcamento/:id' - retrieves a orcamento by its id
OrcamentoRouter.get('/:id', OrcamentoController.getOrcamentoById)

// DELETE request on '/orcamento/:id' - deletes a orcamento by its id
OrcamentoRouter.delete('/:id', OrcamentoController.destroyOrcamento)

// PUT request on '/orcamento/:id' - updates a orcamento by its id
OrcamentoRouter.put('/:id', OrcamentoController.updateOrcamento)

// Exporting the router to be used in other parts of the application
export default OrcamentoRouter