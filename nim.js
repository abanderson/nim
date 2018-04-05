console.log("NIM!");

var player1 = "Player 1"     // Change to a name if you like.
var player2 = "The computer" // Change to 'Player 2' or a name to play against another person.
var currentPlayer = player1;
var numRocks = 16;
var gameOver = false;
var lastPlayerOneMove;

function printBoard () {
    var board = '';
    for (var i = 0; i < numRocks; i++) {
        board += '* ';
    }
    console.log(board);

    var rows = ['', '', ''];
    var rowLength = 7;
    var rocksRemaning = numRocks;
}

function removeRocks (numRocksToRemove) {
    numRocks -= numRocksToRemove;
}

function legalMove (move) {
    if ((move < 1) || (move > 3)) {
        console.log("Illegal move: Only 1, 2 or 3 rocks can be removed.");
        return false;
    }
    if (move > numRocks) {
        console.log("Illegal move: There aren't that many rocks on the pile.");
        return false;
    }
    return true;
}

function checkWinner () {
    if (numRocks === 0) {
        console.log(currentPlayer + " wins!");
        gameOver = true;
    }
}

function nimEngine () {
    return 4 - lastPlayerOneMove;
}

function playTurn () {
    var move;
    if (currentPlayer === "The computer") {
        move = nimEngine();
    }
    else {
        move = prompt(currentPlayer + ": How many rocks do you want to remove? Choose 1, 2 or 3.");
        while (!legalMove(move)) {
            move = prompt(currentPlayer + ": How many rocks do you want to remove? Choose 1, 2 or 3.");
        }
        lastPlayerOneMove = move;
    }

    removeRocks(move);
    printBoard();
    checkWinner();
    if (currentPlayer === player1) {
        currentPlayer = player2;
    }
    else {
        currentPlayer = player1;
    }
}

printBoard();
while (!gameOver) {
    playTurn();
}
