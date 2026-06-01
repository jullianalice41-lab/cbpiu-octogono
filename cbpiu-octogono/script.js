const SINGLE_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRn8UMw0k19GCLo1WgGZyAR1NOrdajkb5CD46hS6-5LMYDSpnuTrIpoNmLxhjzcXcwihMBBx85Yf_Jc/pub?gid=1011161537&single=true&output=csv";

const DOUBLE_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRn8UMw0k19GCLo1WgGZyAR1NOrdajkb5CD46hS6-5LMYDSpnuTrIpoNmLxhjzcXcwihMBBx85Yf_Jc/pub?gid=1689160095&single=true&output=csv";

async function carregarCSV(url) {
    const resposta = await fetch(url);
    const texto = await resposta.text();

    return texto
        .split("\n")
        .slice(1)
        .map(linha => linha.split(","));
}

function renderizar(dados) {
    const container = document.getElementById("categories");
    container.innerHTML = "";

    dados.forEach(player => {
        if (!player[0]) return;

        const div = document.createElement("div");
        div.className = "player";

        div.innerHTML = `
            <h3>${player[0]}</h3>
            <p>Etapa 1: ${player[1] || "-"}</p>
            <p>Etapa 2: ${player[2] || "-"}</p>
            <p>Etapa 3: ${player[3] || "-"}</p>
            <p>Etapa 4: ${player[4] || "-"}</p>
            <p>Etapa 5: ${player[5] || "-"}</p>
            <p>Etapa 6: ${player[6] || "-"}</p>
        `;

        container.appendChild(div);
    });
}

async function showMode(mode) {
    const url = mode === "single" ? SINGLE_URL : DOUBLE_URL;
    const dados = await carregarCSV(url);
    renderizar(dados);
}

showMode("single");
