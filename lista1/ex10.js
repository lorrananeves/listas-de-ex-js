var texto = 'bcbdbuf'

var textoCripto = []
const KEY = -1

for (i of texto){
    if (i == 'z'){ 
        textoCripto += '@'}
    else if (i == 'Z'){
        textoCripto += '$'}
    else{
    textoCripto += String.fromCharCode(i.charCodeAt(i) + KEY)}
}
console.log(textoCripto)