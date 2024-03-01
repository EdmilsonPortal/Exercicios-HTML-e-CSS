/*function Enviar(){
    let input = document.querySelector ("input").value
    function PaiImpar(n){
        if(n % 2 ===0){
            document.write(`<h1>${n} é PAR</h1>`)
        } else{
            document.write(`<h1>${n} é ÍMPAR</h1>`)
        }
    }
    PaiImpar(input)
}
*/

let botao = document.querySelector("button");
botao.addEventListener("keypress", (event) => {
    let input = document.querySelector("input").value
    ParImpar(input)
    })

    let input = document.querySelector("input")
    input.addEventListener("keypress", (event) => {
        let input = document.querySelector("input").value
        ParImpar(input)
    }
})