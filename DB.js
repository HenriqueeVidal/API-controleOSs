import { Sequelize } from "sequelize"; // Importa o módulo Sequelize

// Cria uma nova instância do Sequelize para se conectar ao banco de dados
const db = new Sequelize(
    "database", // Nome do banco de dados
    "user", // Nome de usuário do banco de dados
    "passw", // Senha do banco de dados
    {
        dialect: "sqlite", // Define o dialeto como SQLite
        storage: './db.sqlite' // Define o arquivo de armazenamento do banco de dados
    }
);

export default db; // Exporta a instância do banco de dados

// O código acima cria uma conexão com o banco de dados SQLite utilizando o Sequelize.
// O banco de dados é identificado pelo nome "database" e a conexão utiliza um nome de usuário "user" e uma senha "passw".
// O dialeto é definido como SQLite e o arquivo "db.sqlite" é especificado como o local de armazenamento do banco de dados.

// A instância do Sequelize, representada pela constante "db", será utilizada para realizar operações no banco de dados,
// como definir modelos, executar consultas, realizar migrações, entre outras funcionalidades oferecidas pelo Sequelize.
