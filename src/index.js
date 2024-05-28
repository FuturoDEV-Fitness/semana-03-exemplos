const readline = require('readline/promises');
const { calcularAreaTriangulo } = require('./formulasAreas');
const { calcularPerimetroTriangulo } = require('./formulasPerimetros');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

async function iniciar() {
    const altura = Number(await input.question("Qual é a altura ?"))
    const base = Number(await input.question("Qual é a base ?"))
    input.close()
    console.log(calcularAreaTriangulo(altura, base))
}

async function perimetro(){
    const ladoA = Number(await input.question("QUal é o valor do lado A ?"))
    const ladoB = Number(await input.question("QUal é o valor do lado B ?"))
    const ladoC = Number(await input.question("Qual é o valor do lado C ?"))

    console.log(calcularPerimetroTriangulo(ladoA, ladoB, ladoC))
}

perimetro()


