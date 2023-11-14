
    
    
    let resultado = document.getElementById("DivResultado"), i , sub , adi

    function novoConteudo() {

       
        
        for( i= 0 ; i <= 250 ; i++  ){
            
            
            resultado.innerHTML += `${i}<br>`

        }

        resultado.innerHTML += `<br><br>Acabei o primeiro ;)<br><br>`

        for( i= 250 ; i >= 100 ; i--  ){
            
            
            resultado.innerHTML += `${i}<br>`

        }

        resultado.innerHTML += `<br><br>Acabei o segundo ;)<br><br>`

        for( i = 100 ; i >= 0 ; i-- ){
            
            resultado.innerHTML += `${i}<br>`
            sub = i - 4
            i = sub

        }

        resultado.innerHTML += `<br><br>Acabei o terceiro ;)<br><br>`

        for( i = 0 ; i <= 9500 ; i++ ){
            
            resultado.innerHTML += `${i}<br>`
            adi = i + 2
            i = adi

        }

         resultado.innerHTML += `<br><br>Acabei o quarto ;)<br><br>`
        
         for( i = 9500 ; i <= 9600  ; i++ ){
            
             resultado.innerHTML += `${i}<br>`
             i += 1             
           

         }

        resultado.innerHTML += `<br><br>Acabei o quinto ;)<br><br>`

}
         