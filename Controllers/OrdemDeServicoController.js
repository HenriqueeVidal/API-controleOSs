import { getAll, getById } from "../Models/OrdemDeServico.js";

class OrdemDeServicoController {
    static list(req, res) {
        res.json(getAll())
    }

    static find(req, res) {
        res.json(getById(req.params.id))
    }
}

export default OrdemDeServicoController