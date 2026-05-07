function cadastrar() {
  
    let nome = prompt("Digite o nome do vinho:");
    if(nome === null || nome === "") {
        alert("Operacao Cancelada.");
        return;
    }
    let categoria = prompt("Digite o tipo do vinho (Tinto, Branco, Rosé):");
    if(categoria === null || categoria === "") {
        alert("Operacao Cancelada.");
        return;
    }
    
    let ano = prompt("Digite o ano do vinho:");
    if(ano === null || ano === "") {
        alert("Operacao Cancelada.");
        return;
    }
    let quantidade = prompt("Digite a quantidade em estoque:");
    if(quantidade === null || quantidade === "") {
        alert("Operacao Cancelada.");
        return;
    }

    if (nome && categoria && ano && quantidade) {
    alert("Cadastro realizado!");
    console.log(`Nome: ${nome}`);
    console.log(`Tipo: ${categoria}`);
    console.log(`Ano: ${ano}`);
    console.log(`Quantidade: ${quantidade}`); }
}