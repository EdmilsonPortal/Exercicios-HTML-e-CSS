/*Implemente uma função que recebe um array de números e retorna a soma desses números usando uma estrutura de laço for.*/

function somaArray (array){
    let soma = 0;
    for(let i = 0; i < array.length; i++){
        soma += array[i]
    }
    return soma
}
console.log(somaArray([1,2,3,4,5]))