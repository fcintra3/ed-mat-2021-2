/*
    1. Veja, na imagem "torres-hanoi.png", como funciona o jogo das Torres de Hanoi.

    2. Cada uma das torres do jogo se comporta como uma pilha. Importe a classe
        apropriada e crie três pilhas, representando as três torres.
*/

import Stack from './lib/Stack.mjs'

const torreA = new Stack()
const torreB = new Stack()
const torreC = new Stack()

/*

    3. Use os valores 1, 2 e 3 para representar os discos. Empilhe-os na primeira
        torre.

*/

torreA.push(3)
torreA.push(2)
torreA.push(1)

console.log('------ ANTES ---------')
console.log('Torre A:', torreA.print())
console.log('Torre B:', torreB.print())
console.log('Torre C:', torreC.print())

/*

    4. Desempilhe um dos discos da primeira torre e empilhe-o na terceira.

*/

torreC.push(torreA.pop())

/*

    5. Desempilhe o disco remanescente da primeira torre e coloque-o na segunda.

*/

torreB.push(torreA.pop())

/*

    6. Desempilhe o disco da terceira torre e coloque-o sobre o disco da segunda torre.

*/

torreB.push(torreC.pop())

/*

    7. Desempilhe o disco da primeira torre e coloque-o na terceira torre.

*/

torreC.push(torreA.pop())

/*

    8. Desempilhe um dos discos da segunda torre e coloque-o na primeira torre.

*/

torreA.push(torreB.pop())

/*

    9. Desempilhe o disco da segunda torre e coloque-o sobre o disco da terceira torre.

*/

torreC.push(torreB.pop())

/*
    10.Finalmente, desempilhe o disco da primeira torre e coloque-o na terceira torre.

*/

torreC.push(torreA.pop())

/*

    11.Use o método print() para exibir as três pilhas. As duas primeiras devem estar
        vazias e a terceira deve conter os três discos, na ordem (3 na base, 1 no topo).
        
*/

console.log('------ DEPOIS ---------')
console.log('Torre A:', torreA.print())
console.log('Torre B:', torreB.print())
console.log('Torre C:', torreC.print())