function exe6() {
  let vet = [];
  // inserir valores no vet
  for (let i=0; i<12; i++) {
    vet.push(Number(prompt(`Informe o ${i+1}° número:`)))
  }
  // buscar num
  let busca = Number(prompt(`Indique um número para ser buscado`))
  // variáveis
  let posicoes = [], vezes = 0;
  // contagem e coleta das posições
  for (let i = 0; i < vet.length; i++) {
    if (vet[i] === busca) {
      vezes++
      posicoes.push(i+1) // salva posição
    }
  }

  if (vezes > 0) {
    alert(`Seu número está no vetor! Ele aparece ${vezes} vezes.`)
    alert(`O número ${busca} aparece nas posições: ${posicoes.join(', ')}`)
  } else {
    alert("Seu número não está no vetor.")
  }
}
