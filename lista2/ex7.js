var entrada = 5

var tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


if (entrada < 1 || entrada > 10) {
    console.log("Entrada Inválida")
}
else{
console.log(`a tabuadada de ${entrada} é:`)
   for (i of tabuada) {
    console.log(entrada*i)
   }
}