import Orcamento from "../Models/Orcamento.js";

class OrcamentoController {
    /**
     * Retorna a lista de orçamentos
     * @param {*} req - Requisição HTTP
     * @param {*} res - Resposta HTTP
     */
    static async list(req, res) {
        const orcamentos = await Orcamento.findAll();
        res.json(orcamentos);
    }

    /**
     * Retorna um orçamento pelo ID
     * @param {*} req - Requisição HTTP
     * @param {*} res - Resposta HTTP
     */
    static async getOrcamentoById(req, res) {
        const id = parseInt(req.params.id);
        const orcamento = await Orcamento.findByPk(id);
        if (!orcamento) {
            res.status(404).json({ error: "Não encontrado" });
            return;
        }
        res.json(orcamento);
    }

    /**
     * Remove um orçamento pelo ID
     * @param {*} req - Requisição HTTP
     * @param {*} res - Resposta HTTP
     */
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

    /**
     * Cria um novo orçamento
     * @param {*} req - Requisição HTTP
     * @param {*} res - Resposta HTTP
     */
    static async createOrcamento(req, res) {
        const { ordem_servico_id, valor_pecas, valor_mao_de_obra, status } = req.body;

        // Verifica se todos os campos necessários estão presentes
        if (!ordem_servico_id || !valor_pecas || !valor_mao_de_obra || !status) {
            res.status(400).json({ error: "Informe todos os campos necessários!" });
            return;
        }

        // Cria um novo orçamento
        const createdOrcamento = await Orcamento.create({ ordem_servico_id, valor_pecas, valor_mao_de_obra, status });
        res.status(201).json(createdOrcamento);
    }

    /**
     * Atualiza um orçamento pelo ID
     * @param {*} req - Requisição HTTP
     * @param {*} res - Resposta HTTP
     */
    static async updateOrcamento(req, res) {
        const id = parseInt(req.params.id);
        const orcamento = await Orcamento.findByPk(id);

        if (!orcamento) {
            res.status(404).json({ error: "Não encontrado" });
            return;
        }

        const { ordem_servico_id, valor_pecas, valor_mao_de_obra, status } = req.body;

        // Verifica se todos os campos necessários estão presentes
        if (!ordem_servico_id || !valor_pecas || !valor_mao_de_obra || !status) {
            res.status(400).json({ error: "Informe todos os campos necessários!" });
            return;
        }

        // Atualiza o orçamento
        const updatedOrcamento = await Orcamento.update(
            { ordem_servico_id, valor_pecas, valor_mao_de_obra, status },
            { where: { id: orcamento.id } }
        );

        res.json(updatedOrcamento);
    }
}

export default OrcamentoController;
