


function calcular (){
    
    let tabuada = document.getElementById("elementoIpuntTab").value , resultado , i 

    for( i= 0 ; i <= 10 ; i++  ){

        document.getElementById("DivResultado").innerHTML += `<br>${i} x ${tabuada} = ${(i * tabuada)}`

    }
}













