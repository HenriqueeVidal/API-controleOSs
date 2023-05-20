/*
Orçamento
Descrição: Gerencia os orçamentos associados às ordens de serviço, armazenando informações sobre o custo das peças e da mão de obra, além do status do orçamento (enviado, aprovado, recusado).
Atributos
•	Id - número
•	Ordem_servico_id (relacionamento com Ordem de Serviço)
•	Valor_peças - número
•	Valor_mão_de_obra - número
•	Status (enviado, aprovado, recusado) - texto
 */

// models/Orcamento.js

// Class representing a Budget
export class Orcamento {
    constructor(id, ordem_servico_id, valor_pecas, valor_mao_de_obra, status){
        this.id = id;
        this.ordem_servico_id = ordem_servico_id;
        this.valor_pecas = valor_pecas;
        this.valor_mao_de_obra = valor_mao_de_obra;
        this.status = status;
    }
}

// Variable to store the next ID to be used when creating a new Budget
let idAtual = 2

// Function to create a new Budget
export const create = (Orcamento) => {
    idAtual++  // Increment the current ID
    Orcamento.id = idAtual  // Assign the new ID to the Budget
    dbOrcamentos.push(Orcamento)  // Add the new Budget to the database
    console.log("Budget successfully registered!")
    return Orcamento
}

// Function to find a Budget by its primary key
export const findByPk = (id) => {
    return dbOrcamentos.find(Orcamento => Orcamento.id === id)
}

// Function to return all Budgets
export const findAll = () => {
    return dbOrcamentos
}

// Function to delete a Budget
export const destroy = (id) => {
    const Orcamento = findByPk(id)
    if(!Orcamento){
        console.log("Budget not found!")
        return false
    }
    const index = dbOrcamentos.indexOf(Orcamento)
    dbOrcamentos.splice(index,1)
    console.log("Budget successfully removed!")
    return true
}

// Function to update a Budget
export const update = (id, OrcamentoUpdate) => {
    const Orcamento = findByPk(id)
    if(!Orcamento) {
        console.log("Budget not found!")
        return false
    }
    const index = dbOrcamentos.indexOf(Orcamento)
    dbOrcamentos[index] = OrcamentoUpdate
    console.log("Budget successfully updated!")
    return true
}

// Initial Budgets database
export const dbOrcamentos = [
    new Orcamento(1, 1, 100, 50, 'pending')
]
