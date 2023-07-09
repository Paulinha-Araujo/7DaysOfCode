// 4º dia do DesafioOfCode da ALura
const input = require('readline-sync')

let numeroPensado = 10; //Math.floor(Math.random() * (10 - 1) + 1 ) + 1;
let tentativa = 0;

while(tentativa < 3) {
    let adivinha = input.question("Tente adivinhar um numero de 1 a 10 :");
    if (adivinha == numeroPensado) {
        console.log ("Parabens voce acertou!")
        break;
    }  
    console.log("Voce errou!")
    tentativa++;
}
    console.log (numeroPensado);
