import express from 'express'
import ProdutoController from '../Controllers/ProdutoController.js'

const ProdutoRouter = express.Router()

ProdutoRouter.get('/', ProdutoController.listProduto)
ProdutoRouter.post('/', ProdutoController.createProduto)
ProdutoRouter.get('/:id', ProdutoController.getProdutoById)
ProdutoRouter.delete('/:id', ProdutoController.destroyProduto)
ProdutoRouter.put('/:id', ProdutoController.updateProduto)

export default ProdutoRouter