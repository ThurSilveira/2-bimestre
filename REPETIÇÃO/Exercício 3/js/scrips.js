function FaixaE(){
    let conta = 1 // conta de 1 a 8
    let f1 = 0
    let f2 = 0
    let f3 = 0
    let f4 = 0
    let f5 = 0
    let idade
    while (conta <= 8){
        idade = Number(prompt(`Informe sua idade ${conta}`)) // prompt para o usuário informar a idade
        if (idade >= 0 && idade <= 15){
            f1++
        }
        else if (idade >= 16 && idade <= 30 ){
            f2++
        }
        else if (idade >= 31 && idade <= 45){
            f3++
        }
        else if (idade >= 46 && idade <= 60){
            f4++
        }
        else if (idade > 60 && idade < 81){
            f5++
        }
        else{
            alert (`Idade Invalida`)
            continue // volta para o inicio do loop
        }
        conta++ // conta = conta + 1
    } 
    alert(`A quantidade de pessoas da 1° faixa etária são:${f1}\nA quantidade de pessoas da 2° faixa etária são:${f2}\nA quantidade de pessoas da 3° faixa etária são:${f3}\nA quantidade de pessoas da 4° faixa etária são:${f4}\nA quantidade de pessoas da 5° faixa etária são:${f5}`)
    alert(`A porcentagem de pessoas da primeira faixa etária em relação ao total é: ${f1/8*100}`) 
    alert(`A porcentagem de pessoas da quinta faixa etária em relação ao total é: ${f5/8*100}`) 
}
