

function calcular () {

let preco = Number (document.getElementById("inptValor").value)
let moedas1Real = Number (document.getElementById("inpt1Real").value)
let moedas50cent = Number(document.getElementById("inpt50cent").value)
let moedas25cent = Number(document.getElementById("inpt25cent").value)
let moedas10cent = Number(document.getElementById("inpt10cent").value)
let moedas5cent = Number(document.getElementById("inpt5cent").value)
let ValorTotal 
let resultadoG = document.getElementById("DivResultadoG")
let resultadoR = document.getElementById("DivResultadoR")


ValorTotal = Number (moedas1Real * 1 + moedas50cent*0.5 + moedas25cent*0.25 + moedas10cent*0.1 + moedas5cent*0.05)


resultadoG.innerHTML = "Valor Total do El Chancho R$" + ValorTotal.toFixed(2) + "<BR> Preço do produto R$"+ preco.toFixed(2)


if (ValorTotal >= preco) {

    
   resultadoG.innerHTML += "<BR>Valor suficiente para a compra!"

}else

resultadoR.innerHTML += "<BR>Valor insuficiente para a compra!"


}