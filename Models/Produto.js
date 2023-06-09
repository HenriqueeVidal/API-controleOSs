import { Sequelize } from "sequelize"
import db from "../DB.js"

const Produto = db.define('produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    aparelho: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    versao: {
        type: Sequelize.STRING,
        allowNull: true
    },
    acessorios: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    marca: {
        type: Sequelize.STRING,
        allowNull: false
    },
    modelo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numeroDeSerie: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

export default Produto