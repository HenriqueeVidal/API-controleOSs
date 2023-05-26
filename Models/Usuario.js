/*
Usuário
Descrição: Gerencia informações sobre os usuários do sistema e suas permissões, como nome, e-mail, senha e papel (administrador, técnico, etc.). Permite implementar recursos de autenticação e autorização.
Atributos:
•	Id - número
•	Nome - texto
•	E-mail - texto
•	Senha - password
•	Cargo (administrador, técnico, etc.) - texto

 */

import { Sequelize } from "sequelize"
import db from "../DB.js"

const Usuario = db.define('usuario', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cargo: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default Usuario