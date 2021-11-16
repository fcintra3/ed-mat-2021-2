/*
    ESTRUTURA DE DADOS ÁRVORE BINÁRIA DE BUSCA
    - Árvore ~> é uma estrutura de dados não-linear, hierárquica,
      que é formada recursivamente por outras subárvores.
    - Árvore binária ~> uma árvore na qual cada nodo tem grau máximo
      igual a 2 (ou seja, cada nodo pode ter, no máximo, dois descendentes
      diretos).
    - Árvore binária de busca ~> é uma árvore binária otimizada para a
      operação de busca binária. Por isso, na inserção, os valores são 
      colocados já em ordem.
*/

/* Classe que representa a unidade de informação da árvore binária de busca */
class Node {
    constructor(val) {
        this.data = val     // Armazena a informação relevante para o usuário
        this.left = null    // Ponteiro para a subárvore esquerda
        this.right = null   // Ponteiro para a subárvore direita
    }
}

/* Classe que implementa a árvore binária de busca */
class BinarySearchTree {

    #root           // Raiz da árvore

    constructor() {
        this.#root = null
        console.log('Árvore: ', this.#root)
    }

    /* Método para efetuar inserção na ABB */
    insert(val) {

        const inserted = new Node(val)

        // 1º caso: árvore vazia
        // O primeiro nodo fica sendo a raiz da árvore
        if(this.#root === null) this.#root = inserted

        // 2º caso: inserção recursiva, percorrendo a árvore
        // recursivamente
        else this.#insertNode(inserted, this.#root)

        console.log('Árvore: ', this.#root)
    }

    /* Método PRIVADO que insere um novo nodo na árvore
       Parâmetros:
       inserted ~> nodo a ser inserido
       root ~> a raiz da subárvore onde o nodo será inserido
    */
    #insertNode(inserted, root) {
        // 1º caso: o valor a ser inserido é MENOR que o valor da raiz;
        // inserção ocorre à ESQUERDA da raiz
        if(inserted.data < root.data) {
            // Se a posição à esquerda da raiz está desocupada, faz aí a inserção
            if(root.left === null) root.left = inserted
            // Senão, reinicia o processo de inserção, recursivamente, com a
            // subárvore esquerda como raiz
            else this.#insertNode(inserted, root.left)
        }

        // 2º caso: o valor a ser inserido é MAIOR que o valor da raiz;
        // a inserção ocorre à DIREITA da raiz
        else if(inserted.data > root.data) {
            // Se a posição à direita da raiz está desocupada, faz aí a inserção
            if(root.right === null) root.right = inserted
            // Senão, reinicia o processo de inserção, recursivamente, com a
            // subárvore direita como raiz
            else this.#insertNode(inserted, root.right)
        }

        // 3º caso: o valor a ser inserido é IGUAL ao valor da raiz;
        // não se faz nada, já que a ABB, por definição, não deve ter valores
        // repetidos
    }

}

///////////////////////////////////////////////////////////////////////////

const arvore = new BinarySearchTree()

arvore.insert(48)
arvore.insert(71)
arvore.insert(15)
arvore.insert(29)
arvore.insert(57)