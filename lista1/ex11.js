var texto = '$fcsb'

var textoDecripto = []

for (i of texto){
    if (i == '@'){ 
        textoDecripto += 'z'}
    else if (i == '$'){
        textoDecripto += 'Z'}
    else{
    textoDecripto += String.fromCharCode(i.charCodeAt(i)-1)}
}

console.log(textoDecripto)