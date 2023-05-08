
/*
Cliente
Descrição: Armazena informações sobre os clientes, como nome, telefone, e-mail e endereço.
Atributos:
•	Id - número
•	CPF/CNPJ - número
•	Nome - texto
•	Telefone/celular - número
•	E-mail - texto
•	Cep – número
•	Endereço - texto
•	Número - número
•	Complemento - texto
•	Bairro - texto
•	Cidade - texto
•	UF - texto
 */

export class Cliente{
    constructor(id, cpfCnpj, nome, telefone, email, cep, endereco, numero, complemento, bairro, cidade, uf){
        this.id = id;
        this.cpfCnpj = cpfCnpj;
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.cep = cep;
        this.endereco = endereco;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cidade = cidade;
        this.uf = uf;
    }
}

export const getAll = () => {
    return dbClientes;
}

export const getById = (id) => {
    return dbClientes.find(cliente => cliente.id === parseInt(id))
}

export const create = (clienteData) => {
    const newCliente = new Cliente(
        Math.max(...dbClientes.map(cliente => cliente.id)) + 1,
        clienteData.cpfCnpj,
        clienteData.nome,
        clienteData.telefone,
        clienteData.email,
        clienteData.cep,
        clienteData.endereco,
        clienteData.numero,
        clienteData.complemento,
        clienteData.bairro,
        clienteData.cidade,
        clienteData.uf
    )
    dbClientes.push(newCliente) // Onde seria feita a inserção no BD, no caso está sendo feito no Array
    return newCliente
}

export const update = (id, updatedClienteData) => {
    const clienteIndex = dbClientes.findIndex(cliente => cliente.id === parseInt(id))
    if (clienteIndex !== -1) {
        Object.assign(dbClientes[clienteIndex], updatedClienteData)
        return dbClientes[clienteIndex]
    }
    return null
}

export const remove = (id) => {
    const clienteIndex = dbClientes.findIndex(cliente => cliente.id === parseInt(id))
    if (clienteIndex !== -1) {
        dbClientes.splice(clienteIndex, 1)
    }
}


export const dbClientes = [
    new Cliente(1, 123456789, "João da Silva", 123456789, "cliente@gmail.com", 123456789, "Rua dos Bobos", 0, "Casa", "Centro", "São Paulo", "SP"),
    new Cliente(2, 123456789, "Maria da Silva", 123456789, "maria@gmail.com", 123456789, "Rua dos Bobos", 0, "Casa", "Centro", "São Paulo", "SP"),
            ]