
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

export class OrdemDeServico {
    constructor(id, cliente_id, produto_id, data_abertura, data_pronto, data_saida, status, diagnostico, solucao, anexos) {
        this.id = id;
        this.cliente_id = cliente_id;
        this.produto_id = produto_id;
        this.data_abertura = data_abertura;
        this.data_pronto = data_pronto;
        this.data_saida = data_saida;
        this.status = status;
        this.diagnostico = diagnostico;
        this.solucao = solucao;
        this.anexos = anexos;
    }
}

export const getAll = () => {
    return dbOrdensDeServico;
}

export const getById = (id) => {
    return dbOrdensDeServico.find(OrdemDeServico => dbOrdensDeServico.id === parseInt(id))
}

export const dbOrdensDeServico = [
    new OrdemDeServico(1, 1, 1, "2021-01-01", "2021-01-02", "2021-01-03", "aberta", "diagnostico", "solucao", "anexos"),
    new OrdemDeServico(2, 2, 2, "2021-02-01", "2021-02-02", "2021-02-03", "em andamento", "diagnostico", "solucao", "anexos")
]