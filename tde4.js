document.write(`1. Faça um programa que preencha por leitura um vetor de 10 posições, e conta quantos valores diferentes existem no vetor.`)

vetor = [10]
for(i=0;i<10;i++){
 vetor[i] = Number(prompt('Digite um numero: ')) 
}
 document.write(`<br>Os valores são: ${vetor}`)
 document.write(`<br>A quantidade posições do vetor é: ${vetor.length}`) 

preciso verificar como funciona
vet1=[]
for(i=0;i<10;i++){
    vet1[i]=i
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