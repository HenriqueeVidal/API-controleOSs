// Importando os módulos necessários
import express from 'express'; // Framework Express para criar aplicativos web em Node.js
import ClienteRouter from './Routes/ClienteRoutes.js'; // Roteador para as rotas relacionadas a clientes
import OrcamentoRouter from "./Routes/OrcamentoRoutes.js"; // Roteador para as rotas relacionadas a orçamentos
import OrdemDeServicoRouter from "./Routes/OrdemDeServicoRoutes.js"; // Roteador para as rotas relacionadas a ordens de serviço
import ProdutoRouter from "./Routes/ProdutoRoutes.js"; // Roteador para as rotas relacionadas a produtos
import UsuarioRouter from "./Routes/UsuarioRoutes.js"; // Roteador para as rotas relacionadas a usuários
import db from './DB.js'; // Módulo de banco de dados

// Criando uma nova aplicação Express
const app = express();

// Configurando o uso do formato JSON para corpos de requisição
app.use(express.json());

// Sincronizando o banco de dados
db.sync(() => console.log('Banco de dados preparado'));

// Montando o roteador de clientes no caminho '/clientes'
app.use('/clientes', ClienteRouter);

// Montando o roteador de orçamentos no caminho '/orcamentos'
app.use('/orcamentos', OrcamentoRouter);

// Montando o roteador de ordens de serviço no caminho '/ordensdeservico'
app.use('/ordensdeservico', OrdemDeServicoRouter);

// Montando o roteador de produtos no caminho '/produtos'
app.use('/produtos', ProdutoRouter);

// Montando o roteador de usuários no caminho '/usuarios'
app.use('/usuarios', UsuarioRouter);

// Iniciando a aplicação na porta 3000 ou na porta definida em process.env.PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('API Rodando na porta 3000 ou na porta definida em process.env.PORT!');
});
