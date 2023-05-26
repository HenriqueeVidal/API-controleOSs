import { Sequelize } from "sequelize"
import db from "../DB.js"

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

export default Orcamento