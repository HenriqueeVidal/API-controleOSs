/*
-- Tabela Ordem de Serviço
CREATE TABLE ordem_servico (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cliente_id INTEGER NOT NULL,
    produto_id INTEGER NOT NULL,
    data_abertura DATE NOT NULL,
    data_pronto DATE,
    data_saida DATE,
    status VARCHAR(20) NOT NULL DEFAULT 'aberta',
    diagnostico_defeito_reclamacao TEXT,
    solucao TEXT,
    anexos BLOB,
    FOREIGN KEY (cliente_id) REFERENCES cliente (id),
    FOREIGN KEY (produto_id) REFERENCES produto (id)
);
 */

import { Sequelize } from "sequelize";
import db from "../db.js";

const OrdemServico = db.define('ordem_servico', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cliente_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    produto_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    data_abertura: {
        type: Sequelize.DATE,
        allowNull: false
    },
    data_pronto: {
        type: Sequelize.DATE
    },
    data_saida: {
        type: Sequelize.DATE
    },
    status: {
        type: Sequelize.STRING(20),
        allowNull: false,
        defaultValue: 'aberta'
    },
    diagnostico_defeito_reclamacao: {
        type: Sequelize.TEXT
    },
    solucao: {
        type: Sequelize.TEXT
    },
    anexos: {
        type: Sequelize.BLOB
    }
});

OrdemServico.belongsTo(Cliente, { foreignKey: 'cliente_id' });
OrdemServico.belongsTo(Produto, { foreignKey: 'produto_id' });
OrdemServico.hasOne(Orcamento, { foreignKey: 'ordem_servico_id' });

export default OrdemServico;
