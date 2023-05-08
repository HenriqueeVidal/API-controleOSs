import express from 'express'
import OrcamentoController from '../Controllers/OrcamentoController.js'

const OrcamentoRouter = express.Router()

OrcamentoRouter.get('/', OrcamentoController.list)
OrcamentoRouter.get('/:id', OrcamentoController.find)

export default OrcamentoRouter