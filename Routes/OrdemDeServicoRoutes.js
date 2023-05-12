import express from 'express'
import OrdemDeServicoController from '../Controllers/OrdemDeServicoController.js'

const OrdemDeServicoRouter = express.Router()

OrdemDeServicoRouter.get('/', OrdemDeServicoController.list)
OrdemDeServicoRouter.get('/:id', OrdemDeServicoController.find)

export default OrdemDeServicoRouter