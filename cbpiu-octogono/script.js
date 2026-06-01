const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9xqXMG_hR98qHyUpBkHyY49cjDw3sHcgUnp4381JB3JT4lU-g1ZgqDyDzBvMX8Pl8WHZstfrdI3aE/pub?output=csv";

async function carregarDados() {
    const resposta = await fetch(SHEET_URL);
    const texto = await resposta.text();

    const linhas = texto.split("\n").map(l => l.split(","));

    const container = document.getElementById("categories");
    container.innerHTML = "";

    linhas.slice(1).forEach(linha => {
        const nome = linha[0];
        const etapa1 = linha[1];
        const etapa2 = linha[2];

        const card = document.createElement("div");
        card.innerHTML = `
            <h3>${nome}</h3>
            <p>Etapa 1: ${etapa1}</p>
            <p>Etapa 2: ${etapa2}</p>
            <hr>
        `;

        container.appendChild(card);
    });
}

carregarDados();
