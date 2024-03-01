//Faça um código com switch/case e, para cada caso, diga se o usuário tem permissão comum, gerente ou diretor
let permissao = "COMUM"
permissao = permissao.toLowerCase()

switch (permissao){
    case "COMUM":
    console.log (`A SUA PERMISSÃO É COMUM`);
    break;
    
    case "GERENTE":
    console.log (`A SUA PERMISSÃO É GERENTE`);
    break;
    
    case "DIRETOR":
    console.log (`A SUA PERMISSÃO É DIRETOR`);
    break;

    default:
        console.log (`USUÁRIO NÃO TEM PERMISSÃO`);
}

//Faça uma calculadora que realize as operações de soma, subtração, adição e divisão. Utilize o switch/case para fazer que os usuários escolham a opção individual de cada operação
let num1, num2
let operacao = "SUBTRAÇÃO"
calculadora = calculadora.toLowerCase()

switch (calculadora){
    case "adição":
    console.log (`A SUA OPERAÇÃO MATEMÁTICA SERÁ ADIÇÃO`);
    break;
    
    case "subtração":
    console.log (`A SUA OPERAÇÃO MATEMÁTICA SERÁ SUBTRAÇÃO`);
    break;
    
    case "multiplicação":
    console.log (`A SUA OPERAÇÃO MATEMÁTICA SERÁ MULTIPLICAÇÃO`);
    break;

    case "divisão":
    console.log (`A SUA OPERAÇÃO MATEMÁTICA SERÁ DIVISÃO`);
    break;

    default:
        console.log (`OPERAÇÃO NÃO RECONHECIDA`);
}

//Escreva um programa para ler 2 valores (considere que não serão informados valores iguais) e escrever o maior deles
