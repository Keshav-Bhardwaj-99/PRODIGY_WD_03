// let board = [
//     ["", "", ""],
//     ["", "", ""],
//     ["", "", ""]
// ];
// let currentPlayer = "X";
// let gameOver = false;

// function playerMove(cell, row, col) {
//     if (!gameOver && board[row][col] === "") {
//         board[row][col] = currentPlayer;
//         cell.textContent = currentPlayer;
//         if (checkWinner(currentPlayer)) {
//             gameOver = true;
//             document.getElementById("status").textContent = `${currentPlayer} wins!`;
//         } else if (isBoardFull()) {
//             gameOver = true;
//             document.getElementById("status").textContent = "It's a tie!";
//         } else {
//             currentPlayer = currentPlayer === "X" ? "O" : "X";
//             document.getElementById("status").textContent = currentPlayer === "X" ? "Your turn!" : "Computer's turn";
//             if (currentPlayer === "O") {
//                 setTimeout(computerMove, 500);
//             }
//         }
//     }
// }

// function computerMove() {
//     if (!gameOver) {
//         let availableCells = [];
//         for (let i = 0; i < 3; i++) {
//             for (let j = 0; j < 3; j++) {
//                 if (board[i][j] === "") {
//                     availableCells.push({ row: i, col: j });
//                 }
//             }
//         }
//         let randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
//         let cellElement = document.querySelector(`.cell:nth-child(${randomCell.row * 3 + randomCell.col + 1})`);
//         playerMove(cellElement, randomCell.row, randomCell.col);
//     }
// }

// function checkWinner(player) {
//     for (let i = 0; i < 3; i++) {
//         if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
//             return true;
//         }
//         if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
//             return true;
//         }
//     }
//     if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
//         return true;
//     }
//     if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
//         return true;
//     }
//     return false;
// }

// function isBoardFull() {
//     for (let row of board) {
//         if (row.includes("")) {
//             return false;
//         }
//     }
//     return true;
// }

// function resetGame() {
//     board = [
//         ["", "", ""],
//         ["", "", ""],
//         ["", "", ""]
//     ];
//     currentPlayer = "X";
//     gameOver = false;
//     document.querySelectorAll(".cell").forEach(cell => cell.textContent = "");
//     document.getElementById("status").textContent = "Your turn!";
// }


let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
let currentPlayer = "X";
let gameOver = false;
let singlePlayerMode = false; // Flag to track single player mode

function startSinglePlayer() {
    singlePlayerMode = true;
    startGame();
}

function startTwoPlayer() {
    singlePlayerMode = false;
    startGame();
}

function startGame() {
    document.getElementById("mode-selection").style.display = "none";
    document.getElementById("game").style.display = "block";
    resetGame();
}

function playerMove(cell, row, col) {
    if (!gameOver && board[row][col] === "") {
        board[row][col] = currentPlayer;
        cell.textContent = currentPlayer;
        if (checkWinner(currentPlayer)) {
            gameOver = true;
            document.getElementById("status").textContent = `${currentPlayer} wins!`;
        } else if (isBoardFull()) {
            gameOver = true;
            document.getElementById("status").textContent = "It's a tie!";
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            if (singlePlayerMode && currentPlayer === "O") {
                setTimeout(computerMove, 500);
            }
            document.getElementById("status").textContent = currentPlayer === "X" ? "Player X's turn!" : "Player O's turn!";
        }
    }
}

function computerMove() {
    if (!gameOver && singlePlayerMode) {
        let availableCells = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === "") {
                    availableCells.push({ row: i, col: j });
                }
            }
        }
        let randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
        let cellElement = document.querySelector(`.cell:nth-child(${randomCell.row * 3 + randomCell.col + 1})`);
        playerMove(cellElement, randomCell.row, randomCell.col);
    }
}

function checkWinner(player) {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
            return true;
        }
        if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
            return true;
        }
    }
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return true;
    }
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
        return true;
    }
    return false;
}

function isBoardFull() {
    for (let row of board) {
        if (row.includes("")) {
            return false;
        }
    }
    return true;
}

function resetGame() {
    board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    currentPlayer = "X";
    gameOver = false;
    document.querySelectorAll(".cell").forEach(cell => cell.textContent = "");
    document.getElementById("status").textContent = "Player X's turn!";
}

