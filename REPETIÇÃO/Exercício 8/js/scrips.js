function js(){
    let idade, altura, peso, idademaior = 0, pessoas12 = 0, altura12 = 0, pesoinf = 0
    for (let i = 0; i < 5; i++){
        idade = Number(prompt("Informe sua idade"))
        altura = Number(prompt("Informe sua altura")) 
        peso = Number(prompt("Informe seu peso em KG"))
        if(idade > 50){
            idademaior++
        }
        else if (idade > 9 && idade < 21){
            pessoas12++
            altura12 += altura
        }
        else if (peso < 40){
            pesoinf++
        }

    }
    alert(`O total de pessoas com idade superior a 50 anos:  ${idademaior}`)
    alert(`A média das alturas das pessoas com idade entre 10 e 20 anos: ${altura12/pessoas12}`)
    alert(`A porcentagem de pessoas com peso inferior a 40kg das demais: ${(pesoinf / 5) * 100}%`)
}