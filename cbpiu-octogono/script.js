const data = {
  single: {
    Beginner: [
      {
        name: "Player 1",
        photo: "assets/players/player1.jpg",
        stages: ["1º", "2º", "-", "-", "-", "-"]
      }
    ],

    Intermediate: [],
    "Intermediate+": [],
    Advanced: [],
    "Advanced+": [],
    Expert: [],
    Master: []
  },

  double: {
    Beginner: [],
    Intermediate: [],
    "Intermediate+": [],
    Advanced: [],
    "Advanced+": [],
    Expert: [],
    Master: []
  }
};

function showMode(mode) {
  const container = document.getElementById("categories");
  container.innerHTML = "";

  Object.keys(data[mode]).forEach(category => {
    const div = document.createElement("div");
    div.className = "category";

    let html = `<h2>${category}</h2>`;

    data[mode][category].forEach(player => {
      html += `
        <div class="player">
          <img src="${player.photo}" alt="${player.name}">
          <div>
            <strong>${player.name}</strong>
            <div class="stages">
              E1: ${player.stages[0]} |
              E2: ${player.stages[1]} |
              E3: ${player.stages[2]} |
              E4: ${player.stages[3]} |
              E5: ${player.stages[4]} |
              E6: ${player.stages[5]}
            </div>
          </div>
        </div>
      `;
    });

    if (data[mode][category].length === 0) {
      html += "<p>Nenhum player cadastrado.</p>";
    }

    div.innerHTML = html;
    container.appendChild(div);
  });
}

showMode("single");