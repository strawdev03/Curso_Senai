

function calcular1() {

    let Num = Number (document.getElementById("inpt1").value) , resultado = document.getElementById("DivResultado")

    if (Num > 0){

        resultado.innerHTML = "O numero é positivo" 
    }
    else if (Num < 0){

        resultado.innerHTML = "O numero é negativo" 
    }
    else {

        resultado.innerHTML = "O numero é nulo" 
    }




}

function calcular2() {

let Num = Number (document.getElementById("inpt2").value) , resultado = document.getElementById("DivResultado2")

    if (Num > 0 && Num % 2 == 0 ){

        resultado.innerHTML = "O numero é positivo e par" 
    } else {

        resultado.innerHTML = "O numero não é positivo e par" 

        
    }
   




}