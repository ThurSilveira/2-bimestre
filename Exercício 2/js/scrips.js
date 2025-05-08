function PesquisaSatisfacao(){
    let nota // guarda as notas
    let conta = 1 // conta de 1 a 10
    let soma = 0 // soma das notas
    let maior = 0
    let menor = 0
    while (conta <= 10){
        nota = Number(prompt(`Informe sua nota de satisfação ${conta}`)) // prompt para o usuário informar a nota
        if (nota >= 8){
            maior++
        }
        else if (nota < 5){
            menor++
        }
        soma = soma + nota
        conta++ // conta = conta + 1
    }
    let media = soma / 10
    alert(`A média das notas são: ${media.toFixed(1)}`)
    alert(`A quantidade de satisfeitos são: ${maior.toFixed(1)}`)
    alert(`A quantidade de insatisfeitos são:  ${menor.toFixed(1)}`)
}