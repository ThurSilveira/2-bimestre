function js(){
    let idade, peso, altura
    let idades = 0, casoba = 0, casoca = 0, casocb = 0

    for(let i = 0; i < 10; i++){
        idade = Number(prompt(`Informe a idade n° ${i+1}`))
        idades += idade
        peso = Number(prompt(`Informe o peso n° ${i+1}`))
        altura = Number(prompt(`Informe a altura n° ${i+1}`))

        if(peso > 90 && altura < 1.50){
            casoba++
        }
        if (altura > 1.90) {
            casocb++
            if (idade >= 10 && idade <= 30){
                casoca++
            }
        }
    }
    alert(`A média das idades das 10 pessoas: ${idades/10}`)
    alert(`A quantidade de pessoas com peso superior a 90kg e altura inferior a 1.50m: ${casoba}`)
    if(casocb > 0){
        alert(`A porcentagem de pessoas com idade entre 10 e 30 anos, entre as pessoas que medem mais de 1.90m: ${(casoca/casocb) * 100}`)
    }
}