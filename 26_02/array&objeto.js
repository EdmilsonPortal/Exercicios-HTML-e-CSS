//Utilizando um dos recursos mostrado anteriormente, faça um código para detectar se o objeto está vazio ou não.
let objeto = {};
if (Object.keys(objeto).length === 0){
    console.log ("Vazio");
} else {
    console.log ("Cheio");
}

//Faça um objeto chamado ListaDeCompras, e dentro desse objeto crie uma propriedade chamada produtos, e dentro dela coloque os produtos, e seus respectivos valores, e utilizando uma dos recursos mostrados anteriormente, faça a soma total desses valores.
let listadecompras = {
    produtos: {
        'Leite': 8,
        'Acucar': 8,
        'Arroz': 8,
    }
    let soma = 0
    for(let compras of Object.values (listadecompras.produtos)){
        soma += compras
    }
    console.log(soma)
    }

//Crie um objeto, e utilizando um dos recursos mostrado anteriormente, ache a propriedade que contenha 0 como valor.