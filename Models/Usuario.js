/*
Usuário
Descrição: Gerencia informações sobre os usuários do sistema e suas permissões, como nome, e-mail, senha e papel (administrador, técnico, etc.). Permite implementar recursos de autenticação e autorização.
Atributos:
•	Id - número
•	Nome - texto
•	E-mail - texto
•	Senha - password
•	Cargo (administrador, técnico, etc.) - texto

 */

class Usuario{
    constructor(id, nome, email, senha, cargo){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cargo = cargo;
    }
}
