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