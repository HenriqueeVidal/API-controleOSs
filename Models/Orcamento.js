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

class Orcamento{
    constructor(id, ordem_servico_id, valor_pecas, valor_mao_de_obra, status){
        this.id = id;
        this.ordem_servico_id = ordem_servico_id;
        this.valor_pecas = valor_pecas;
        this.valor_mao_de_obra = valor_mao_de_obra;
        this.status = status;
    }
}