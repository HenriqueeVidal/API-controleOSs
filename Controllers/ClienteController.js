import { getAll, getById, create, update, remove } from "../Models/Cliente.js";

class ClienteController {
    static list(req, res) {
        res.json(getAll())
    }

    static find(req, res) {
        res.json(getById(req.params.id))
    }

    static create(req, res) {
        const newCliente = create(req.body)
        res.status(201).json(newCliente)
    }

    static update(req, res) {
        const updatedCliente = update(req.params.id, req.body)
        res.json(updatedCliente)
    }

    static delete(req, res) {
        remove(req.params.id)
        res.status(204).end()
    }
}

export default ClienteController
