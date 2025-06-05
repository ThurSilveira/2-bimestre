function js(){
    let vet = [] 

    for(let i = 0; i < 10; i++){
        vet.push(Number(prompt(`informe o ${i+1}° grau de satisfação:\n(1 = Gostou muito)\n(2 = Gostou)\n(3 = Não Gostou)`)))
    }
    let um = 0, dois = 0, tres = 0

    for(let i=0; i<10; i++){
        if(vet[i] == 1){
            um++
        }
        else if(vet[i] == 2){
            dois++
        }
        else{
            tres++
        }
    }
    alert(`Quantidade de pessoas que gostaram muito: ${um}`)
    alert(`Quantidade de pessoas que gostaram: ${dois}`)
    alert(`Quantidade de pessoas que não gostaram: ${tres}`)
    alert(`A porcentagem de pessoas que não gostaram ao total: ${(tres*100)/10}%`)
}