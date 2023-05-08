import express from 'express'
import ClienteRouter from '././Routes/ClienteRoutes.js'
import OrcamentoRouter from '././Routes/OrcamentoRoutes.js'

const app = express()
app.use(express.json())

app.use('/clientes', ClienteRouter)
app.use('/Orcamento', OrcamentoRouter)

app.listen(3000, () => { console.log('API Rodando na porta 3000!') })