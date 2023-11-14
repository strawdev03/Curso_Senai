let ResultadoSomaAB = document.getElementById("SomaAB"),
    ResultadoSubAB = document.getElementById("SubtracaoAB"),
    ResultadoSomaBA = document.getElementById("SomaBA"),
    ResultadoMultAB = document.getElementById("MultiplicacaoAB"),
    ResultadoDivisaoAB = document.getElementById("DivisaoAB"),
    ResultadoDivisaoBA = document.getElementById("DivisaoBA"),
    ResultadoPotenciaAB = document.getElementById("potenciaAB"),
    ResultadoPotenciaBA = document.getElementById("potenciaBA"),
    ResultadoRaizA = document.getElementById("RaizA"),
    ValorA = Number(document.getElementById("inputA").value),
    ValorB = Number(document.getElementById("inputB").value); 

function calculos() {
    let soma = ValorA + ValorB

    ResultadoSomaAB = soma
     
}
