var entrada = 'a'
let vogais = ['a', 'e', 'i', 'o', 'u']

let resultado = 'Consoante'

if (vogais.indexOf(entrada.toLowerCase()) !== -1) {
    resultado = 'Vogal'
}

console.log(resultado)