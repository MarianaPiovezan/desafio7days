const nome = prompt('Qual o seu nome?')
const idade = prompt('Qual a sua idade?')
const linguagem = prompt('Qual linguagem de programação você está estudando?')

const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`

console.log(msg)

const pergunta = prompt(
  `Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`
)
const resposta = 1

if (pergunta == 1) {
  console.log('Muito bom! Continue estudando e você terá muito sucesso.')
} else {
  console.log('Ahh que pena... Já tentou aprender outras linguagens?')
}
