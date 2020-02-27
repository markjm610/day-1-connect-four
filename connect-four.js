import { Game } from './game.js';
// import { Column } from './column.js';

const columns = document.getElementById("click-targets");
let game = undefined;
const boardHolder = document.getElementById("board-holder");
const gameName = document.getElementById("game-name");
const playerOneName = document.getElementById("player-1-name");
const playerTwoName = document.getElementById("player-2-name");
const newGame = document.getElementById("new-game");
const formHolder = document.getElementById("form-holder");


function updateUi() {

    for (let i = 0; i <= 5; i++) {
        for (let j = 0; j <= 6; j++) {
            const currentSquare = document.getElementById(`square-${i}-${j}`);
            const currentToken = game.getTokenAt(i, j);
            currentSquare.innerHTML = "";
            if (currentToken === 1) {
                const tokenBlack = document.createElement("div");
                tokenBlack.classList.add("black", "token");
                currentSquare.appendChild(tokenBlack);
            } else if (currentToken === 2) {
                const tokenRed = document.createElement("div");
                tokenRed.classList.add("red", "token");
                currentSquare.appendChild(tokenRed);
            }
        }
    }

    for (let i = 0; i <= 6; i++) {
        const currentColumn = document.getElementById(`column-${i}`);
        if (game.isColumnFull(i)) {
            currentColumn.classList.add("full");
        }
        else if (!game.isColumnFull(i)) {
            currentColumn.classList.remove("full");
        }


    }
    if (game === undefined) {
        boardHolder.classList.add("is-invisible");

    } else {
        // boardHolder.setAttribute("class", "is-invisible")
        boardHolder.classList.remove("is-invisible");
        gameName.innerHTML = game.getName();
    }

    if (game.turn === 1) {
        columns.classList.add('red');
        columns.classList.remove('black');
    } else if (game.turn === 2) {
        columns.classList.add('black');
        columns.classList.remove('red');

    }

}

window.addEventListener("DOMContentLoaded", e => {


    function disableNewGame() {
        if (playerOneName.value && playerTwoName.value) {
            newGame.disabled = false;
        } else {
            newGame.disabled = true;
        }
    }

    formHolder.addEventListener("keyup", e => {
        disableNewGame();

    });

    newGame.addEventListener("click", e => {
        game = new Game(playerOneName.value, playerTwoName.value);
        disableNewGame();
        playerOneName.value = "";
        playerTwoName.value = "";

        updateUi();
    });

    columns.addEventListener("click", event => {

        const columnNumber = Number.parseInt(event.target.id[event.target.id.length - 1]);

        game.playInColumn(columnNumber);

        updateUi();
    });
});