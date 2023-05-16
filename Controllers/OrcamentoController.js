// import the necessary functions and classes from the models
import { Orcamento, create, destroy, findAll, findByPk, update } from "../models/Orcamento.js"

// Define a controller for handling operations related to 'Orcamento'
class OrcamentoController {
    // Handles a request to get a list of all 'Orcamento' records
    static list(req, res) {
        res.json(findAll())
    }

    // Handles a request to get a 'Orcamento' record by ID
  static getOrcamentoById(req, res) {
    const id = parseInt(req.params.id) // Parse the ID from the request parameters
    const orcamento = findByPk(id) // Find the 'Orcamento' by primary key
    if (!orcamento) {
      res.status(404).json({ error: "Não encontrado" }) // If no 'Orcamento' is found, send a 404 response
      return
    }

    res.json(orcamento) // If 'Orcamento' is found, send it in the response
  }

  // Handles a request to delete a 'Orcamento' record by ID
  static destroyOrcamento(req, res) {
    const id = parseInt(req.params.id) // Parse the ID from the request parameters
    const orcamento = findByPk(id) // Find the 'Orcamento' by primary key
    if (!orcamento) {
      res.status(404).json({ error: "Não encontrado" }) // If no 'Orcamento' is found, send a 404 response
      return
    }
    destroy(id) // Destroy the 'Orcamento' record
    res.json({ message: "Removido com sucesso!" }) // Send a success message in the response
  }

  // Handles a request to create a new 'Orcamento' record
    static createOrcamento(req, res) {
        // Destructure the data from the request body
        const { cliente_id, produto_id, data_abertura, data_pronto, data_saida, status, diagnostico_defeito_reclamacao, solucao, anexos } = req.body

        // Check if all necessary fields are present
        if (!cliente_id || !produto_id || !data_abertura || !status || !diagnostico_defeito_reclamacao) {
            res.status(400).json({ error: "Informe todos os campos!" }) // If not, send a 400 response
            return
        }

        // Create a new 'Orcamento' instance
        const orcamento = new Orcamento(0, cliente_id, produto_id, data_abertura, data_pronto, data_saida, status, diagnostico_defeito_reclamacao, solucao, anexos)
        const createdOrcamento = create(orcamento) // Add the new 'Orcamento' to the database
        res.status(201).json(createdOrcamento) // Send the created 'Orcamento' in the response
    }

    // Handles a request to update a 'Orcamento' record by ID
    static updateOrcamento(req, res) {
        const id = parseInt(req.params.id) // Parse the ID from the request parameters
        const orcamento = findByPk(id) // Find the 'Orcamento' by primary key

        if (!orcamento) {
            res.status(404).json({ error: "Não encontrado" }) // If no 'Orcamento' is found, send a 404 response
            return
        }

        // Destructure the data from the request body
        const { valor_pecas, valor_mao_de_obra, status } = req.body

        // Update the 'Orcamento' record
        if (valor_pecas) orcamento.valor_pecas = valor_pecas
        if (valor_mao_de_obra) orcamento.valor_mao_de_obra = valor_mao_de_obra
        if (status) orcamento.status = status

        update(id, orcamento) // Update the 'Orcamento' record
        res.json(orcamento) // Send the updated 'Orcamento' in the response
    }
}

// Export the controller
export default OrcamentoController