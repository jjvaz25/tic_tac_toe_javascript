//IN REFACTOR BRANCH

/*
TRYING TO USE FACTORY FUNCTIONS FOR NAME SUBMISSION

//GLOBAL VARIABLES
let player1Obj;
let player2Obj;

//GLOBAL FUNCTIONS
const submitNames = document.getElementById("submitNames");
submitNames.addEventListener("submit", (event) => {
  event.preventDefault();
  let player1Name = event.target[0].value;
  let player2Name = event.target[1].value;
  player1Obj = playerFactory(player1Name, "X");
  player2Obj = playerFactory(player2Name, "O");
  document.getElementById("board").classList.toggle("hiddenModal");
  document.getElementById("reset-button").classList.toggle("hiddenModal")
  console.log("submitted");
  submitNames.parentNode.removeChild(submitNames);
})

*/

/*------PLAYER FACTORY FUNCTIONS-----*/
const playerFactory = (name, marker) => {
  return { name, marker };
};


/*------GAMEBOARD MODULE-----*/
const gameBoard = (() => {
  console.log("gameboard automatically initialized");
  const board = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const getBoard = () => {
    return board;
  }

  const getWinningCombos = () => {
    return winningCombos;
  }

  return { getBoard, getWinningCombos };

})();

/*------DISPLAY CONTROLLER MODULE-----*/

const displayController = (() => {
  const board = gameBoard.getBoard();
  const winningCombos = gameBoard.getWinningCombos();
  const squares = Array.from(document.querySelectorAll("#board div"));
  let turn = "X";
  // let turn = player1Obj.name;
  let win;
  const messages = document.querySelector("h2");
  let clickableSquares = document.getElementById("board") /*.addEventListener("click", handleTurn);*/
  

  const render = () => {
    board.forEach((mark, index) => {
      squares[index].textContent = mark;
    });
    messages.textContent = win === "Tie" ? `Tie game! Try again!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
  };

  const handleTurn = (event) => {
    idx = squares.findIndex((square) => {
      return square === event.target;
    });

    if (board[idx] === ""){
      board[idx] = turn;
    } else {
      return;
    }
    
    if (turn === "X") {
      turn = "O";
    } else {
      turn = "X"
    };
    win = getWinner()
    render();
  };
  clickableSquares.addEventListener("click", handleTurn);


  const getWinner = () => {
    let winner = null;
    winningCombos.forEach((combo, index) => {
      if (board[combo[0]] && board[combo[0]] === board[combo[1]] &&
          board[combo[0]]=== board[combo[2]]) {
            console.log("we have a winner");
            winner = board[combo[0]]
            messages.textContent = `Game Over! ${winner} wins!`;
            clickableSquares.removeEventListener("click", handleTurn);
      } 
    });
    return winner ? winner : board.includes("") ? null : "Tie";
  }

  
})();







/*
-----------CONSTANTS-----------
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

---------GLOBAL VARS-----------
let board;
let turn = "X";
let win;

-----------Element VARS-----------
const squares = Array.from(document.querySelectorAll("#board div"));
const messages = document.querySelector("h2");

document.getElementById("board").addEventListener("click", handleTurn);
document.getElementById("reset-button").addEventListener("click", init)

-----------FUNCTIONS-----------
function init() {
  console.log("in the init() function");
  board = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];
  render();
};

function render() {
  // interate over our board array and inject the mark into the correct div
  console.log("in the render() function")
  board.forEach((mark, index) => {
    squares[index].textContent = mark;
  });
  messages.textContent = win === "Tie" ? `Tie game! Try again!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
}

function handleTurn(event) {
  let idx = squares.findIndex((square) => {
    return square === event.target; 
  });
  board[idx] = turn; 
  turn = turn === "X"? "O" : "X";
  win = getWinner();
  render();
};

function getWinner() {
  let winner = null;
  winningCombos.forEach((combo, index) => {
    if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
      winner = board[combo[0]];
    }
  });
  return winner ? winner : board.includes("") ? null : "Tie";
};
*/

/*--------calling functions-----------*/
// init();