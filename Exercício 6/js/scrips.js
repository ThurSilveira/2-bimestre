function ex6(){
    let i 
    for (let num = 1; num <=10; num++){
            i = "" 
            conta = 0
        for (let conta = 1; conta <= 10; conta++){
            i += (`${num} x ${conta} = ${num * conta}\n`)
        }
        console.log(`Tabuada do ${num}:\n` + i )     
    }
} 

function tabuada(){
    let numero = Number(prompt("Digite um número:"))
    
    for (let i = 1; i <= 10; i++){
        console.log(`${numero} x ${i} = ${numero * i}`)
    }

}