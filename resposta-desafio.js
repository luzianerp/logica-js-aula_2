// Contagem de 1 a 10
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

// Contagem de 10 a 0
contador = 10; // Não redeclare, apenas atribua um novo valor
while (contador >= 0) {
    console.log(contador);
    contador--;
}

// Contagem regressiva a partir do número inserido pelo usuário
let numeroMaximo = prompt("Digite um número para a contagem regressiva:");
numeroMaximo = parseInt(numeroMaximo); // Converte o input para número inteiro

while (numeroMaximo >= 0) {
    console.log(numeroMaximo);
    numeroMaximo--;
}

// Contagem progressiva até o número inserido pelo usuário
numeroMaximo = prompt("Digite um número para a contagem progressiva:");
numeroMaximo = parseInt(numeroMaximo); // Converte o input para número inteiro

contador = 0; // Não redeclare, apenas atribua um novo valor
while (contador <= numeroMaximo) {
    console.log(contador);
    contador++;
}