import OrdemDeServico from "../Models/OrdemDeServico.js";
import Cliente from "../Models/Cliente.js";
import Produto from "../Models/Produto.js";
import Orcamento from "../Models/Orcamento.js";

class OrdemDeServicoController {
    static async list(req, res) {
        const ordensDeServico = await OrdemDeServico.findAll()
        res.json(ordensDeServico)
    }

    static async getOrdemDeServicoById(req, res) {
        const id = parseInt(req.params.id);
        const ordemDeServico = await OrdemDeServico.findByPk(id, {
        });
        if (!ordemDeServico) {
            res.status(404).json({ error: "Não encontrado" });
            return;
        }
        res.json(ordemDeServico);
    }

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
        } = req.body

        if (!cliente_id || !produto_id || !data_abertura || !status) {
            res.status(400).json({ error: "Informe todos os campos necessários!" });
            return;
        }

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

        if (!cliente_id || !produto_id || !data_abertura || !status) {
            res.status(400).json({ error: "Informe todos os campos necessários!" });
            return;
        }

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
