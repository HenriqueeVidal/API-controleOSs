// Importando os módulos necessários
import express from 'express'; // Framework Express para criar aplicativos web em Node.js
import OrcamentoController from '../Controllers/OrcamentoController.js'; // Controlador para o modelo Orcamento

// Criando um novo objeto de roteador do Express
const OrcamentoRouter = express.Router();

// Definindo as rotas para a entidade Orcamento

// Rota GET em '/orcamento/' - recupera todos os orcamentos
OrcamentoRouter.get('/', OrcamentoController.list);

// Rota POST em '/orcamento/' - cria um novo orcamento
OrcamentoRouter.post('/', OrcamentoController.createOrcamento);

// Rota GET em '/orcamento/:id' - recupera um orcamento pelo seu id
OrcamentoRouter.get('/:id', OrcamentoController.getOrcamentoById);

// Rota DELETE em '/orcamento/:id' - exclui um orcamento pelo seu id
OrcamentoRouter.delete('/:id', OrcamentoController.destroyOrcamento);

// Rota PUT em '/orcamento/:id' - atualiza um orcamento pelo seu id
OrcamentoRouter.put('/:id', OrcamentoController.updateOrcamento);

// Exportando o roteador para ser usado em outras partes da aplicação
export default OrcamentoRouter;
