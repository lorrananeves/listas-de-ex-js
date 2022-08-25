var entrada = [1,1,40]

var soma = 0

// percorrer a lista e fazer a somatória dos elementos

for (var i = 0; i < entrada.length; i++) {
    soma += entrada [i];
}

let media = soma/entrada.length

console.log(media.toFixed(1))