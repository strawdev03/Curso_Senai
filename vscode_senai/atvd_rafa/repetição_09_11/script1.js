// 1) Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a média de idade delas.







let nome  , idade , cont = 0 , media , soma

while (cont < 5) {

    nome =  prompt("Digite o nome da pessoa: ")
    idade = Number(prompt("Digite a idade da pessoa: "))

    
    if(cont == 1){
        
        soma = idade 
    }
    
    soma = soma + idade
    cont ++

    

}


media = soma / 5

alert ("Sua média é "+ (media).toFixed(2))