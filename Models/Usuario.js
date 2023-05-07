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

export class Usuario{
    constructor(id, nome, email, senha, cargo){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cargo = cargo;
    }
}

export const getAll = () => {
    return dbUsuarios;
}

export const dbUsuarios = [
    new Usuario(1, "João da Silva", "Joao@gmail.com", "123456", "Administrador"),
    new Usuario(2, "Maria da Silva", "Maria@gmail.com", "senha123", "Tecnica")
    ]