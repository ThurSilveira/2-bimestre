function js(){
    let vet = []

    for(let i = 0; i < 6; i++){
        vet.push(Number(prompt(`Informe o ${i+1}° elemento`))) // vet push = colocar valor no vet
    }
    //encontrar pares e impares
    let pares = []
    let impares = []
    for(let i = 0; i < 6; i++){
        if(vet[i] % 2 == 0){
            pares.push(vet[i])// da valor ao vet par
        }
        else{
            impares.push(vet[i])
        }
    }
    alert(`Quantidade de pares ${pares.length} - ${pares}`)
    alert(`Quantidade de impares ${impares.length} - ${impares}`) // Lenght = tamanho 
}