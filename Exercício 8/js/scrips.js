function js(){
    let idade, altura, peso, idademaior = 0, altura12 = 0, pesoinf = 0
    for (let i = 0; i < 5; i++){
        idade = Number(prompt("Informe sua idade"))
        altura = Number(prompt("Informe sua altura")) 
        peso = Number(prompt("Informe seu peso em KG"))
        if(idade > 50){
            idademaior++
        }
        else if (idade > 9 && idade < 21){
             altura += altura12
        }
        else if (peso < 40){
            pesoinf++
        }

        
    }
}