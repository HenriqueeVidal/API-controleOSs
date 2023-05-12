import { getAll, getById } from "../Models/Produto.js"

class ProdutoController {
    static list(req, res) {
        res.json(getAll())
    }

    static find(req, res) {
        res.json(getById(req.params.id))
    }
}

export default ProdutoController