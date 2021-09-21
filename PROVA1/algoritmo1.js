/*
    INSTRUÇÕES

    1) Identifique o algoritmo abaixo.
    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
    3) Introduza a função de comparação, de modo que o algoritmo possa ser utilizado com vetores de objetos.

    RESPOSTAS:
    1) Identificação do algoritmo: algoritmo de ordenação Merge Sort
    2) Mapeamento das variáveis:
        z -> nome da função
        y -> parâmetro da função (vetor)
        x -> meio do vetor
        w -> subvetor da esquerda
        v -> subvetor da direita
        u -> sobra da mesclagem
        t -> posição do subvetor esquerdo
        s -> posição do subvetor direito
        r -> vetor de resultado

*/

const z = (y, fnComp) => {
    if(y.length < 2) return y 
    let x = Math.floor(y.length / 2)
    let w = y.slice(0, x)
    let v = y.slice(x)
    let u
    w = z(w, fnComp)
    v = z(v, fnComp)
    let t = 0, s = 0, r = []
    while(t < w.length && s < v.length) {
        //if(w[t] < v[s]) {
        if(fnComp(v[s], w[t])) {
            r.push(w[t])
            t++
        }
        else {
            r.push(v[s])
            s++
        }
    }
    if(t < s) u = w.slice(t)
    else u = v.slice(s)
    return [...r, ...u]
}

/*
let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

let numsOrd = z(nums, (a, b) => a > b)

console.log(numsOrd)
*/