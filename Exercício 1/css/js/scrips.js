function js(){
    let nota // guarda as notas
    let conta = 1 // conta de 1 a 6
    let soma = 0 // soma das notas
    while (conta <= 6){
        nota = Number(prompt(`Informe a nota ${conta}`)) // prompt para o usuário informar a nota
        soma = soma + nota
        conta++ // conta = conta + 1
    }
    let media = soma / 6
    // mostra o resultado
     alert(`A média das notas é ${media.toFixed(1)}`)
}