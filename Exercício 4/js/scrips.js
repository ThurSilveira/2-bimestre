function gp4() {
    // Criar um array para armazenar os grupos
    let todosElementos = [];

    // Ler 5 grupos com 4 elementos (A, B, C, D)
    for (let i = 0; i < 5; i++) {
        let grupo = [];
        for (let j = 0; j < 4; j++) {
            let elemento = prompt(`Digite o elemento ${String.fromCharCode(65 + j)} do grupo ${i + 1}:`);
            grupo.push(elemento);
        }
        // Adicionar o grupo ao array de grupos
        todosElementos.push(grupo);
    }

    // Exibir os grupos inseridos, com suas versões em ordem crescente e decrescente
    let mensagem = "";
    todosElementos.forEach((grupo, index) => {
        // Exibir grupo na ordem em que foi lido
        mensagem += `Grupo ${index + 1} (ordem lida): ${grupo.join(', ')}\n`;

        // Ordenar o grupo em ordem crescente
        let crescente = [...grupo].sort();
        mensagem += `Grupo ${index + 1} (ordem crescente): ${crescente.join(', ')}\n`;

        // Ordenar o grupo em ordem decrescente
        let decrescente = [...crescente].reverse();
        mensagem += `Grupo ${index + 1} (ordem decrescente): ${decrescente.join(', ')}\n\n`;
    });

    // Exibir todos os resultados
    alert(mensagem);
}
