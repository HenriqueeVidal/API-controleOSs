/*
Produto
Descrição: Armazena informações sobre os produtos que estão sendo consertados ou passando por manutenção, como descrição, marca, modelo e número de série.
Atributos:
•	Id - número
•	Aparelho - texto
•	Descrição/Observações - texto
•	Versão - texto
•	Acessórios - texto
•	Marca - texto
•	Modelo - texto
•	Número_de_série - texto
 */

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
        type: Sequelize.STRING,
        allowNull: true
    },
    versao: {
        type: Sequelize.STRING,
        allowNull: true
    },
    acessorios: {
        type: Sequelize.STRING,
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