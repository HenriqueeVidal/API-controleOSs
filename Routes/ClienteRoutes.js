// Importando os módulos necessários
import express from 'express'; // Framework Express para criar aplicativos web em Node.js
import ClienteController from '../controllers/ClienteController.js'; // Controlador para o modelo Cliente

// Criando um novo objeto de roteador do Express
const ClienteRouter = express.Router();

// Definindo as rotas para a entidade Cliente

// Rota GET em '/clientes/' - recupera todos os clientes
ClienteRouter.get('/', ClienteController.list);

// Rota POST em '/clientes/' - cria um novo cliente
ClienteRouter.post('/', ClienteController.createCliente);

// Rota GET em '/clientes/:id' - recupera um cliente pelo seu id
ClienteRouter.get('/:id', ClienteController.getClienteById);

// Rota DELETE em '/clientes/:id' - exclui um cliente pelo seu id
ClienteRouter.delete('/:id', ClienteController.destroyCliente);

// Rota PUT em '/clientes/:id' - atualiza um cliente pelo seu id
ClienteRouter.put('/:id', ClienteController.updateCliente);

// Exportando o roteador para ser usado em outras partes da aplicação
export default ClienteRouter;
