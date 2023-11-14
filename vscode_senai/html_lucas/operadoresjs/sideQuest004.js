/*Verificando Números Pares: Peça ao usuário para inserir um número e, em seguida, determine se é par ou ímpar.
*/ 

let num_usuario

num_usuario = prompt('Digite um numero : ')

function par_impar (num_usuario){

    if (num_usuario % 2 === 0){

        prompt(num_usuario +'É um numero par')
    
    } else
        prompt(num_usuario+ 'é um numero impar')
    
}
