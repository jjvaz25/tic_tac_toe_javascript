/*-----constants-----*/



/*-----app's state (variables-----*/
let board;
let turn = "X";


/*-----cached element references-----*/
const squares = Array.from(document.querySelectorAll("#board div"));


/*-----event listeners-----*/
document.getElementById("board").addEventListener("click", handleTurn);


/*-----functions-----*/

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
}

function handleTurn(event) {
  let idx = squares.findIndex((square) => {
    return square === event.target; /*finds the index of the square in our squares array that matches the square the user clicked!*/
  });
  board[idx] = turn; /*populates the square at the clicked index with the value in the turn variable*/
  turn = turn === "X"? "O" : "X";
  render();
};


/*--------calling functions-----------*/
init();





/*
//gameboard model
let gameBoardModule = (function() {
  console.log("hey");
  let gameBoard = [
    "X", "O", "X",
    "O", "X", "O",
    "X", "O", "X"
  ];
}());

//controls flow of the game
let gameFlowModule = (function() {
  //insert code to control flow of game
  //turn
  //gameOver
})

//players factoryFunction
const player = (name, marker) =>{
  const getMarker = () => marker;
  const getName = () => name;
  return { getMarker, getName };
  //name
  // makeMove
}

// const submitName = document.getElementById("playerNames")
// submitName.addEventListener("submit", (event) => {
//   console.log(event);
//   event.preventDefault();

// })

*/