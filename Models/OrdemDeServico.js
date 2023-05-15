
/*
Ordem de Serviço
Descrição: Gerencia as ordens de serviço relacionadas aos consertos e manutenções dos produtos dos clientes. Armazena informações como status, diagnóstico e solução do problema.
Atributos:
•	Id - número
•	Cliente_id (relacionamento com Cliente)
•	Produto_id (relacionamento com Produto)
•	Data_abertura - data
•	Data_pronto - data
•	Data_saída - data
•	Status (aberta, em andamento, fechada) - texto
•	Diagnóstico/defeito/reclamação - texto
•	Solução - texto
•	Anexos - file
 */

// models/OrdemDeServico.js

// Class representing a Service Order
export class OrdemDeServico {
    constructor(id, cliente_id, produto_id, data_abertura, data_pronto, data_saida, status = 'aberta', diagnostico_defeito_reclamacao, solucao, anexos){
        this.id = id;
        this.cliente_id = cliente_id;
        this.produto_id = produto_id;
        this.data_abertura = data_abertura;
        this.data_pronto = data_pronto;
        this.data_saida = data_saida;
        this.status = status;  // Default value is 'aberta'
        this.diagnostico_defeito_reclamacao = diagnostico_defeito_reclamacao;
        this.solucao = solucao;
        this.anexos = anexos;
    }
}

// Variable to store the next ID to be used when creating a new Service Order
let idAtual = 2

// Function to create a new Service Order
export const create = (OrdemDeServico) => {
    idAtual++  // Increment the current ID
    OrdemDeServico.id = idAtual  // Assign the new ID to the Service Order
    dbOrdemDeServicos.push(OrdemDeServico)  // Add the new Service Order to the database
    console.log("Service Order successfully registered!")
    return OrdemDeServico
}

// Function to find a Service Order by its primary key
export const findByPk = (id) => {
    return dbOrdemDeServicos.find(OrdemDeServico => OrdemDeServico.id === id)
}

// Function to return all Service Orders
export const findAll = () => {
    return dbOrdemDeServicos
}

// Function to delete a Service Order
export const destroy = (id) => {
    const OrdemDeServico = findByPk(id)
    if(!OrdemDeServico){
        console.log("Service Order not found!")
        return false
    }
    const index = dbOrdemDeServicos.indexOf(OrdemDeServico)
    dbOrdemDeServicos.splice(index,1)
    console.log("Service Order successfully removed!")
    return true
}

// Function to update a Service Order
export const update = (id, OrdemDeServicoUpdate) => {
    const OrdemDeServico = findByPk(id)
    if(!OrdemDeServico) {
        console.log("Service Order not found!")
        return false
    }
    const index = dbOrdemDeServicos.indexOf(OrdemDeServico)
    dbOrdemDeServicos[index] = OrdemDeServicoUpdate
    console.log("Service Order successfully updated!")
    return true
}

// Initial Service Orders database
export const dbOrdemDeServicos = [
    new OrdemDeServico(1, 1, 1, '2021-05-01', '2021-05-02', '2021-05-03', 'aberta', 'Não liga', 'Troca de fonte', 'fonte.jpg')
]
