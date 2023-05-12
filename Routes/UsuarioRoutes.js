import express from 'express'

import UsuarioController from '../Controllers/UsuarioController.js'

const UsuarioRouter = express.Router()

UsuarioRouter.get('/', UsuarioController.list)
UsuarioRouter.get('/:id', UsuarioController.find)

export default UsuarioRouter