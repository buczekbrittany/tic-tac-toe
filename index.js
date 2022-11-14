/* timer */
// let game = { // state
//     playing: false,
//     seconds: 0,
//     minutes: 0,
// };

// let playBtn = document.getElementById('play');
// let seconds = document.getElementById('seconds');
// let minutes = document.getElementById('minutes');
let inputName = document.getElementById('input');
let newUsername = document.getElementById('playerName');
let submitBtn = document.getElementById('submit');

submitBtn.addEventListener("click", submitClick )
let playerDisplay = document.getElementById('playerDisplay');
let winner = document.getElementById('winner');
let section = document.querySelector('.section');
let board = document.querySelector('.board');
let resetBtn = document.getElementById('resetButton');
let userDisplayMsg = document.getElementById('userDisplayMsg');
let sections = Array.from(document.querySelectorAll('.section'));
let welcomeMsg = document.querySelector('#welcomeMsg');

let winSet =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

function newGame() {
    let obj = {
        currentPlayer: null,
        players: ['X', 'O'],
        userName: [null,'Computer'],
        board: [
            null, null, null,
            null, null, null,
            null, null, null
        ]
    }
    return obj
}

let gameState = newGame()

function submitClick() {
    newUsername.innerHTML = inputName.value
    inputName.value = ''
    gameState.userName[0] = inputName.value
}
  

function resetButton() {
    welcomeMsg.style.visibility = 'visible';
    welcomeMsg.innerHTML = "Welcome! Let's Play Tic Tac Toe..."
    userDisplayMsg.style.visibility = 'hidden';
    sections.forEach ( s => {
        s.innerHTML = ''
        s.style['pointer-events'] = 'auto';
    })
    gameState.board = [
        null, null, null,
        null, null, null,
        null, null, null
    ]
    board.style['pointer-events'] = 'auto';
}
resetBtn.style.visibility = 'hidden';

function checkWinner(e) {
    for (const set of winSet) {
      let [a, b, c] = set
      if(gameState.board[a] && (gameState.board[a] == gameState.board[b] && gameState.board[a] == gameState.board[c])) {
        welcomeMsg.style.visibility = 'visible';
        welcomeMsg.innerHTML = `${gameState.currentPlayer} Won!`
        userDisplayMsg.style.visibility = 'hidden';
        board.style['pointer-events'] = 'none';
        resetBtn.style.visibility = 'visible';
      }
    }
  }
  
  
  function sectionClick(e,id) {
    welcomeMsg.style.visibility = 'hidden';
    userDisplayMsg.style.visibility = 'visible';
    let newIcon = document.createElement('div')
    let sectionId = document.getElementById(id)
    newIcon.classList.add('icon-style')
  
    if (gameState.currentPlayer === 'X') {
      checkUser()
      newIcon.innerHTML = 'O'
      sectionId.style['pointer-events'] = 'none';
      gameState.board[id] = 'O'
      gameState.currentPlayer = 'O'
    } else if (gameState.currentPlayer === 'O') {
      checkUser()
      newIcon.innerHTML = 'X'
      sectionId.style['pointer-events'] = 'none';
      gameState.board[id] = 'X'
      gameState.currentPlayer = 'X'
    } else if (gameState.currentPlayer === null) {
      checkUser()
      newIcon.innerHTML = 'X'
      sectionId.style['pointer-events'] = 'none';
      gameState.board[id] = 'X'
      gameState.currentPlayer = 'X'
    } 

    sectionId.appendChild(newIcon)

    
    checkWinner(e)
  }
  
  function checkUser() {
    playerDisplay.innerHTML = gameState.currentPlayer
  }

  section.addEventListener("click", sectionClick(e,id))
  resetBtn.addEventListener("click", resetButton)
  


