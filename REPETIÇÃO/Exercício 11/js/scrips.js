function js(){
    let num, somapar = 0, somaprimo = 0, dois = 0
    for(let i = 0; i < 10; i++){
        num = Number(prompt(`Informe um número:`))
        if(num % 2 === 0){
            if(num === 2){
                dois++
            }
            somapar += num
        }
        else if(num != 2, num != 3, num != 5, num != 7){
            somaprimo += num
        }
    }
    alert(`A soma dos numeros pares: ${somapar}`)
    alert(`A soma dos numeros primos: ${somaprimo+(dois*2)}`)
}