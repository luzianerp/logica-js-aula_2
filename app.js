alert('Boas vindas ao jogo do número secreto');
// = é recebedo valor
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute ;
let tentativas = 1

// While(enquanto) é um loop, ex: chute não for igual ao numero secreto.
// != é diferente
while(chute != numeroSecreto ); {
    chute = prompt('Escolha um número entre 1 e 10');

    // se chute for igual ao número secreto
   // == é igual
    if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
    } else {
        if(numeroSecreto > chute){
       alert(´O número secreto é menor que ${chute}´);
        } else{
        alert(´O número secreto é maior que ${chute}´);
        }

    }
}

