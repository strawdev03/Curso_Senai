let DistKm = document.getElementById("inpDist") , resultado , DistanciaKm

function calculo (){

    DistanciaKm = DistKm.value

    if (DistanciaKm <= 18000000) {

        resultado = Number (DistanciaKm) / 300000
         
            document.getElementById("divResultado").innerHTML = `O resultado é  ${resultado.toFixed(2)} segundos`

    }  if (DistanciaKm> 18000000){

        resultado = Number (DistanciaKm)/ 300000
        resultado = resultado / 60

        document.getElementById("divResultado").innerHTML = `O resultado é  ${resultado.toFixed(2)} minutos`

    } if (DistanciaKm > 1080000000){

        resultado = Number (DistanciaKm)/ 300000
        resultado = resultado / 60

        document.getElementById("divResultado").innerHTML = `O resultado é  ${resultado.toFixed(2)} horas`
    
    } 
}
