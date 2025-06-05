function js(){
    // solicite 10 num; calcule e mostre o vetor alterado =/ par = somar 10 no elemento; impar = multiplicar por 3 o elemento. 
    let vet = []

    for(let i=0; i<10; i++){
        vet.push(Number(prompt(`Informe o ${i+1}° valor:`)))
    }
    let pares = []
    let impares = []

    for(let i=0; i<10; i++){
        if(vet[i] % 2 == 0){
            pares.push(vet[i]+10)
        }
        else{
            impares.push(vet[i]*3)
        }
    }
    alert(`Quantidade de pares ${pares.length} - ${pares}`)
    alert(`Quantidade de impares ${impares.length} - ${impares}`)
}