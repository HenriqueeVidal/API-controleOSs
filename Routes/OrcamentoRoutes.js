import express from 'express';
import OrcamentoController from '../Controllers/OrcamentoController.js';

const OrcamentoRouter = express.Router();

OrcamentoRouter.get('/', OrcamentoController.list);
OrcamentoRouter.post('/', OrcamentoController.createOrcamento);
OrcamentoRouter.get('/:id', OrcamentoController.getOrcamentoById);
OrcamentoRouter.delete('/:id', OrcamentoController.destroyOrcamento);
OrcamentoRouter.put('/:id', OrcamentoController.updateOrcamento);

export default OrcamentoRouter;
