// Import the necessary functions and classes from the models
import { OrdemDeServico, create, destroy, findAll, findByPk, update } from "../models/OrdemDeServico.js"

// Define a controller for handling operations related to 'OrdemDeServico'
class OrdemDeServicoController {
    // Handles a request to get a list of all 'OrdemDeServico' records
    static list(req,res){
        res.json(findAll())
    }

    // Handles a request to get a 'OrdemDeServico' record by ID
    static getOrdemDeServicoById(req,res){
        const id = parseInt(req.params.id) // Parse the ID from the request parameters
        const ordemDeServico = findByPk(id) // Find the 'OrdemDeServico' by primary key
        if(!ordemDeServico){
            res.status(404).json({error:"Não encontrado"}) // If no 'OrdemDeServico' is found, send a 404 response
            return
        }

        res.json(ordemDeServico) // If 'OrdemDeServico' is found, send it in the response
    }

    // Handles a request to delete a 'OrdemDeServico' record by ID
    static destroyOrdemDeServico(req,res){
        const id = parseInt(req.params.id) // Parse the ID from the request parameters
        const ordemDeServico = findByPk(id) // Find the 'OrdemDeServico' by primary key
        if(!ordemDeServico){
            res.status(404).json({error:"Não encontrado"}) // If no 'OrdemDeServico' is found, send a 404 response
            return
        }
        destroy(id) // Destroy the 'OrdemDeServico' record
        res.json({message: "Removido com sucesso!"}) // Send a success message in the response
    }

    // Handles a request to create a new 'OrdemDeServico' record
    static createOrdemDeServico(req,res){
        // Destructure the data from the request body
        const {cliente_id, produto_id, data_abertura, data_pronto, data_saida, status, diagnostico_defeito_reclamacao, solucao, anexos} = req.body

        // Check if all necessary fields are present
        if(!cliente_id || !produto_id || !data_abertura || !status || !diagnostico_defeito_reclamacao){
            res.status(400).json({error: "Informe todos os campos!"}) // If not, send a 400 response
            return
        }

        // Create a new 'OrdemDeServico' instance
        const ordemDeServico = new OrdemDeServico(0, cliente_id, produto_id, data_abertura, data_pronto, data_saida, status, diagnostico_defeito_reclamacao, solucao, anexos)
        const createdOrdemDeServico = create(ordemDeServico) // Add the new 'OrdemDeServico' to the database
        res.status(201).json(createdOrdemDeServico) // Send the created 'OrdemDeServico' in the response
    }

    // Handles a request to update a 'OrdemDeServico' record by ID
    static updateOrdemDeServico(req,res){
        const id = parseInt(req.params.id) // Parse the ID from the request parameters
        const ordemDeServico = findByPk(id) // Find the 'OrdemDeServico' by primary key
        if(!ordemDeServico){
            res.status(404).json({error:"Não encontrado"}) // If no 'OrdemDeServico' is found, send a 404 response
            return
        }

        // Destructure the data from the request body
        const {cliente_id, produto_id, data_abertura, data_pronto, data_saida, status, diagnostico_defeito_reclamacao, solucao, anexos} = req.body

        // Check if all necessary fields are present
        if(!cliente_id || !produto_id || !data_abertura || !status || !diagnostico_defeito_reclamacao){
            res.status(400).json({error: "Informe todos os campos!"}) // If not, send a 400 response
            return
        }

        // Update the 'OrdemDeServico' record
        ordemDeServico.cliente_id = cliente_id
        ordemDeServico.produto_id = produto_id
        ordemDeServico.data_abertura = data_abertura
        ordemDeServico.data_pronto = data_pronto
        ordemDeServico.data_saida = data_saida
        ordemDeServico.status = status
        ordemDeServico.diagnostico_defeito_reclamacao = diagnostico_defeito_reclamacao
        ordemDeServico.solucao = solucao
        ordemDeServico.anexos = anexos

        // Send the updated 'OrdemDeServico' record in the response
        update(id, ordemDeServico)
        res.json(ordemDeServico)
    }
}

// Export the controller
export default OrdemDeServicoController
