function Iniciar(){
    function validarTexto(valor) {
        if (valor === null || valor === "") {
            alert("Operacao Cancelada.");
            return false;
        }
        return true;
    }

    function estoqueEstaBaixo(quantidade) {
        if (quantidade < 5) {
            return true;
        }
        return false;
    }

    function classificarVinho(ano, anoAtual) {
        let idade = anoAtual - ano;

        if (idade <= 3) {
            return "Jovem";
        } else if (idade <= 10) {
            return "Amadurecido";
        } else {
            return "Antigo";
        }
    }

    function exibirDadosVinho(nome, ano, quantidade, classificacao) {
        console.log(`Nome: ${nome}`);
        console.log(`Ano: ${ano}`);
        console.log(`Quantidade: ${quantidade}`);
        console.log(`Classificação: ${classificacao}`);

        if (estoqueEstaBaixo(quantidade)) {
            alert(`Estoque baixo! O vinho "${nome}" possui apenas ${quantidade} unidades.`);
        }
    }

    let totalCadastros = 0;
    let totalEstoqueBaixo = 0;
    let vinhoMaisAntigoNome = "";
    let vinhoMaisAntigoAno = 9999;

    let nome1, ano1, quant1, class1;
    let nome2, ano2, quant2, class2;
    let nome3, ano3, quant3, class3;
    let nome4, ano4, quant4, class4;
    let nome5, ano5, quant5, class5;

    let anoAtualDigitado = prompt("Digite o ano atual:");
    if (!validarTexto(anoAtualDigitado)) return;

    let continuar = "s";

    while (continuar === "s") {

        let nome = prompt("Digite o nome do vinho:");
        if (!validarTexto(nome)) return;

        let anoDigitado = prompt("Digite o ano do vinho:");
        if (!validarTexto(anoDigitado)) return;

        let quantidade = prompt("Digite a quantidade em estoque:");
        if (!validarTexto(quantidade)) return;

        let anoNum = parseInt(anoDigitado);
        let quantNum = parseInt(quantidade);
        let anoAtualNum = parseInt(anoAtualDigitado);
        let classificacao = classificarVinho(anoNum, anoAtualNum);

        totalCadastros = totalCadastros + 1;

        if (estoqueEstaBaixo(quantNum)) {
            totalEstoqueBaixo = totalEstoqueBaixo + 1;
        }
    }

    function exibirDadosVinho(nome, ano, quantidade, classificacao) {
        console.log(`Nome: ${nome}`);
        console.log(`Ano: ${ano}`);
        console.log(`Quantidade: ${quantidade}`);
        console.log(`Classificação: ${classificacao}`);

        if (estoqueEstaBaixo(quantidade)) {
            alert(`Estoque baixo! O vinho "${nome}" possui apenas ${quantidade} unidades.`);
        }
    }

    let totalCadastros = 0;
    let totalEstoqueBaixo = 0;
    let vinhoMaisAntigoNome = "";
    let vinhoMaisAntigoAno = 9999;

    let nome1, ano1, quant1, class1;
    let nome2, ano2, quant2, class2;
    let nome3, ano3, quant3, class3;
    let nome4, ano4, quant4, class4;
    let nome5, ano5, quant5, class5;

    let anoAtualDigitado = prompt("Digite o ano atual:");

    let continuar = "s";

    while (continuar === "s") {

        let nome = prompt("Digite o nome do vinho:");
        let anoDigitado = prompt("Digite o ano do vinho:");
        let quantidade = prompt("Digite a quantidade em estoque:");

        if (validarTexto(nome) && validarTexto(anoDigitado) && validarTexto(quantidade)) {

            let anoNum = parseInt(anoDigitado);
            let quantNum = parseInt(quantidade);
            let anoAtualNum = parseInt(anoAtualDigitado);
            let classificacao = classificarVinho(anoNum, anoAtualNum);

            totalCadastros = totalCadastros + 1;

            if (estoqueEstaBaixo(quantNum)) {
                totalEstoqueBaixo = totalEstoqueBaixo + 1;
            }

            if (anoNum < vinhoMaisAntigoAno) {
                vinhoMaisAntigoAno = anoNum;
                vinhoMaisAntigoNome = nome;
            }

            if (totalCadastros === 1) {
                nome1 = nome; ano1 = anoNum; quant1 = quantNum; class1 = classificacao;
                exibirDadosVinho(nome1, ano1, quant1, class1);
            } else if (totalCadastros === 2) {
                nome2 = nome; ano2 = anoNum; quant2 = quantNum; class2 = classificacao;
                exibirDadosVinho(nome2, ano2, quant2, class2);
            } else if (totalCadastros === 3) {
                nome3 = nome; ano3 = anoNum; quant3 = quantNum; class3 = classificacao;
                exibirDadosVinho(nome3, ano3, quant3, class3);
            } else if (totalCadastros === 4) {
                nome4 = nome; ano4 = anoNum; quant4 = quantNum; class4 = classificacao;
                exibirDadosVinho(nome4, ano4, quant4, class4);
            } else if (totalCadastros === 5) {
                nome5 = nome; ano5 = anoNum; quant5 = quantNum; class5 = classificacao;
                exibirDadosVinho(nome5, ano5, quant5, class5);
            }

            alert("Cadastro realizado!");

            continuar = prompt("Deseja cadastrar outro vinho? (s/n)");
            if (continuar === null) {
                continuar = "n";
            }
            continuar = continuar.toLowerCase();

        continuar = prompt("Deseja cadastrar outro vinho? (s/n)");
        if (!validarTexto(continuar)) return;
        continuar = continuar.toLowerCase();
    }

    let relatorio = "RELATÓRIO FINAL\n";
    relatorio += `Total de cadastros feitos: ${totalCadastros}\n`;
    relatorio += `Vinhos com estoque baixo: ${totalEstoqueBaixo}\n`;
    relatorio += `Vinho com safra mais antiga: ${vinhoMaisAntigoNome} (${vinhoMaisAntigoAno})`;

    console.log(relatorio);
    alert(relatorio);
}
