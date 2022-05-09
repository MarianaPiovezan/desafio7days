/*1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.*/

const nome = prompt('Olá Dev, qual o seu nome?')
const areaDev = prompt(
  `${nome} gostaria de seguir na área de Front-End ou de Back-End?`
)

if (areaDev === 'Front-End') {
  const linguagemFront = prompt(`Em ${areaDev}, quer aprender React ou Vue?`)
  console.log(linguagemFront)
}

if (areaDev === 'Back-End') {
  const linguagemBack = prompt(`Em ${areaDev}, quer aprender C# ou Java?`)
  console.log(linguagemBack)
}

if (areaDev === 'Back-End' || areaDev === 'Front-End') {
  const areaEscolhida = prompt(
    `${nome}, quer seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? Digite 1 para área escolhida ou 2 para fullstack.`
  )
  console.log(areaEscolhida)
}

let outrasEspecializacoes = [
  'JavaScript',
  'Python',
  'PHP',
  'C++',
  'TypeScript',
  'Ruby',
  'C',
  'CSS',
  'Swift',
  'Objective-C',
  'Angular',
  'HTML',
  'Shell',
  'Scala',
  'Go',
  'PowerShell'
]

for (let i = 0; i < outrasEspecializações.length; i++) {
  const outraTecnologia = alert(
    `Gostaria de conhecer mais sobre ${outrasEspecializacoes[i]}?`
  )
  console.log(outraTecnologia)
}
