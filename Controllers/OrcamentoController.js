import { getAll, getById } from "../Models/Orcamento.js";

class OrcamentoController {
    static list(req, res) {
        res.json(getAll())
    }

    static find(req, res) {
        res.json(getById(req.params.id))
    }
}

export default OrcamentoController