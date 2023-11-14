// Criar um sistema para gerenciar projetos e valores de projetos, com HTML e JS.
// O sistema deve deve seguir o layout anexo (imagem).

// O usuário deverá informar dados de 5 projeto (nome do projeto, valor cobrado por hora e quantidade de horas previstas para concluir).

// Ao final devem ser mostrados:
// 1) O valor individual de cada projeto
// 2) O valor total dos projetos.

//  Projeto1 = document.getElementById ("Proj1text")  ,Projeto2 = document.getElementById ("Proj2text") ,Projeto3 = document.getElementById ("Proj3text"),

 let valorHora1 = document.getElementById ("inptValor1"), valorHora2 = document.getElementById ("inptValor2"), valorHora3 = document.getElementById ("inptValor3"),

 QtdHora1 = document.getElementById ("inptHoras1") , QtdHora2 = document.getElementById ("inptHoras2") , QtdHora3= document.getElementById ("inptHoras3")  , ValorTotal 

function calcular() {

        
        alert ('O resultado do projeto 1 é : R$'+ Number (valorHora1.value) * Number (QtdHora1.value))

        alert ('O resultado do projeto 2 é : R$' + Number(valorHora2.value) * Number(QtdHora2.value))

        alert ('O resultado do projeto 3 é : R$' + Number(valorHora3.value) * Number (QtdHora3.value))

        



        // calculo valor total


        ValorTotal = Number (valorHora1.value) * Number (QtdHora1.value) + Number (valorHora2.value) * Number (QtdHora2.value) + Number (valorHora3.value) * Number (QtdHora3.value)

        alert ("O valor total dos projetos é : R$ " +(ValorTotal))

    
}