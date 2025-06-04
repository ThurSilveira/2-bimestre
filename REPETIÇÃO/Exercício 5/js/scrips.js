function ex5(){
    let preco = 5.0, quant = 120
    const despesa = 200
    let aux = ""
    let lucro, maiorlucro = 0

    while(preco >= 1.0){
        lucro = (preco * quant) - despesa
        if (lucro > maiorlucro){
            maiorlucro = lucro
        }
        aux = aux + `\n` + (`${preco} - ${quant} - ${despesa} - ${lucro}`)
        quant = quant + 26
        preco = preco - 0.5
    }
    alert(aux)
    alert(`O maior lucro é: ${maiorlucro}`)
}