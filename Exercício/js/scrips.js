/*function js(){
    let caso1 = 0, caso2 = 0, altura2 = 0, caso3 = 0, caso4 = 0
    let idade, peso, altura, olho, cabelo
    
    for (let i = 0; i < 6; i++){
        idade = Number(prompt(`Qual a sua idade?`))
        peso = Number(prompt(`Qual o seu peso?`))
        altura = Number(prompt(`Qual sua altura?`))
        
        while(altura < 0 || altura > 2.50){
            alert(`Altura invalida!`)
            altura = Number(prompt(`Qual sua altura?`))
        }
        
        olho = prompt(`Indique a cor do seu olho:\n"A" para azul;\n"P" para preto;\n"V" para verde;\n"C" para castanho.`).toUpperCase()
        cabelo = prompt(`Indique seu tipo de cabelo:\n"P" para preto;\n"C" para castanho;\n"L" para louro;\n"R" para ruivo.`).toUpperCase()

        if(idade > 50 && peso < 60){
            caso1++
        }
        else if (altura < 1.50){
            caso2++
            altura2 += altura
        }
        else if(olho === `A`){
            caso3++
        }
        else if(cabelo === `R` && olhos != `A`){
            caso4++
        }
    }
    alert(`A quantidade de pessoas com idade superior a 50 anos, e, peso inferior a 60kg: ${caso1}`)
    alert(`A média das idades das pessoas com altura inferior a 1.50m: ${caso2/altura2}`)
    alert(`A porcentagem de pessoas com olhos azuis entre todas as pessoas analisadas: ${(caso3 / 6) * 100}`)
    alert(`A quantidade de pessoas ruivas e que não possuem olhos azuis: ${caso4}`)
}
*/
function js(){
    let caso1 = 0, caso2 = 0, altura2 = 0, caso3 = 0, caso4 = 0
    let idade, peso, altura, olho, cabelo
    
    for (let i = 0; i < 6; i++){
        do{
            idade = Number(prompt(`Qual a sua idade?`))
        }
        while(idade < 0)
        do{
            peso = Number(prompt(`Qual o seu peso?`))
        }
        while(peso < 0)
        do{
            altura = Number(prompt(`Qual sua altura?`))
        }
        while(altura < 0)
        do{
            olho = prompt(`Indique a cor do seu olho:\n"A" para azul;\n"P" para preto;\n"V" para verde;\n"C" para castanho.`).toUpperCase()
        }
        while(olho != 'A' && olho != 'P' && olho != 'V' && olho != 'C')
        do{
            cabelo = prompt(`Indique seu tipo de cabelo:\n"P" para preto;\n"C" para castanho;\n"L" para louro;\n"R" para ruivo.`).toUpperCase()
        }
        while(cabelo != 'P' && cabelo != 'C' && cabelo != 'L' && cabelo != 'R')
        
        if(idade > 50 && peso < 60){
            caso1++
        }
        else if(altura < 1.50){
            caso2++
            altura2 += altura
        }
        else if(olho === `A`){
            caso3++
        }
        else if(cabelo === `R` && olhos != `A`){
            caso4++
        }
    }
    alert(`A quantidade de pessoas com idade superior a 50 anos, e, peso inferior a 60kg: ${caso1}`)
    alert(`A média das idades das pessoas com altura inferior a 1.50m: ${caso2/altura2}`)
    alert(`A porcentagem de pessoas com olhos azuis entre todas as pessoas analisadas: ${(caso3 / 6) * 100}`)
    alert(`A quantidade de pessoas ruivas e que não possuem olhos azuis: ${caso4}`)
}