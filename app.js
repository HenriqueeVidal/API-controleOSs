import express from 'express'
import ClienteRouter from '././Routes/ClienteRoutes.js'
import OrcamentoRouter from '././Routes/OrcamentoRoutes.js'
import ProdutoRouter from './Routes/ProdutoRoutes.js'
import OrdemDeServicoRouter from './Routes/OrdemDeServicoRoutes.js'
import UsuarioRouter from './Routes/UsuarioRoutes.js'

const app = express()
app.use(express.json())

app.use('/Clientes', ClienteRouter)
app.use('/Orcamento', OrcamentoRouter)
app.use('/OrdemDeServico', OrdemDeServicoRouter)
app.use('/Produto', ProdutoRouter)
app.use('/Usuario', UsuarioRouter)


app.listen(3000, () => { console.log('API Rodando na porta 3000!') })