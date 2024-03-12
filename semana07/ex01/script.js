// EXERCICIO 01 -----------------------------------

// class Produto {
//     nome;
//     preco;
//     quantidade;

// EXERCICIO 02 -----------------------------------

class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

// EXERCICIO 03 -----------------------------------

Vender(quantidadeVendida){
    if (quantidadeVendida <= this.quantidade) {
        this.quantidade -= quantidadeVendida;
        console.log("Venda realizada com sucesso!")
    } else {
        console.log("Estoque insuficiente")
    }
  }

// EXERCICIO 04 -----------------------------------

Repor(quantidadeReposta){
    this.quantidade += quantidadeReposta;
    console.log ("Reposição realizada!")
  }

// EXERCICIO 05 -----------------------------------

MostrarEstoque(quantidadeEstoque){
console.log(`O produto ${this.nome} possui ${this.quantidade} unidades disponíveis`)
  }


// let produto1 = new Produto("Camisa", 30, 10)
// produto1.MostrarEstoque()
// produto1.Vender(5)
// produto1.MostrarEstoque()

// console.log(produto1)

// EXERCICIO 06 -----------------------------------

AtualizarPreco(novoPreco){
this.preco = novoPreco
console.log("Preço atualizado com sucesso!")
  }
}

// let produto1 = new Produto("Camisa", 30, 10)
// produto1.MostrarEstoque()
// produto1.Vender(5)
// produto1.MostrarEstoque()
// produto1.AtualizarPreco(35)

// console.log(produto1)

// EXERCÍCIO 07 -----------------------------------

class Pessoa {
    constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}

// EXERCÍCIO 08 -----------------------------------

class Cliente extends Pessoa {
    constructor(nome, idade, profissao, telefone, email, clienteDesde) {
        super(nome, idade, profissao);
        this.telefone = telefone;
        this.email = email;
        this.clienteDesde = clienteDesde;
    }
}
