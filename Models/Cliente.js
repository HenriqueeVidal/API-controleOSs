// models/Cliente.js

// Class representing a Client
export class Cliente {
    // The constructor is a special method for creating and initializing an object created from a class.
    constructor(id, cpf_cnpj, nome, telefone, celular, email, cep, endereco, numero, complemento, bairro, cidade, uf){
        this.id = id
        this.cpf_cnpj = cpf_cnpj
        this.nome = nome
        this.telefone = telefone
        this.celular = celular
        this.email = email
        this.cep = cep
        this.endereco = endereco
        this.numero = numero
        this.complemento = complemento
        this.bairro = bairro
        this.cidade = cidade
        this.uf = uf
    }
}

// Variable to store the next ID to be used when creating a new Client
let idAtual = 2

// Function to create a new Client
export const create = (cliente) => {
    idAtual++  // Increment the current ID
    cliente.id = idAtual  // Assign the new ID to the Client
    dbClientes.push(cliente)  // Add the new Client to the database
    console.log("Client successfully registered!")
    return cliente
}

// Function to find a Client by its primary key
export const findByPk = (id) => {
    return dbClientes.find(cliente => cliente.id === id)
}

// Function to return all Clients
export const findAll = () => {
    return dbClientes
}

// Function to delete a Client
export const destroy = (id) => {
    const cliente = findByPk(id)
    if(!cliente){
        console.log("Client not found!")
        return false
    }
    const index = dbClientes.indexOf(cliente)
    dbClientes.splice(index,1)
    console.log("Client successfully removed!")
    return true
}

// Function to update a Client
export const update = (id,clienteUpdate) => {
    const cliente = findByPk(id)
    if(!cliente) {
        console.log("Client not found!")
        return false
    }
    const index = dbClientes.indexOf(cliente)
    dbClientes[index] = clienteUpdate
    console.log("Client successfully updated!")
    return true
}

// Initial Clients database
export const dbClientes = [
    new Cliente(1, "12345678901", "Felipe", "11223344", "9988776655", "email@gmail.com", "12345678", "Rua Exemplo, 123", 123, "Apto 456", "Bairro", "Cidade", "UF"),
    new Cliente(2, "10987654321", "Nome", "55667788", "1122334455", "meuemail@email.com", "87654321", "Avenida Teste, 456", 456, "Casa 789", "Bairro Teste", "Cidade Teste", "UF Teste")
]
