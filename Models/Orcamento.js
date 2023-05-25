/*
-- Tabela Orçamento
CREATE TABLE orcamento (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ordem_servico_id INTEGER NOT NULL,
    valor_pecas DECIMAL(10, 2) NOT NULL,
    valor_mao_de_obra DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) NOT NULL,
    FOREIGN KEY (ordem_servico_id) REFERENCES ordem_servico (id)
);
 */

import { Sequelize } from "sequelize";
import db from "../db.js";
import OrdemServico from "./OrdemDeServico.js";

// Definição do modelo Orcamento
const Orcamento = db.define('orcamento', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ordem_servico_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    valor_pecas: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    },
    valor_mao_de_obra: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    },
    status: {
        type: Sequelize.STRING(20),
        allowNull: false
    }
});

Orcamento.belongsTo(OrdemServico, { foreignKey: 'ordem_servico_id' });

export default Orcamento;