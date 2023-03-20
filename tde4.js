document.write(`1. Faça um programa que preencha por leitura um vetor de 10 posições, e conta quantos valores diferentes existem no vetor.`)

vetor = [10]
for(i=0;i<10;i++){
 vetor[i] = Number(prompt('Digite um numero: ')) 
}
 document.write(`<br>Os valores são: ${vetor}`)
 document.write(`<br>A quantidade posições do vetor é: ${vetor.length}`) 

//preciso verificar como funciona
vetor=[]
for(i=0;i<10;i++){
    vetor[i] = i
}


document.write(`<br>2. Crie um programa que leia quatro valores pelo teclado e guarde-os em um vetor.
No final mostre:
a) Quantas vezes apareceu o valor 9.
b) Em que posição foi digitado o primeiro valor 3.
c) Quais foram os números pares.`)

val = []
for (i = 0; i < 5; i++){
x = +(prompt(`Digite um valor:`))
val[i] = x
}
n = 0
par = []
for (i = 0; i < 5; i++) {
  if (val[i] == 9) {//selecionar qtd numeros.
    n += 1
  }
  if (val[i] % 2 == 0){//verificar os números pares.
    par.push(val[i])
  }
}
document.write(`<br>a)O numero '9' foi digitado: ${n} vezes.<br>
b) O '3' foi digitado na posição: ${val.indexOf(3)}.<br>
c) Os numeros pares são: ${par}.<br>`)

document.write(`3. Um dado é lançado 50 vezes, e o valor correspondente é armazenado em um vetor. Faça um programa que determine o percentual de ocorrências de face 6 do dado dentre esses 50 lançamentos.`)
dado = []
percentagem = 0
for(i=0;i<50;i++){
  //dado[i] = parseInt(Math.random() * 6) + 1
  dado[i] = Number(prompt('Digite os numeros: '))
  if(dado[i] == 6)
    percentagem++
}
document.write(`<br>A percentagem 6 é de: ${(percentagem/50)*100}%`)

document.write(`<br>4. Faça um Programa que leia um vetor de 5 números inteiros, mostre a soma, a multiplicação e os números.`)

vector1 = []
sum = 0
mult = 1
for(i = 0; i < 5; i++){
  vector1[i] = parseInt(prompt(`<br>Digite um numero: `))
  sum += vector1[i]
  mult *= vector1[i]
 }

document.write(`<br>Soma = ${sum}
<br>Multiplicação = ${mult}
<br>Lista = ${vector1}`)

document.write(`5. Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo vetor. Imprima a idade e a altura na ordem inversa a ordem lida.`)


document.write(`6. Utilizando um vetor, faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
a) "Telefonou para a vítima?"
b) "Esteve no local do crime?"
c) "Mora perto da vítima?"
d) "Devia para a vítima?"
e) "Já trabalhou com a vítima?"
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino".
Caso contrário, ele será classificado como "Inocente".`)

callfone = +(prompt('Telefonou para a vítima? (1 - Sim || 0 - Não)'))
position = +(prompt('Esteve no local do crime?(1 - Sim || 0 - Não)'))
reside = +(prompt('Mora perto da vítima?(1- Sim || 0 - Não)'))
debt = +(prompt('Devia para a vítima?(1- Sim || 0 -Não)'))
working = +(prompt('Já trabalhou com a vítima?(1- Sim ou 0-Não)'))
vetor = new Array(callfone, position, reside, debt, working)
x = soma(callfone, position, reside, debt, working)
if(x == 2){
  document.write(`<br>A pessoa é Suspeito.`)
}
else if(x < 2 && x > 4){
  document.write(`<br>A pessoa é Cúmplice.`)
}
else if(x == 5){
  document.write(`<br>A pessoa é o Assassino.`)
}else{
  document.write(`A pessoa interrogada é Inocente.`)
}

function soma(callfone, position, reside, debt, working){
  solution = callfone + position + reside + debt + working
  return solution;
}


document.write(`7. Faça um programa que simule um lançamento de dados. Lance o dado 10 vezes e armazene os resultados em um vetor. Depois, monte um outro vetor contendo quantas vezes cada valor foi obtido. Imprima os dois vetores. Use uma função para gerar números aleatórios, simulando os lançamentos dos dados.
Exemplo de uma possível saída:
[3, 1, 5, 3, 5, 4, 5, 5, 3, 6]
[1, 0, 3, 1, 4, 1]`)

// sorteio = []
//  for(i=0;i<7;i++){
//   sorteio[i] = (Math.random() * 7)
//   document.write(`<br>Os valores são: ${sorteio[i].toFixed(0)}`)
// }
// for(j=1;j<7;i++){
//    if(sorteio[i] == 1){
//    i++
//    }
//    else if(sorteio[i] == 2){
//    j++
//    }
//     else if(sorteio[i] == 3){
//     x++
//   }
//    else if(sorteio[i] == 4){
//     y++
//   }
//    else if(sorteio[i] == 5){
//     a++
//   }
//    else if(sorteio[i] == 6){
//     e++
//   }
// }
// final = new array [i++,j++,x++,y++,a++,e++]
// document.write(`<br>Os números aparecem ${sorteio[i]}`)


document.write(`8. Faça um programa que percorre um vetor e imprime na tela o valor mais próximo da média dos valores do vetor. Exemplo: vetor = [2.5, 7.5, 10.0, 4.0] (média = 6.0) Valor mais próximo da média = 7.5.`)


vector = []
for(i=0;i<4;i++){
  //media = vector[i] /4
  vector[i] = parseFloat(prompt(`<br>Digite os números: `))
}
document.write(`<br>A lista dos números: ${vector}`)
media = (vector[0] + vector[1] + vector[2] + vector[3]) / 4
document.write(`<br>A média dos valores é: ${media.toFixed(1)}`)
document.write(`<br>O valor mais proximo da media: ${Math.round(media).toFixed(1)}`)
