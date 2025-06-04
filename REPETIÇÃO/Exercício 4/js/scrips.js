function gp4(){
    let a, b, c, d, aux
    let grupo = 1
    while(grupo <=5){
        a = Number(prompt(`Informe o valor de A`))
        b = Number(prompt(`Informe o valor de B`))
        c = Number(prompt(`Informe o valor de C`))
        d = Number(prompt(`Informe o valor de D`))
        let conta = 1

        alert (`Ordem Lida ${a} ${b} ${c} ${d}`)

        while (conta <= 3){
            if (a > b){
                aux = a; a = b; b = aux;
            }
            if (b > c){
                aux = b; b = c; c = aux;
            }
            if (c > d){
                aux = c; c = d; d = aux;
            }
            conta++
        }
        alert(`Ordem Crescente ${a} ${b} ${c} ${d}\nOrdem Decrescente ${d} ${c} ${b} ${a}`)
        grupo++
    }
}