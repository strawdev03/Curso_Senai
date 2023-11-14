let elementoInputLmtMin = document.getElementById("lmtMin")
let elementoInputLmtMax = document.getElementById("lmtMax")
let elementoInputMaxTentativas = document.getElementById("maxTentativas")
let elementoInputPalpiteJogador = document.getElementById("PalpiteJogador")
let elementoInputRestoTentativas = document.getElementById("restoTentativas")
let elementoLabelMsgJogador = document.getElementById("msgJogador")
let elementoInputPontos = document.getElementById("PontosJogador")
let elementoInputDicasNum = document.getElementById("DicasNumero")
let NumeroSecreto , pontos , pontosPorTentativa , 
MaximoTentativas,TentativasRestates , buttonIniciar = document.getElementById("buttonIniciar")
let venceu = false , botaoConfirma = document.getElementById("buttonConfirma")
let botaoDesisitir=document.getElementById("ButtonDesistir")



function Confirma() {
    
    if (TentativasRestates>0){
        let chute = Number (elementoInputPalpiteJogador.value)
        console.log ("chute: "+chute)
        TentativasRestates --
        elementoInputRestoTentativas.value = TentativasRestates 
        
         if (chute == NumeroSecreto ){

            alert ("Parabens, voce acertou!")
            limparDefinicoes ()


        }else if(chute>NumeroSecreto) {

            elementoInputDicasNum.value = "Chutou alto"
            pontos = pontos - pontosPorTentativa
            
        }else{
            
            elementoInputDicasNum.value = "Chutou baixo"
            pontos -= pontosPorTentativa
            
        }
        elementoInputPontos.value = pontos.toFixed(0) 

        if (pontos<1){
            pontos= 0
        }


    }
    else if (TentativasRestates == 0 && venceu == false) {
        
        elementoLabelMsgJogador.innerHTML = "Perdeu, tente novamente"
        buttonIniciar.disabled = false
        botaoConfirma.disabled = false
        
        limparDefinicoes ()
    } 
    else
    {
        alert ("acabou")
    }
    elementoInputPalpiteJogador.value = ""
    elementoInputPalpiteJogador.focus()
    


}

function Iniciar() {

    
    buttonIniciar.disabled = true
    NumeroSecreto = (Math.floor(Math.random() * ( Number(elementoInputLmtMax.value) - Number(elementoInputLmtMin.value) + 1) + Number(elementoInputLmtMin.value)))
    MaximoTentativas = Number(elementoInputMaxTentativas.value)
    
    TentativasRestates = MaximoTentativas
    elementoInputRestoTentativas.value = TentativasRestates 
    
    console.log ("Maximo de tentativas : "+MaximoTentativas)
    console.log ("Numero Secreto :"+ NumeroSecreto)

    pontosPorTentativa = 100 / MaximoTentativas
    pontos = 100
    elementoInputPontos.value = pontos 
    venceu = false
    
    
}   

function Desistir() {

    alert ("Você desistiu da partida.")
    Iniciar()
    limparDefinicoes()
    buttonIniciar.disabled = true
    
}
function limparDefinicoes () {


    elementoInputLmtMin.value = ""
    elementoInputLmtMax.value = ""
    elementoInputMaxTentativas.value = ""
    botaoConfirma.disabled = true
    
    
}