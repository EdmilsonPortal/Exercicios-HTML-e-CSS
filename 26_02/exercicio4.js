/*Faça um objeto que contenha uma propriedade, e seu valor seja uma lista de nomes, utilizando os recursos mostrados anteriormente, mostre qual é o maior nome da lista. */
let listadenomes = ['Edmilson', 'Portal', 'Almeida'];
let maiorNome = ""
for (let nome in listadenomes){
    if(listadenomes[nome].length > maiorNome.length){
        maiorNome = listadenomes[nome];
        }
}
console.log("O maior nome na lista é:", maiorNome)