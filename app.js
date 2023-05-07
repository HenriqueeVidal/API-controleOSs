import express from 'express'
import ClienteController from '../controllers/ClienteController.js'

const app = express()
app.use(express.json())

app.use('/clientes',ClienteController)

app.listen(3000, () => {console.log('API Rodando na porta 3000!')})