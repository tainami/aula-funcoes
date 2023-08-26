// Exercício 1 
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) // 10
console.log(minhaFuncao(10)) // 50
// Se tirar os consoles, não aparece nada no console.

// Exercício 2 
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
// A função vai pegar o texto que o usuário inseriu, retorna-lo com letras minúsculas e verificar se contém a palavra "cenoura".
console.log(outraFuncao("Eu gosto de cenoura")) // true
console.log(outraFuncao("CENOURA é bom pra vista")) // true
console.log(outraFuncao("Cenouras crescem na terra")) // true

// Exercício 3
function imprimeInformacoes() {
    console.log("Eu sou Tainá, tenho 20 anos, moro no Rio Grande do Sul e sou estudante.")
}

imprimeInformacoes()

// Exercício 4 

	// a)
	function informacoes(nome, idade, cidade, profissao) {
		console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
	}
	informacoes("Lais", 23, "São Paulo", "instrutora.")

	const calcularSoma = (a, b) => {
		return a + b
	}
	console.log(calcularSoma(20, 30))

	// b)
	const verificaMaiorValor = (a, b) => {
		return a > b
	}
	console.log(verificaMaiorValor(10, 2))

	// c)
	const verificaPar = (number) => {
		return number % 2 == 0
	}
	console.log(verificaPar(17))

	// d)
	const tamanhoFrase = (frase) => {
		let fraseMaiuscula = frase.toUpperCase()
		return fraseMaiuscula + " = " + frase.length 
	}
	console.log(tamanhoFrase("Brilha estrelinha"))

// Exercício 5
const soma = (a, b) => {return "Soma: " + a + b}
const subtracao = (a, b) => {return "Subtração: " + a - b}
const multiplicacao = (a, b) => {return "Multiplicação: " + a * b}
const divisao = (a, b) => {return "Divisão: " + a / b}

function imprimeOperacoes() {
	const primeiroNumero = Number(prompt("Digite o primeiro número"))
	const segundoNumero = Number(prompt("Digite o segundo número"))
	console.log(soma(primeiroNumero, segundoNumero))
	console.log(subtracao(primeiroNumero, segundoNumero))
	console.log(multiplicacao(primeiroNumero, segundoNumero))
	console.log(divisao(primeiroNumero, segundoNumero))
}
imprimeOperacoes()

