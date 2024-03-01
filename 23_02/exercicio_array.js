//Faça um array com 3 valores de média, tire a média desses três valores e guarde em uma variável, no final mostre a variável com a média.

let notas = [6, 3, 12];
let media = (notas[0]+notas[1]+notas[2])/3;
console.log("A média das notas é:", media)

//Faça um objeto que contenha um nome de um filme, a nota que você dá pra ele 0-10, gênero do filme, ao final faça um console personalizado, mostrando o filme, a nota, e o gênero do filme.
let filme = {
Nome: "Titanic",
Genero: "Drama",
Nota: 5
}
console.log ("O nome do filme é:", filme.Nome)
console.log ("O gênero do filme é:", filme.Genero)
console.log ("A nota do filme é:", filme.Nota)

//Faça um programa que tenha um ARRAY, contendo 3 elementos dentro, e utilizando o método SLICE, pegue a primeira letra de cada elemento.
let elemento = ["CPU", "Monitor", "Teclado"];
let primeiraletra = elemento[0].slice(0,1);
let primeiraletra1 = elemento[1].slice(0,1);
let primeiraletra2 = elemento[2].slice(0,1);
console.log ("A primeira letra do primeiro elemento é:", primeiraletra)
console.log ("A primeira letra do segundo elemento é:", primeiraletra1)
console.log ("A primeira letra do terceiro elemento é:", primeiraletra2)

//Faça um array que contenha 5 números, e com a estrutura de repetição FOR, e utilizando o IF/ELSE diga qual é o maior número do array.
let nums = [30, 10, 15, 20, 25];
let maior = nums[0];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maior) {
        maior = nums [i]
    }
}
console.log ("O maior número é: " +maior);

//Faça um programa com o loop FOR, que some todos os valores do loop, e ao final mostre a média desses valores, e a soma

//Faça um programa com o loop FOR, que some todos os valores do loop, e ao final mostre a média desses valores, e a soma

//Faça um array que contenha 5 números, e com a estrutura de repetição FOR, e utilizando o IF/ELSE diga qual é o MENOR número do array.

//Faça um loop FOR que encontre todos os números PARES, e todos os números ÍMPARES, e armazene respectivamente os dois em um array denominado PAR e outro ÍMPAR dica (Para sabermos se um número é PAR o seu resto da divisão por 2, deve ser igual a 0, Para sabermos se um número é ÍMPAR, seu resto da divisão por 2 deve ser diferente de 0. exemplo > 1 % 2 == 0 - Impar / 2 % 2 == 0 - Par

