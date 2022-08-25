var entrada = [1,3,5,7,8]

var saida = []

for (i of entrada) {
    if (i%2==0){
        saida.push('par');
    }
    else if ((i%2)!=0) {
        saida.push('ímpar')}
}
console.log(saida)