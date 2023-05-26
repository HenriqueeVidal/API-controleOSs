import Cliente from "../Models/Cliente.js";

class ClienteController {
    static async list(req, res) {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    }

    static async getClienteById(req, res) {
        const id = parseInt(req.params.id);
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            res.status(404).json({ error: "Não encontrado" });
            return;
        }
        res.json(cliente);
    }

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

        if (!cpf_cnpj || !nome || !celular || !email || !cep || !endereco || !numero || !bairro || !cidade || !uf) {
            res.status(400).json({ error: "Informe todos os campos necessários!" });
            return;
        }

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

        if (!cpf_cnpj || !nome || !celular || !email || !cep || !endereco || !numero || !bairro || !cidade || !uf) {
            res.status(400).json({ error: "Informe todos os campos necessários!" });
            return;
        }

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
