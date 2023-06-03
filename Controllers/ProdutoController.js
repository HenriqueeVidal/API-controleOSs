import Produto from "../Models/Produto.js"

class ProdutoController {
    static async listProduto(req, res) {
        const produto = await Produto.findAll()
        res.json(produto)
    }

    static async getProdutoById(req, res) {
        id = parseInt(req.params.id)
        const produto = await Produto.findByPk(id)
        if (!produto) {
            res.status(404).json({ error: "Não encontrado" })
            return
        }
        res.json(produto)
    }

    static async createProduto(req, res) {
        const {
            aparelho,
            descricao,
            versao,
            acessorios,
            marca,
            modelo,
            numeroDeSerie,
        } = req.body
        if (!aparelho || !descricao || !versao || !acessorios || !marca || !modelo || !numeroDeSerie) {
            res.status(404).json({ error: "Informe todos os campos" })
            return
        }
        const createdProduto = await Produto.create({aparelho, descricao, versao, acessorios, marca, modelo, numeroDeSerie })
        res.status(201).json(createdProduto)
    }

    static async updateProduto(req, res) {
        const id = parseInt(req.params.id)
        const produto = Produto.findByPk(id)
        if (!produto) {
            res.status(404).json({ error: "Não encontrado" })
            return
        }
        if (!id || !aparelho || !descricao || !versao || !acessorios || !marca || !modelo || !numeroDeSerie) {
            res.status(404).json({ error: "Informe todos os campos" })
        }
        const updatedProduto = await Produto.update({aparelho, descricao, versao, acessorios, marca, modelo, numeroDeSerie }, { where: { id: produto.id } })
    }

    static async destroyProduto(req, res) {
        const id = parseInt(req.params.id)
        const produto = await Produto.findByPk(id)
        if (!produto) {
            res.status(404).json({ error: "Não encontrado" })
            return
        }
        await Produto.destroy({ where: { id: produto.id } })
        res.json({ message: "Removido com sucesso" })
    }
}

export default ProdutoController