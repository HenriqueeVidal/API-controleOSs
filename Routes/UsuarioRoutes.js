import express from 'express'

import UsuarioController from '../Controllers/UsuarioController.js'

const UsuarioRouter = express.Router()

UsuarioRouter.get('/', UsuarioController.listUsuario)
UsuarioRouter.post('/', UsuarioController.createUsuario)
UsuarioRouter.get('/:id', UsuarioController.getUsuarioById)
UsuarioRouter.delete('/:id', UsuarioController.destroyUsuario)
UsuarioRouter.put('/:id', UsuarioController.updateUsuario)

export default UsuarioRouter