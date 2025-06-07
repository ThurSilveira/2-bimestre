function exe4(){
    let vet = []
    // inserir valores no vet
    for(let i=0; i<8; i++){
        vet.push(Number(prompt(`Informe o ${i+1}° numero:`)))
    }
    // fazer a media
    let acm = 0, med
    for(let i=0; i<8; i++){
        acm += vet[i]
    }
    med = acm / vet.length
    // novo vet para numeros acima da media
    let num = []
    for(let i=0; i<vet.length; i++){
        if(vet[i] > med){
            num.push(vet[i])
        }
    }
    // final
    alert(`A média foi de: ${med}`)
    alert(`A quantidade de valores acima da média são: ${num.length}`)
    alert(`Numeros acima da media ${num}`)
}

