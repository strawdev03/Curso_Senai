/*Senha Segura: Peça ao usuário para criar uma senha. Verifique se a senha tem pelo menos 8 caracteres.
*/

let senha = prompt('Digite a senha')

    if(senha.length>=8 && senha != 12345678){
        alert('Senha aceita')
    }else
    alert("Senha ruim")