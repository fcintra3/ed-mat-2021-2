/*
    INSTRUÇÕES

    1) Identifique o algoritmo abaixo.
    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
    3) Introduza a função de comparação, de modo que o algoritmo possa ser utilizado com vetores de objetos.

    RESPOSTAS

    1) Identificação: algoritmo de ordenação Selection Sort
    2) Mapeamento das variáveis
        z -> nome da função
        y -> vetor a ser ordenado
        x -> contador do for que vai até a penúltima posição
        w -> posição do menor valor
        i -> contador do for que busca o menor valor no restante do vetor


*/

const z = (y, fnComp) => {
    for(let x = 0; x < y.length - 1; x++) {
        let w = x + 1
        for(let i = w + 1; i < y.length; i++) {
            //if(y[w] > y[i]) w = i
            if(fnComp(y[w], y[i])) w = i
        }
        //if(y[x] > y[w]) {
        if(fnComp(y[x], y[w])) {
            [ y[x], y[w] ] = [ y[w], y[x] ]
        }
    }
}