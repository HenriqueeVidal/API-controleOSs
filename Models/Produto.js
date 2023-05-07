/*
Produto
Descrição: Armazena informações sobre os produtos que estão sendo consertados ou passando por manutenção, como descrição, marca, modelo e número de série.
Atributos:
•	Id - número
•	Aparelho - texto
•	Descrição/Observações - texto
•	Versão - texto
•	Acessórios - texto
•	Marca - texto
•	Modelo - texto
•	Número_de_série - texto
 */

export class Produto{
    constructor(id, aparelho, descricao, versao, acessorios, marca, modelo, numeroDeSerie){
        this.id = id;
        this.aparelho = aparelho;
        this.descricao = descricao;
        this.versao = versao;
        this.acessorios = acessorios;
        this.marca = marca;
        this.modelo = modelo;
        this.numeroDeSerie = numeroDeSerie;
    }
}

export const getAll = () => {
    return dbProdutos;
}

export const dbProdutos = [
    new Produto(1, "celular", "descricao", "versao", "acessorios", "marca", "modelo", "numeroDeSerie"),
        new Produto(2, "celular", "descricao", "versao", "acessorios", "marca", "modelo", "numeroDeSerie"),
    ]