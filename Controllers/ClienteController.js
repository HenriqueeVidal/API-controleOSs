// Import the necessary functions and classes from the models
import { Cliente, create, destroy, findAll, findByPk, update } from "../models/Cliente.js"

// Define a controller for handling operations related to 'Cliente'
class ClienteController {
    // Handles a request to get a list of all 'Cliente' records
    static list(req,res){
        res.json(findAll())
    }

    // Handles a request to get a 'Cliente' record by ID
    static getClienteById(req,res){
        const id = parseInt(req.params.id) // Parse the ID from the request parameters
        const cliente = findByPk(id) // Find the 'Cliente' by primary key
        if(!cliente){
            res.status(404).json({error:"Não encontrado"}) // If no 'Cliente' is found, send a 404 response
            return
        }

        res.json(cliente) // If 'Cliente' is found, send it in the response
    }

    // Handles a request to delete a 'Cliente' record by ID
    static destroyCliente(req,res){
        const id = parseInt(req.params.id) // Parse the ID from the request parameters
        const cliente = findByPk(id) // Find the 'Cliente' by primary key
        if(!cliente){
            res.status(404).json({error:"Não encontrado"}) // If no 'Cliente' is found, send a 404 response
            return
        }
        destroy(id) // Destroy the 'Cliente' record
        res.json({message: "Removido com sucesso!"}) // Send a success message in the response
    }

    // Handles a request to create a new 'Cliente' record
    static createCliente(req,res){
        // Destructure the data from the request body
        const {cpf_cnpj, nome, telefone, celular, email, cep, endereco, numero, complemento, bairro, cidade, uf} = req.body

        // Check if all necessary fields are present
        if(!cpf_cnpj || !nome || !celular || !email || !cep || !endereco || !numero || !bairro || !cidade || !uf){
            res.status(400).json({error: "Informe todos os campos!"}) // If not, send a 400 response
            return
        }

        // Create a new 'Cliente' instance
        const cliente = new Cliente(0, cpf_cnpj, nome, telefone, celular, email, cep, endereco, numero, complemento, bairro, cidade, uf)
        const createdCliente = create(cliente) // Add the new 'Cliente' to the database
        res.status(201).json(createdCliente) // Send the created 'Cliente' in the response
    }

    // Handles a request to update a 'Cliente' record by ID
    static updateCliente(req,res){
        const id = parseInt(req.params.id) // Parse the ID from the request parameters
        const cliente = findByPk(id) // Find the 'Cliente' by primary key
        if(!cliente){
            res.status(404).json({error:"Não encontrado"}) // If no 'Cliente' is found, send a 404 response
            return
        }

        // Destructure the data from the request body
        const {cpf_cnpj, nome, telefone, celular, email, cep, endereco, numero, complemento, bairro, cidade, uf} = req.body

        // Check if all necessary fields are present
        if(!cpf_cnpj || !nome || !celular || !email || !cep || !endereco || !numero || !bairro || !cidade || !uf){
            res.status(400).json({error: "Informe todos os campos!"}) // If not, send a 400 response
            return
        }

        // Update the 'Cliente' record
        cliente.cpf_cnpj = cpf_cnpj
        cliente.nome = nome
        cliente.telefone = telefone
        cliente.celular = celular
        cliente.email = email
        cliente.cep = cep
        cliente.endereco = endereco
        cliente.numero = numero
        cliente.complemento = complemento
        cliente.bairro = bairro
        cliente.cidade = cidade
        cliente.uf = uf

        // Send the updated 'Cliente' record in the response
        update(id,cliente)
        res.json(cliente)
    }
}

// Export the controller
export default ClienteController