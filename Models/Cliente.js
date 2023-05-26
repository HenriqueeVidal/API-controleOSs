import { Sequelize } from "sequelize"
import db from "../DB.js"

const Cliente = db.define('cliente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cpf_cnpj: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
    },
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING(15)
    },
    celular: {
        type: Sequelize.STRING(15),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    cep: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    complemento: {
        type: Sequelize.STRING(100)
    },
    bairro: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    uf: {
        type: Sequelize.CHAR(2),
        allowNull: false
    }
});

export default Cliente
