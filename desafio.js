/*
a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro
b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.
Faça a soma entre esses valores e chame a sua primeira função mandando este resultado 
da soma como entrada para imprimi-lo
*/
let primeiraFuncao = (parametro) => {
    return parametro
}

let segundaFuncao = (primeiroValor, segundoValor) => {
    let resultadoSoma = primeiroValor + segundoValor
    let resultado = primeiraFuncao(resultadoSoma)
    console.log(resultado)
}
segundaFuncao(2, 3)

/*
Faça uma função que execute o teorema de Pitágoras, 
recebendo dois catetos e calculando o valor da hipotenusa. 
Retorne este valor, invoque a função e imprima o resultado no console. 
*/
function valorDaHipotenusa(primeiroCateto, segundoCateto) {
    // A hipotenusa é igual à raiz quadrada da soma dos catetos ao quadrado”.
    somaCatetos = (primeiroCateto ** 2) + (segundoCateto ** 2)
    hipotenusa = somaCatetos ** 0.5
    return hipotenusa
}
console.log(valorDaHipotenusa(5, 5))