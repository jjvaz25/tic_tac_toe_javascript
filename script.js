/*-----constants-----*/



/*-----app's state (variables-----*/
let board;


/*-----cached element references-----*/
const squares = Array.from(document.querySelectorAll("#board div"));


/*-----event listeners-----*/



/*-----functions-----*/

function init() {
  console.log("in the init() function");
  board = [
    "1", "2", "3",
    "4", "5", "6",
    "7", "8", "9"
  ];

  render();
};

function render() {
  // interate over our board array and inject the mark into the correct div
  console.log("in the render() function")
  board.forEach((mark, index) => {
    squares[index].textContent = mark;
    console.log(mark);
  });
}

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