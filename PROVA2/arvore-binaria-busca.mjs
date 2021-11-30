 /*
    1. Todas as questões deste arquivo referem-se à árvore binária de busca representada
        na imagem "abb.png".

    2. Caso seja necessário escrever algum código para responder às perguntas seguintes,
        importe a classe BinarySearchTree neste arquivo e faça os testes aqui.

    3. Qual a altura da subárvore à direita de 45?
        RESPOSTA ~> A altura é 6 (seis).

    4. Quais níveis da árvore estão completos, isto é, já contêm o número máximo de nodos
        permitidos?
        RESPOSTA ~> Os níveis 0, 1, 2 e 3 contêm o número máximo de nodos a eles permitidos.
    
    5. Qual a profundidade do nodo de valor 27, em relação à árvore como um todo?
        RESPOSTA ~> A altura do nodo de valor 27 é 4 (quatro).

    6. A árvore representada está equilibrada? Por quê? Justifique sua resposta.
        RESPOSTA ~> Sim, porque a diferença de altura entre as subárvores direita e esquerda
                    é maior do que 1 (um).

    7. Qual será o resultado do percurso pré-ordem após terem sido excluídos os nodos
        de valor 42, 39, 49, 51 e 54?
        RESPOSTA ~> 45, 24,  9,  3,  0,  6, 15, 12, 18, 36, 27, 33, 72, 66, 60, 57,
                    63, 69, 84, 78, 75, 81, 96, 90, 99

    8. Após a exclusão dos nodos 42, 39, 49, 51 e 54, se for removido o nodo raiz (de 
        valor 45), qual(is) nodo(s) poderia(m) ocupar o seu lugar? Justifique sua resposta.
        RESPOSTA ~> Os valores possíveis para a nova raiz são 36 (maior valor da subárvore esquerda)
                    ou 57 (menor valor da subárvore direita).
*/

import BinarySearchTree from './lib/BinarySearchTree.mjs'

let arvore = new BinarySearchTree()

arvore.insert(45)
arvore.insert(24)
arvore.insert(72)
arvore.insert(9)
arvore.insert(39)
arvore.insert(66)
arvore.insert(84)
arvore.insert(3)
arvore.insert(15)
arvore.insert(36)
arvore.insert(42)
arvore.insert(60)
arvore.insert(69)
arvore.insert(78)
arvore.insert(96)
arvore.insert(0)
arvore.insert(6)
arvore.insert(12)
arvore.insert(18)
arvore.insert(27)
arvore.insert(49)
arvore.insert(75)
arvore.insert(81)
arvore.insert(90)
arvore.insert(99)
arvore.insert(33)
arvore.insert(54)
arvore.insert(51)
arvore.insert(57)
arvore.insert(63)

// 42, 39, 49, 51 e 54

arvore.remove(42)
arvore.remove(39)
arvore.remove(49)
arvore.remove(51)
arvore.remove(54)

let percurso = []
arvore.preOrderTraversal(val => percurso.push(val))
console.log(percurso)
