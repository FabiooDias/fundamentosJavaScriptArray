const alunos = ['Joao', 'Juliana', 'Caio', 'Ana']
const mediasDosAlunos = [10, 7, 9, 6]
const aprovados = [true, true, true, false]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos, aprovados] //Um array que recebe dentro dele como dado outros arrays

console.log(listaDeNotasEAlunos)
for(let i=0; i< alunos.length; i++){
    if(listaDeNotasEAlunos[2][i]===true){
        listaDeNotasEAlunos[2][i] = "Aprovado"
        console.log(`${listaDeNotasEAlunos[0][i]}, sua média é ${listaDeNotasEAlunos[1][i]}, então o aluno esta ${listaDeNotasEAlunos[2][i]}`)
    } else {
        listaDeNotasEAlunos[2][i] = "Reprovado" 
        console.log(`${listaDeNotasEAlunos[0][i]}, sua média é ${listaDeNotasEAlunos[1][i]}, então o aluno esta ${listaDeNotasEAlunos[2][i]}`)
    }
}