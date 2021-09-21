/*
    INSTRUÇÕES

    1) Identifique o algoritmo abaixo.
    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
    3) Introduza a função de comparação, de modo que o algoritmo possa ser utilizado com vetores de objetos.

    RESPOSTAS

    1) Identificação: algoritmo de busca binária
    2) Mapeamento das variáveis:
        z -> nome da função
        y -> vetor
        x -> valor de busca
        w -> posição inicial
        v -> posição final
        u -> posição do meio do vetor

*/

const z = (y, fnComp) => {
    let w = 0
    let v = y.length - 1
    while(v >= w) {
        let u = Math.floor((w + v) / 2)
        /*
        if(x === y[u]) return u
        else if(x > y[u]) w = u + 1
        else v = u - 1
        */
        switch(fnComp(y[u])) {
            case 0:
                return u
            case 1:
                w = u + 1
                break
            default:
                v = u -1
        }
    }
    return -1
}