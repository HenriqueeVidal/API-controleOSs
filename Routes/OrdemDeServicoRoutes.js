// Importando os módulos necessários
import express from 'express'; // Framework Express para criar aplicativos web em Node.js
import OrdemDeServicoController from '../Controllers/OrdemDeServicoController.js'; // Controlador para o modelo OrdemDeServico

// Criando um novo objeto de roteador do Express
const OrdemDeServicoRouter = express.Router();

// Definindo as rotas para a entidade OrdemDeServico

// Rota GET em '/ordensdeservico/' - recupera todas as ordens de serviço
OrdemDeServicoRouter.get('/', OrdemDeServicoController.list);

// Rota POST em '/ordensdeservico/' - cria uma nova ordem de serviço
OrdemDeServicoRouter.post('/', OrdemDeServicoController.createOrdemDeServico);

// Rota GET em '/ordensdeservico/:id' - recupera uma ordem de serviço pelo seu id
OrdemDeServicoRouter.get('/:id', OrdemDeServicoController.getOrdemDeServicoById);

// Rota DELETE em '/ordensdeservico/:id' - exclui uma ordem de serviço pelo seu id
OrdemDeServicoRouter.delete('/:id', OrdemDeServicoController.destroyOrdemDeServico);

// Rota PUT em '/ordensdeservico/:id' - atualiza uma ordem de serviço pelo seu id
OrdemDeServicoRouter.put('/:id', OrdemDeServicoController.updateOrdemDeServico);

// Exportando o roteador para ser usado em outras partes da aplicação
export default OrdemDeServicoRouter;
