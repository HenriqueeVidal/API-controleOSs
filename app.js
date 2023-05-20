// Importing necessary modules
import express from 'express';
import ClienteRouter from './Routes/ClienteRoutes.js';
import OrcamentoRouter from "./Routes/OrcamentoRoutes.js";
import OrdemDeServicoRouter from "./Routes/OrdemDeServicoRoutes.js";
import ProdutoRouter from "./Routes/ProdutoRoutes.js";
import UsuarioRouter from "./Routes/UsuarioRoutes.js";


// Creating a new express application
const app = express()

// Telling the app to use JSON for request bodies
app.use(express.json())

// Mounting the Cliente router at the '/clientes' path
app.use('/clientes', ClienteRouter)
app.use('/orcamentos', OrcamentoRouter)
app.use('/ordensdeservico', OrdemDeServicoRouter)
app.use('/produtos', ProdutoRouter)
app.use('/usuarios', UsuarioRouter)

// Telling the app to listen for requests on port 3000
app.listen(3000, () => {console.log('API Rodando na porta 3000!')})
// Compare this snippet from pi2sem-Ling-Prog\index.js: