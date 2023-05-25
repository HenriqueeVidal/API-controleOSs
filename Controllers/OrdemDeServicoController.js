import OrdemDeServico from "../Models/OrdemDeServico.js";
import Cliente from "../Models/Cliente.js";
import Produto from "../Models/Produto.js";
import Orcamento from "../Models/Orcamento.js";

class OrdemDeServicoController {
    /**
     * Retorna a lista de ordens de serviço
     * @param {*} req - Requisição HTTP
     * @param {*} res - Resposta HTTP
     */
    static async list(req, res) {
        const ordensDeServico = await OrdemDeServico.findAll({
            include: [Cliente, Produto, Orcamento]
        });
        res.json(ordensDeServico);
    }

    /**
     * Retorna uma ordem de serviço pelo ID
     * @param {*} req - Requisição HTTP
     * @param {*} res - Resposta HTTP
     */
    static async getOrdemDeServicoById(req, res) {
        const id = parseInt(req.params.id);
        const ordemDeServico = await OrdemDeServico.findByPk(id, {
            include: [Cliente, Produto, Orcamento]
        });
        if (!ordemDeServico) {
            res.status(404).json({ error: "Não encontrado" });
            return;
        }
        res.json(ordemDeServico);
    }

    /**
     * Remove uma ordem de serviço pelo ID
     * @param {*} req - Requisição HTTP
     * @param {*} res - Resposta HTTP
     */
    static async destroyOrdemDeServico(req, res) {
        const id = parseInt(req.params.id);
        const ordemDeServico = await OrdemDeServico.findByPk(id);
        if (!ordemDeServico) {
            res.status(404).json({ error: "Não encontrado" });
            return;
        }
        await OrdemDeServico.destroy({ where: { id: ordemDeServico.id } });
        res.json({ message: "Deletado com sucesso" });
    }

    /**
     * Cria uma nova ordem de serviço
     * @param {*} req - Requisição HTTP
     * @param {*} res - Resposta HTTP
     */
    static async createOrdemDeServico(req, res) {
        const {
            cliente_id,
            produto_id,
            data_abertura,
            data_pronto,
            data_saida,
            status,
            diagnostico_defeito_reclamacao,
            solucao,
            anexos
        } = req.body;

        // Verifica se todos os campos necessários estão presentes
        if (!cliente_id || !produto_id || !data_abertura || !status) {
            res.status(400).json({ error: "Informe todos os campos necessários!" });
            return;
        }

        // Cria uma nova ordem de serviço
        const createdOrdemDeServico = await OrdemDeServico.create({
            cliente_id,
            produto_id,
            data_abertura,
            data_pronto,
            data_saida,
            status,
            diagnostico_defeito_reclamacao,
            solucao,
            anexos
        });

        res.status(201).json(createdOrdemDeServico);
    }

    /**
     * Atualiza uma ordem de serviço pelo ID
     * @param {*} req - Requisição HTTP
     * @param {*} res - Resposta HTTP
     */
    static async updateOrdemDeServico(req, res) {
        const id = parseInt(req.params.id);
        const ordemDeServico = await OrdemDeServico.findByPk(id);

        if (!ordemDeServico) {
            res.status(404).json({ error: "Não encontrado" });
            return;
        }

        const {
            cliente_id,
            produto_id,
            data_abertura,
            data_pronto,
            data_saida,
            status,
            diagnostico_defeito_reclamacao,
            solucao,
            anexos
        } = req.body;

        // Verifica se todos os campos necessários estão presentes
        if (!cliente_id || !produto_id || !data_abertura || !status) {
            res.status(400).json({ error: "Informe todos os campos necessários!" });
            return;
        }

        // Atualiza a ordem de serviço
        const updatedOrdemDeServico = await OrdemDeServico.update(
            {
                cliente_id,
                produto_id,
                data_abertura,
                data_pronto,
                data_saida,
                status,
                diagnostico_defeito_reclamacao,
                solucao,
                anexos
            },
            { where: { id: ordemDeServico.id } }
        );

        res.json(updatedOrdemDeServico);
    }
}

export default OrdemDeServicoController;
