import express from 'express'
import ProdutoController from '../Controllers/ProdutoController.js'

const ProdutoRouter = express.Router()

ProdutoRouter.get('/', ProdutoController.list)
ProdutoRouter.get('/:id', ProdutoController.find)

export default ProdutoRouter