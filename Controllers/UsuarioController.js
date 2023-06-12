import Usuario from "../Models/Usuario.js"

class UsuarioController {
    static async listUsuario(req, res) {
        const usuario = await Usuario.findAll()
        res.json(usuario)
    }

    static async getUsuarioById(req, res) {
        const id = parseInt(req.params.id)
        const usuario = await Usuario.findByPk(id)
        if (!usuario) {
            res.status(404).json({ error: "Não encontrado" })
            return
        }
        res.json(usuario)
    }

    static async createUsuario(req, res) {
        const {nome, email, senha, cargo } = req.body
        if (!nome || !email || !senha || !cargo) {
            res.status(400).json({ error: "Informe todos os campos" })
            return
        }
        const createdUsuario = await Usuario.create({nome, email, senha, cargo })
        res.status(201).json(createdUsuario)
    }

    static async updateUsuario(req, res) {
        const id = parseInt(req.params.id)
        const usuario = await Usuario.findByPk(id)
        if (!usuario) {
            res.status(404).json({ error: "Não encontrado" })
            return
        }
        const { nome, email, senha, cargo } = req.body
        if (!nome || !email || !senha || !cargo) {
            res.status(400).json({ error: "Informe todos os campos" })
            return
        }
        const updatedUsuario = await Usuario.update({ nome, email, senha, cargo }, { where: { id: usuario.id } })
        res.json(updatedUsuario)
    }

    static async destroyUsuario(req, res) {
        const id = parseInt(req.params.id)
        const usuario = await Usuario.findByPk(id)
        if (!usuario) {
            res.status(404).json({ error: "Usuário não encontrado" })
            return
        }
        await Usuario.destroy({ where: { id: usuario.id } })
        res.json({ message: "Removido com sucesso" })
    }
}
export default UsuarioController