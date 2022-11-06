
let delay = -0.3
function createCard(day, date, games) {
  delay += 0.3
  return `
  <div class="card" style="animation-delay: ${delay}s">
  <h2>${day}<span>${date}</span></h2>
  <ul>
    ${games}
  </ul>
</div>
  `
}

function createGame(player1, hour, player2){
    return  `<li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${String(hour).padStart(2,'0')}:00</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
      </li>`
}

document.querySelector('#cards').innerHTML = 
  createCard('24/11', 'Quinta', 
      createGame('switzerland', 7,'cameroon') 
      + createGame('portugal', 13, 'ghana') 
      + createGame('brazil', 16,'serbia')  
  )
  +
  createCard('28/11', 'Segunda', 
      createGame('switzerland', 13,'brazil') 
      + createGame('portugal', 16, 'uruguay')
  )