import { getAll, getById } from "../Models/Usuario.js"

class UsuarioController {
    static list(req, res) {
        res.json(getAll())
    }

    static find(req, res) {
        res.json(getById(req.params.id))
    }
}

export default UsuarioController