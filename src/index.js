const readline = require('readline/promises');
const { calcularAreaTriangulo } = require('./formulasAreas');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

async function iniciar() {
    const altura = await input.question("Qual é a altura ?")
    const base = await input.question("Qual é a base ?")
    input.close()
    console.log(calcularAreaTriangulo(altura, base))
}

async function perimetro(){

}

perimetro()


