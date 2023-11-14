
// função que calcula o gasto em reais
function calculo() {

    let DistanciaKm = Number(document.getElementById ("distKM").value)
    let consumo = Number(document.getElementById ("inptConsumo").value)
    let PreçoGasolina = Number (document.getElementById ('PreçoGas').value)
    let resultado = document.getElementById ('resultado')
    let calculos


    resultado = (DistanciaKm / consumo)*PreçoGasolina 


    resultado =  document.getElementById ("resultado").innerText = `Seu consumo total será ${resultado.toFixed(2)} reais`

}