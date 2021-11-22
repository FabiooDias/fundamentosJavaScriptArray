const listaDeChamadas = ['Joao', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

listaDeChamadas.splice(1, 2, 'Rodrigo') // retira dados de dentro de um determinado array. possue tres parametros.
//Primeiro parametro: de qual indice vai partir, segundo indice apartir do primeiro quando indices vão ser retirados, terceiro indice adiciona um dado no espaço retirado

listaDeChamadas.splice(2, 0, 'Rodrigo')// vai adicionar antes do segundo indice o nome 'Rodrigo' e nao ira retirar nada do Array
console.log(`Lista de chamadas: ${listaDeChamadas}`)