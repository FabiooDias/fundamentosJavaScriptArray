const alunos = ['Joao', 'Juliana', 'Caio', 'Ana']
const mediasDosAlunos = [10, 7, 9, 6]


let listaDeNotasEAlunos = [alunos, mediasDosAlunos] //Um array que recebe dentro dele como dado outros arrays

const exibiNomeNota = nomeAluno => {
    if(listaDeNotasEAlunos[0].includes(nomeAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice]
    } else {
        return 'Aluno não esta cadastrado'
    }
}
console.log(exibiNomeNota("Juliana"))