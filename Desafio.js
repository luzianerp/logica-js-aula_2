
//Desafios
//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

console.log("Contagem de 1 a 10:");
let contador = 1;
while (contador <= 10) {
  console.log(contador);
  contador++;
}
console.log("Contagem de 10 a 0:");
let contador = 10;

while (contador >= 0) {
  console.log(contador);
  contador--;
}
// Aqui é simulado um prompt para entrada do número, já que estamos em um ambiente de script isolado.
// No navegador, o código abaixo seria executado diretamente no console.
let numero = prompt("Digite um número para iniciar a contagem regressiva:");

// Converte o input para número inteiro
numero = parseInt(numero);

console.log(`Contagem regressiva de ${numero} até 0:`);
while (numero >= 0) {
  console.log(numero);
  numero--;
}
// Aqui também é simulado um prompt para entrada do número.
let numero = prompt("Digite um número para iniciar a contagem progressiva:");

// Converte o input para número inteiro
numero = parseInt(numero);

console.log(`Contagem progressiva de 0 até ${numero}:`);
let contador = 0;

while (contador <= numero) {
  console.log(contador);
  contador++;
}
