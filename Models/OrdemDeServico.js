import { Sequelize } from "sequelize"
import db from "../DB.js"

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

export default OrdemServico
