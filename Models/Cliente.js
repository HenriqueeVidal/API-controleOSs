/*
-- Tabela Cliente
CREATE TABLE cliente (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cpf_cnpj VARCHAR(20) UNIQUE NOT NULL,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(15),
    celular VARCHAR(15) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    cep VARCHAR(10) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    numero INT NOT NULL,
    complemento VARCHAR(100),
    bairro VARCHAR(100) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    uf CHAR(2) NOT NULL
);
CREATE INDEX idx_cliente_email ON cliente (email);
CREATE INDEX idx_cliente_cpf_cnpj ON cliente (cpf_cnpj);
 */

import { Sequelize } from "sequelize";
import db from "../DB.js";

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

Cliente.init({}, {
    indexes: [
        {
            unique: true,
            fields: ['email'],
            name: 'idx_cliente_email'
        },
        {
            unique: true,
            fields: ['cpf_cnpj'],
            name: 'idx_cliente_cpf_cnpj'
        }
    ]
});

export default Cliente;
