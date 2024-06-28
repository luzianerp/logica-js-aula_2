
//Desafios
//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

// Aqui é simulado um prompt para entrada do número, já que estamos em um ambiente de script isolado.
// No navegador, o código abaixo seria executado diretamente no console.
console.log("Contagem de 1 a 10:");
let contador1 = 1;
while (contador1 <= 10) {
  console.log(contador1);
  contador1++;
}

console.log("Contagem de 10 a 0:");
let contador2 = 10;
while (contador2 >= 0) {
  console.log(contador2);
  contador2--;
}

// Aqui é simulado um prompt para entrada do número, já que estamos em um ambiente de script isolado.
// No navegador, o código abaixo seria executado diretamente no console.
let numero1 = prompt("Digite um número para iniciar a contagem regressiva:");

// Converte o input para número inteiro
numero1 = parseInt(numero1);

console.log(`Contagem regressiva de ${numero1} até 0:`);
let contador3 = numero1;
while (contador3 >= 0) {
  console.log(contador3);
  contador3--;
}

// Aqui também é simulado um prompt para entrada do número.
let numero2 = prompt("Digite um número para iniciar a contagem progressiva:");

// Converte o input para número inteiro
numero2 = parseInt(numero2);

console.log(`Contagem progressiva de 0 até ${numero2}:`);
let contador4 = 0;
while (contador4 <= numero2) {
  console.log(contador4);
  contador4++;
}