function js(){
    // solicite 10 num; calcule e mostre o vetor alterado =/ par = somar 10 no elemento; impar = multiplicar por 3 o elemento. 
    let vet = []

    for(let i=0; i<10; i++){
        vet.push(Number(prompt(`Informe o ${i+1}° valor:`)))
    }

    for(let i=0; i<10; i++){
        if(vet[i] % 2 == 0){
            vet[i] = vet[i]+10
        }
        else{
            vet[i] = vet[i]*3
        }
    }
    alert(`Vetor alterado ${vet}}`)
}