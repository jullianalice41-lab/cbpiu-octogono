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

function renderizar(titulo, dados) {
    const container = document.getElementById("categories");

    const categoria = document.createElement("div");
    categoria.className = "category";

    categoria.innerHTML = `<h2>${titulo}</h2>`;

    dados.forEach(player => {
        if (!player[0]) return;

        const div = document.createElement("div");
        div.className = "player";

        div.innerHTML = `
            <div>
                <strong>${player[0]}</strong>
                <div class="stages">
                    Categoria: ${player[1] || "-"}<br>
                    E1: ${player[2] || "-"} |
                    E2: ${player[3] || "-"} |
                    E3: ${player[4] || "-"}<br>
                    E4: ${player[5] || "-"} |
                    E5: ${player[6] || "-"} |
                    E6: ${player[7] || "-"}<br>
                    Status: ${player[8] || "DISPUTANDO"}
                </div>
            </div>
        `;

        categoria.appendChild(div);
    });

    container.appendChild(categoria);
}

async function iniciar() {
    const container = document.getElementById("categories");
    container.innerHTML = "";

    const single = await carregarCSV(SINGLE_URL);
    const double = await carregarCSV(DOUBLE_URL);

    renderizar("SINGLE", single);
    renderizar("DOUBLE", double);
}

iniciar();
