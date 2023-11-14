
function Mostrar () {
    
    let A = Number (document.getElementById("inptA").value)
    let B = Number (document.getElementById("inptB").value)
    let C = Number (document.getElementById("inptC").value)
    let D = Number (document.getElementById("inptD").value) , calculo , 
        resultado = document.getElementById("DivResultado")


   if ( B  >C && D > A && (C + D) > (A + B) && (C,D) > 0 && A % 2 == 0) {

    resultado.innerHTML = "Valores aceitos" 
    
   }else 
   {
    resultado.innerHTML = "Valores não aceitos" 
   }
}

// Prazo: 1
// Leia 4 valores inteiros A, B, C e D. Então, se B for maior que C
// e D for maior que A e se a soma de C e D for maior que a soma de A e B e se C e D forem valores positivos e se A for par, escreva a mensagem “Valores aceitos” . Caso contrário, escreva a mensagem “Valores não aceitos” .

// Entrada
// Quatro números inteiros A, B, C e D.

// Saída
// Mostrar a mensagem correspondente após a validação dos valores.
