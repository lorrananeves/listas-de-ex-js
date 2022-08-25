var entrada = [1,2,3,4,5,6,7]
var impares = 0
    pares = 0

for (i of entrada) {
    if (i%2==0){
        pares += 1
    }
    else if ((i%2)!=0) {
        impares += 1
    }
}

console.log(`${impares} e ${pares}`)