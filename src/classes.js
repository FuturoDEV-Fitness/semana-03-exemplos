const Pessoa = require('./Pessoa.js')

/* Exemplo com classes */

const henrique = new Pessoa('Henrique Douglas', 25)
const maria = new Pessoa('Maria', 20)

console.log(henrique.getNome)
console.log(henrique.getIdade)
henrique.setIdade = 30
console.log(henrique.getIdade)
//maria.cumprimentar()


/* Exemplo com funcoes */
const _pessoa = {
    nome: 'Henrique',
    idade: 12
}

function greet(nome, idade){
    console.log(`Menu nome é ${nome} e tenho ${idade}`)
}

