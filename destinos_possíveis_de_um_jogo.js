// 3º dia do Desafio Of Code da Alura em JavaScript

const input = require ('readline-sync')

let escolha = input.question("Voce prefere a area de Front-End ou Beck-End? Escreva 1 para Front-End e 2 para Beck-End. ");
console.log(escolha)
if (escolha == 1) {
    let resposta = input.question("Quer aprender React ou aprender Vue?")
} else {
    let resposta = input.question("Quer aprender Java ou aprender C# ?")
}

let outraPergunta = input.question("Voce quer se especializar ou ser Fullstack?")
let linguagem = " ";
while (true) {
    let pergunte = input.question("Quais tecnologias voce gostaria de aprender?")
    linguagem = linguagem + pergunte
    let outraPergunta = input.question("Voce deseja continuar? Digite S para (Sim) e N para (Nao)")
    if (outraPergunta == "N") {1
        console.log(linguagem)
        break;
    }
}
