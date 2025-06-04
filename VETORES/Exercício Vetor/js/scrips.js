function js(){
    let vet = [] 

    for (let i = 0; i < 4; i++){
        vet.push(Number(prompt(`informe o ${i+1}° elemento`)))
    }

    let soma = 0

    for(let i = 0; i < vet.length; i++){
        soma += vet[i]
    }
    alert(vet.length) // tamanho do vet
    alert(soma/4)
}