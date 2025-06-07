function exe5(){
    let vet = []
    // inserir valores no vet
    for(let i=0; i<10; i++){
        vet.push(Number(prompt(`Informe o ${i+1}° numero:`)))
    }
    // variaveis
    let maior = 0, menor = 0, iguais = 0
    for(let i=0; i<vet.length; i++){
        if(vet[i] > vet[0]){
            maior++
        }
        else if(vet[i] < vet[0])[
            menor++
        ]
        else{
            iguais++
        }
    }
    alert(`Quantidade de numeros maiores que ${vet[0]}, são: ${maior}`)
    alert(`Quantidade de numeros menores que ${vet[0]}, são: ${menor}`)
    alert(`Quantidade de numeros iguais que ${vet[0]}, são: ${iguais}`)
}