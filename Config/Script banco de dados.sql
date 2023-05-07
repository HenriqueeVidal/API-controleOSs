-- Tabela Cliente
CREATE TABLE cliente (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cpf_cnpj VARCHAR(20) UNIQUE NOT NULL,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(15),
    celular VARCHAR(15) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    cep VARCHAR(10) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    numero INT NOT NULL,
    complemento VARCHAR(100),
    bairro VARCHAR(100) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    uf CHAR(2) NOT NULL
);
CREATE INDEX idx_cliente_email ON cliente (email);
CREATE INDEX idx_cliente_cpf_cnpj ON cliente (cpf_cnpj);

-- Tabela Produto
CREATE TABLE produto (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    aparelho VARCHAR(100) NOT NULL,
    descricao_observacoes TEXT,
    versao VARCHAR(50),
    acessorios TEXT,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    numero_de_serie VARCHAR(50) UNIQUE
);

-- Tabela Usuário
CREATE TABLE usuario (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    cargo VARCHAR(30) NOT NULL
);
CREATE INDEX idx_usuario_email ON usuario (email);

-- Tabela Ordem de Serviço
CREATE TABLE ordem_servico (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cliente_id INTEGER NOT NULL,
    produto_id INTEGER NOT NULL,
    data_abertura DATE NOT NULL,
    data_pronto DATE,
    data_saida DATE,
    status VARCHAR(20) NOT NULL DEFAULT 'aberta',
    diagnostico_defeito_reclamacao TEXT,
    solucao TEXT,
    anexos BLOB,
    FOREIGN KEY (cliente_id) REFERENCES cliente (id),
    FOREIGN KEY (produto_id) REFERENCES produto (id)
);

-- Tabela Orçamento
CREATE TABLE orcamento (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ordem_servico_id INTEGER NOT NULL,
    valor_pecas DECIMAL(10, 2) NOT NULL,
    valor_mao_de_obra DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) NOT NULL,
    FOREIGN KEY (ordem_servico_id) REFERENCES ordem_servico (id)
);
