// Set up variables
var player1 = "X";
var player2 = "O";
var currentPlayer = player1;
var board = [  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

// Set up functions
function drawBoard() {
  var boardDiv = document.getElementById("board");
  boardDiv.innerHTML = "";
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      var cell = document.createElement("div");
      cell.className = "cell";
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.addEventListener("click", handleClick);
      cell.innerHTML = board[i][j];
      boardDiv.appendChild(cell);
    }
  }
}

function handleClick() {
  var row = this.dataset.row;
  var col = this.dataset.col;
  if (board[row][col] === "") {
    board[row][col] = currentPlayer;
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
    drawBoard();
    checkForWinner();
  }
}

function checkForWinner() {
  // Check rows
  for (var i = 0; i < board.length; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== "") {
      alert(board[i][0] + " wins!");
      reset();
      return;
    }
  }

  // Check columns
  for (var j = 0; j < board[0].length; j++) {
    if (board[0][j] === board[1][j] && board[1][j] === board[2][j] && board[0][j] !== "") {
      alert(board[0][j] + " wins!");
      reset();
      return;
    }
  }

  // Check diagonals
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== "") {
    alert(board[0][0] + " wins!");
    reset();
    return;
  }
  if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== "") {
    alert(board[0][2] + " wins!");
    reset();
    return;
  }

  // Check for tie
  var tie = true;
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (board[i][j] === "") {
        tie = false;
        break;
      }
    }
  }
  if (tie) {
    alert("It's a tie!");
    reset();
    return;
  }
}

function reset() {
  board = [    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  currentPlayer = player1;
  drawBoard();
}

// Call drawBoard() to start the game
drawBoard();
