let n1 = document.getElementById ("inpt1") , n2 = document.getElementById ("inpt2")

    function VerificarMaior(){

        let numero1 = Number (n1.value)
        let numero2 = Number (n2.value)

        if (numero1 > numero2){

            alert("O número 1 é o maior")
        }

        else if(numero2>numero1){

            alert ("O numero 2 é o maior")
        } 
        
        else {

            alert ("Os dois são iguais")
        }



}


