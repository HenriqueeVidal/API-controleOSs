import express from 'express';
import OrdemDeServicoController from '../Controllers/OrdemDeServicoController.js';

const OrdemDeServicoRouter = express.Router();

OrdemDeServicoRouter.get('/', OrdemDeServicoController.list);
OrdemDeServicoRouter.post('/', OrdemDeServicoController.createOrdemDeServico);
OrdemDeServicoRouter.get('/:id', OrdemDeServicoController.getOrdemDeServicoById);
OrdemDeServicoRouter.delete('/:id', OrdemDeServicoController.destroyOrdemDeServico);
OrdemDeServicoRouter.put('/:id', OrdemDeServicoController.updateOrdemDeServico);

export default OrdemDeServicoRouter;
