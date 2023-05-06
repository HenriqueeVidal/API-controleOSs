
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

class Cliente{
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

