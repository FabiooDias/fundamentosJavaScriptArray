const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie',
                'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos',
                'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicus', 'Renan', 'Renata',
                'Daisy', 'Camilo']

const sala1 = nomes.slice(0, nomes.length / 2) // Slice divide os Arrays passando dois parametros, o primeiro é o ponto de partida e o segundo ate onde ira pegar os dados do Array
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)