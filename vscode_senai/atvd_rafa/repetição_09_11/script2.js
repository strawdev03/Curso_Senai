// 2) Desenvolver um programa no qual o usuário digite o número de multas que deseja cadastrar e para cada multa deve colocar o valor em reais e os pontos perdidos na carteira de habilitação. Ao final, mostrar o somatório das multas e dos pontos, caso os pontos alcancem 21 ou mais, exibir a mensagem “Você está irregular”, senão, exibir “Você está regular”




let multa = Number(prompt ("Quantas multas deseja cadastrar : ")), cont = 0 , valorMulta , ValorTotal , somaMultas , somaPontos , valorPontos

while (cont<multa){

    valorMulta =  Number(prompt("qual o valor da multa :"))
    valorPontos =  Number(prompt("Quantos pontos perdidos nessa multa ? :"))

    if (cont == 1){

        somaMultas = valorMulta
        somaPontos = valorPontos
    }

    somaMultas = somaMultas + valorMulta
    somaPontos = somaPontos + valorPontos
    cont ++

}

alert (`O valor total das multas foi : R$${(somaMultas.toFixed(2))} \nE os pontos perdidos foi : ${somaPontos}`)