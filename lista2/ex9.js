var diaAtual = new Date();


for (m = 0; m < 12; m++) {
    console.log("\nDias Úteis:");

    for (i = 0; i < 6; i++) {
        diaAtual.setDate(diaAtual.getDate() + 1);
    console.log(diaAtual.toLocaleDateString());

    }
  

  console.log("\nDias de Folga:");


    for (i = 0; i < 2; i++) {
        diaAtual.setDate(diaAtual.getDate() + 1);
        console.log(diaAtual.toLocaleDateString());
        
    }
}  