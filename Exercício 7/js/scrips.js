function ex7(){
    let tipo, i, totalv = 0, totalp = 0, somap = 0, somav = 0
    for (i = 0; i < 15;){
        valor = Number(prompt('Qual o valor da compra?\n'))
        tipo = prompt('Qual o Tipo de Pagamento: (P) a prazo; (V) a vista.\n').toUpperCase()

        if(tipo === 'V'){
            totalv++
            somav += valor
        }
        else if(tipo === 'P'){
            totalp++
            somap += valor
        }  
        else{
            alert('Tipo de pagamento invalido!\n')
            continue
        }
        i++
    }
    alert(`O valor total das compras foi de: ${somav + somap}`)
    alert(`O valor total das compras a vista foi: ${somav}`)
    alert(`O valor total das compras a prazo foi: ${somap}`)
    alert(`O valor da primeira parcela das compras a prazo foi: ${somap / 3}`)
}               