let chute , aleatorio
aleatorio = Math.random ()*10
aleatorio = Math.ceil(aleatorio)

chute = Number(prompt('Adivinhe o número : '))

    if(chute==aleatorio){
        alert('Parabéns você acertou !\n Era :'+aleatorio)
    }else if(chute<aleatorio){
        alert('chute baixo! \n Era : '+aleatorio)
    }else {
        alert('chute alto!\n Era : '+aleatorio)
    }
        
    
    console.log (aleatorio)


