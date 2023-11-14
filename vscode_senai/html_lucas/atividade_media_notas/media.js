let numero1 = document.getElementById ("inpt1") , numero2= document.getElementById ("inpt2") , numero3 = document.getElementById ("inpt3") , media
function calculo()  {
    

    media = ((Number (numero1.value) + Number(numero2.value) + Number ( numero3.value )) /3).toFixed (2)

    document.getElementById("divResultado").innerHTML = `A sua média é ${media}`

        if (media >= 7){

            alert (`Média : ${media} \n Aprovado!!!`)
        } else if (media ){


        }
    
    
}