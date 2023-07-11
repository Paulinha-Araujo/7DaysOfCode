// 5º dia DesafioOfCode da Alura

const input = require("readline-sync")
let frutas = []
let laticinios = []
let congelados = []
let doces = []
let outros = []

while (true) {
   let compras = input.question ("Deseja adcionar uma comida na sua lista de compras? Sim ou Nao? ");
   if (compras == "não") {
      break;
   }
  
   let lista = input.question ("Qual comida voce deseja inserir? ")
   let outraPergunta = input.question("Em qual categoria essa comida essa comida se encaixa? frutas, laticinios, congelados, doces, outros: ");
   
   if (outraPergunta == "frutas") {
      frutas.push(lista)
   } else if (outraPergunta == "laticinios") {
      laticinios.push(lista)
   } else if (outraPergunta == "congelados") {
      congelados.push(lista)
   } else if (outraPergunta == "doces") {
      doces.push(lista)
   } else {
      outros.push(lista)
   }

} 
console.log("Frutas: " + frutas)
console.log("Laticinios: " + laticinios)
console.log("Congelados: " + congelados)
console.log("Doces: " + doces)
console.log("outros: " + outros)
