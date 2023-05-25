import Cliente from "../Models/Cliente.js";

class ClienteController {
    /**
     * Retorna a lista de clientes
     * @param {*} req - Requisição HTTP
     * @param {*} res - Resposta HTTP
     */
    static async list(req, res) {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    }

    /**
     * Retorna um cliente pelo ID
     * @param {*} req - Requisição HTTP
     * @param {*} res - Resposta HTTP
     */
    static async getClienteById(req, res) {
        const id = parseInt(req.params.id);
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            res.status(404).json({ error: "Não encontrado" });
            return;
        }
        res.json(cliente);
    }

    /**
     * Remove um cliente pelo ID
     * @param {*} req - Requisição HTTP
     * @param {*} res - Resposta HTTP
     */
    static async destroyCliente(req, res) {
        const id = parseInt(req.params.id);
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            res.status(404).json({ error: "Não encontrado" });
            return;
        }
        await Cliente.destroy({ where: { id: cliente.id } });
        res.json({ message: "Deletado com sucesso" });
    }

    /**
     * Cria um novo cliente
     * @param {*} req - Requisição HTTP
     * @param {*} res - Resposta HTTP
     */
    static async createCliente(req, res) {
        const {
            cpf_cnpj,
            nome,
            telefone,
            celular,
            email,
            cep,
            endereco,
            numero,
            complemento,
            bairro,
            cidade,
            uf
        } = req.body;

        // Verifica se todos os campos necessários estão presentes
        if (!cpf_cnpj || !nome || !celular || !email || !cep || !endereco || !numero || !bairro || !cidade || !uf) {
            res.status(400).json({ error: "Informe todos os campos necessários!" });
            return;
        }

        // Cria um novo cliente
        const createdCliente = await Cliente.create({
            cpf_cnpj,
            nome,
            telefone,
            celular,
            email,
            cep,
            endereco,
            numero,
            complemento,
            bairro,
            cidade,
            uf
        });

        res.status(201).json(createdCliente);
    }

    /**
     * Atualiza um cliente pelo ID
     * @param {*} req - Requisição HTTP
     * @param {*} res - Resposta HTTP
     */
    static async updateCliente(req, res) {
        const id = parseInt(req.params.id);
        const cliente = await Cliente.findByPk(id);

        if (!cliente) {
            res.status(404).json({ error: "Não encontrado" });
            return;
        }

        const {
            cpf_cnpj,
            nome,
            telefone,
            celular,
            email,
            cep,
            endereco,
            numero,
            complemento,
            bairro,
            cidade,
            uf
        } = req.body;

        // Verifica se todos os campos necessários estão presentes
        if (!cpf_cnpj || !nome || !celular || !email || !cep || !endereco || !numero || !bairro || !cidade || !uf) {
            res.status(400).json({ error: "Informe todos os campos necessários!" });
            return;
        }

        // Atualiza o cliente
        const updatedCliente = await Cliente.update(
            {
                cpf_cnpj,
                nome,
                telefone,
                celular,
                email,
                cep,
                endereco,
                numero,
                complemento,
                bairro,
                cidade,
                uf
            },
            { where: { id: cliente.id } }
        );

        res.json(updatedCliente);
    }
}

export default ClienteController;
