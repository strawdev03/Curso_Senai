// 7.5: Mano Juca passou na entrevista!!!! Ele arrumou um emprego!!!! Agora ele é operador de fotocopiadora (tira xeróx) :D Mas, né... Adiantou nada, ele não aprendeu a tabuada. Tá se perdendo todo na hora de cobrar os clientes e o patrão já tá de ovo virado com ele. PRECISAMOS AGIR RÁPIDO! Tendo em vista que cada cópia sai R$0,33, faz aí um programa que mostre uma lista de quanto custa desde 1 até 500 cópias. Exemplinho pra ninguém dizer “numtendiiii”:
// Quantidade Preço
// 1 : R$0,33
// 2 : R$0,66
// 3 : R$0,99



function calculo() {

  
    let copia = 0.33 , i = 1

    while (i <= 500) {



        document.getElementById("DivResultado").innerHTML +=  `<br>${i}: R$ ${(copia*i).toFixed(2)} `


    
        i++
    }
    
    
    
}


// ValorTotal = Numcopias * copia 

// document.getElementById("DivResultado").innerHTML += "O valor total das copias é " + ValorTotal.toFixed(2)