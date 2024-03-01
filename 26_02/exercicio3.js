/*Crie um objeto, e utilizando um dos recursos mostrado anteriormente, ache a propriedade que contenha 0 como valor.

Objeto Exemplo:
const livros = {
 'O Iluminado': 50,
 'Os Sete Maridos de Evelyn Hugo': 60,
 'O Hobbit': 0,
 }
*/


let livros = {
    'O Iluminado': 50,
    'Os Sete Maridos de Evelyn Hugo': 60,
    'O Hobbit': 0,
}
for (let livro in livros){
    if(livros[livro] ===0){
        console.log(livro)
    }
}
 