function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/${player1}.svg" alt="Bandeira ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/${player2}.svg" alt="Bandeira ${player2}">
    </li>
  `
}

function createCard(date, day, game1, game2, game3, game4) {
  return `
    <div class="card">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        <li>
          ${game1}
        </li>
        <li>
          ${game2}
        </li>
        <li>
          ${game3}
        </li>
        <li>
          ${game4}
        </li>
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "cameroon"),
    createGame("uruguay", "10:00", "south korea"),
    createGame("portugal", "13:00", "ghana"),
    createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "07:00", "serbia"),
    createGame("south korea", "10:00", "ghana"),
    createGame("brazil", "13:00", "switzerland"),
    createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("south korea", "07:00", "portugal"),
    createGame("ghana", "10:00", "uruguay"),
    createGame("serbia", "13:00", "switzerland"),
    createGame("cameroon", "16:00", "brazil")
  )
