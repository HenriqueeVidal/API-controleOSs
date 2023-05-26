import express from 'express';
import ClienteRouter from './Routes/ClienteRoutes.js';
import OrcamentoRouter from "./Routes/OrcamentoRoutes.js";
import OrdemDeServicoRouter from "./Routes/OrdemDeServicoRoutes.js";
import ProdutoRouter from "./Routes/ProdutoRoutes.js";
import UsuarioRouter from "./Routes/UsuarioRoutes.js";

const app = express()

app.use(express.json())

app.use('/clientes', ClienteRouter)
app.use('/orcamentos', OrcamentoRouter)
app.use('/ordensdeservico', OrdemDeServicoRouter)
app.use('/produtos', ProdutoRouter)
app.use('/usuarios', UsuarioRouter)

app.listen(3000, () => { console.log('API Rodando na porta 3000!') })

//Usar o render para lançar como web service