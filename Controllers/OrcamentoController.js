import Orcamento from "../Models/Orcamento.js";

class OrcamentoController {
    static async list(req, res) {
        const orcamentos = await Orcamento.findAll();
        res.json(orcamentos);
    }

    static async getOrcamentoById(req, res) {
        const id = parseInt(req.params.id);
        const orcamento = await Orcamento.findByPk(id);
        if (!orcamento) {
            res.status(404).json({ error: "Não encontrado" });
            return;
        }
        res.json(orcamento);
    }

    static async destroyOrcamento(req, res) {
        const id = parseInt(req.params.id);
        const orcamento = await Orcamento.findByPk(id);
        if (!orcamento) {
            res.status(404).json({ error: "Não encontrado" });
            return;
        }
        await Orcamento.destroy({ where: { id: orcamento.id } });
        res.json({ message: "Deletado com sucesso" });
    }

    static async createOrcamento(req, res) {
        const { ordem_servico_id, valor_pecas, valor_mao_de_obra, status } = req.body;

        if (!ordem_servico_id || !valor_pecas || !valor_mao_de_obra || !status) {
            res.status(400).json({ error: "Informe todos os campos necessários!" });
            return;
        }

        const createdOrcamento = await Orcamento.create({ ordem_servico_id, valor_pecas, valor_mao_de_obra, status });
        res.status(201).json(createdOrcamento);
    }

    static async updateOrcamento(req, res) {
        const id = parseInt(req.params.id);
        const orcamento = await Orcamento.findByPk(id);

        if (!orcamento) {
            res.status(404).json({ error: "Não encontrado" });
            return;
        }

        const { ordem_servico_id, valor_pecas, valor_mao_de_obra, status } = req.body;

        if (!ordem_servico_id || !valor_pecas || !valor_mao_de_obra || !status) {
            res.status(400).json({ error: "Informe todos os campos necessários!" });
            return;
        }

        const updatedOrcamento = await Orcamento.update(
            { ordem_servico_id, valor_pecas, valor_mao_de_obra, status },
            { where: { id: orcamento.id } }
        );

        res.json(updatedOrcamento);
    }
}

export default OrcamentoController;
