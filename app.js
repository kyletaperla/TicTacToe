// DECLARE GLOBAL VARIABLES

var myGame = null;
var rowId = "";
var cellID = "";
var win = false;
var running = true;
var changePlayer = false;

// DECLARE Objects to define TicTacToe board rows and cells

TicTacToe = function(target){
    this.board = new Board();
    this.turn = "player1";
    this.target = target;
}

Board = function(){
    this.row1 = new BoardRow();
    this.row2 = new BoardRow();
    this.row3 = new BoardRow();
}

BoardRow = function(){
    this.cell1 = "";
    this.cell2 = "";
    this.cell3 = "";
}

// Prototype function attached to TicTacToe object to check if a win condition has been met.

TicTacToe.prototype.CheckWin = function(){
    if(myGame.turn === 'player1') {

        if(this.board.row1.cell1 === 'x' && this.board.row1.cell2 == 'x' && this.board.row1.cell3 == 'x') {
            document.getElementById("titlehead").innerHTML = "Player 1 wins";
            document.getElementById("player-turn").innerHTML = "";
            win = true;
        }
        else if (this.board.row2.cell1 === 'x' && this.board.row2.cell2 === 'x' && this.board.row2.cell3 === 'x') {
            document.getElementById("titlehead").innerHTML = "Player 1 wins";
            document.getElementById("player-turn").innerHTML = "";
            win = true;
        }
        else if (this.board.row3.cell1 === 'x' && this.board.row3.cell2 === 'x' && this.board.row3.cell3 === 'x') {
            document.getElementById("titlehead").innerHTML = "Player 1 wins";
            document.getElementById("player-turn").innerHTML = "";
            win = true;
        }
        else if (this.board.row1.cell1 === 'x' && this.board.row2.cell1 === 'x' && this.board.row3.cell1 === 'x') {
            document.getElementById("titlehead").innerHTML = "Player 1 wins";
            document.getElementById("player-turn").innerHTML = "";
            win = true;
        }
        else if (this.board.row1.cell2 === 'x' && this.board.row2.cell2 === 'x' && this.board.row3.cell2 === 'x') {
            document.getElementById("titlehead").innerHTML = "Player 1 wins";
            document.getElementById("player-turn").innerHTML = "";
            win = true;
        }
        else if (this.board.row1.cell3 === 'x' && this.board.row2.cell3 === 'x' && this.board.row3.cell3 === 'x') {
            document.getElementById("titlehead").innerHTML = "Player 1 wins";
            document.getElementById("player-turn").innerHTML = "";
            win = true;
        }
        else if (this.board.row1.cell1 === 'x' && this.board.row2.cell2 === 'x' && this.board.row3.cell3 === 'x') {
            document.getElementById("titlehead").innerHTML = "Player 1 wins";
            document.getElementById("player-turn").innerHTML = "";
            win = true;
        }
        else if (this.board.row1.cell3 === 'x' && this.board.row2.cell2 === 'x' && this.board.row3.cell1 === 'x') {
            document.getElementById("titlehead").innerHTML = "Player 1 wins";
            document.getElementById("player-turn").innerHTML = "";
            win = true;
        }

    } 
    else {
        if(this.board.row1.cell1 === 'o' && this.board.row1.cell2 == 'o' && this.board.row1.cell3 == 'o') {
            document.getElementById("titlehead").innerHTML = "Player 2 wins";
            document.getElementById("player-turn").innerHTML = "";
            win = true;
        }
        else if (this.board.row2.cell1 === 'o' && this.board.row2.cell2 === 'o' && this.board.row2.cell3 === 'o') {
            document.getElementById("titlehead").innerHTML = "Player 2 wins";
            document.getElementById("player-turn").innerHTML = "";
            win = true;
        }
        else if (this.board.row3.cell1 === 'o' && this.board.row3.cell2 === 'o' && this.board.row3.cell3 === 'o') {
            document.getElementById("titlehead").innerHTML = "Player 2 wins";
            document.getElementById("player-turn").innerHTML = "";
            win = true;
        }
        else if (this.board.row1.cell1 === 'o' && this.board.row2.cell1 === 'o' && this.board.row3.cell1 === 'o') {
            document.getElementById("titlehead").innerHTML = "Player 2 wins";
            document.getElementById("player-turn").innerHTML = "";
            win = true;
        }
        else if (this.board.row1.cell2 === 'o' && this.board.row2.cell2 === 'o' && this.board.row3.cell2 === 'o') {
            document.getElementById("titlehead").innerHTML = "Player 2 wins";
            document.getElementById("player-turn").innerHTML = "";
            win = true;
        }
        else if (this.board.row1.cell3 === 'o' && this.board.row2.cell3 === 'o' && this.board.row3.cell3 === 'o') {
            document.getElementById("titlehead").innerHTML = "Player 2 wins";
            document.getElementById("player-turn").innerHTML = "";
            win = true;
        }
        else if (this.board.row1.cell1 === 'o' && this.board.row2.cell2 === 'o' && this.board.row3.cell3 === 'o') {
            document.getElementById("titlehead").innerHTML = "Player 2 wins";
            document.getElementById("player-turn").innerHTML = "";
            win = true;
        }
        else if (this.board.row1.cell3 === 'o' && this.board.row2.cell2 === 'o' && this.board.row3.cell1 === 'o') {
            document.getElementById("titlehead").innerHTML = "Player 2 wins";
            document.getElementById("player-turn").innerHTML = "";
            win = true;
        }
    }
 
    if(win === false) {
        if(this.board.row1.cell1 != "" && this.board.row1.cell2 != "" && this.board.row1.cell3 != "" 
        && this.board.row2.cell1 != "" && this.board.row2.cell2 != "" && this.board.row2.cell3 != "" &&
        this.board.row3.cell1 != "" && this.board.row3.cell2 != "" && this.board.row3.cell3 != "" ) {
            document.getElementById("titlehead").innerHTML = "IT'S A TIE!";
            document.getElementById("player-turn").innerHTML = "";
 
        running = false;
        }  
 
        if(running) {
            if(changePlayer) {
                if(myGame.turn === 'player1') {
                    myGame.turn = 'player2';
                    document.getElementById("player-turn").innerHTML = "Player 2's Turn";
                    changePlayer = false;
                } 
                else {
                    myGame.turn = 'player1';
                    document.getElementById("player-turn").innerHTML = "Player 1's Turn";
                    changePlayer = false;
                }
            }        
        }
    }
}

TicTacToe.prototype.Render = function(){
    let row1 = $(this.target).find("[data-row=1]");
    let row2 = $(this.target).find("[data-row=2]");
    let row3 = $(this.target).find("[data-row=3]");

    $(row1).find("[data-cell=1]").text(this.board.row1.cell1);
    $(row1).find("[data-cell=2]").text(this.board.row1.cell2);
    $(row1).find("[data-cell=3]").text(this.board.row1.cell3);

    $(row2).find("[data-cell=1]").text(this.board.row2.cell1);
    $(row2).find("[data-cell=2]").text(this.board.row2.cell2);
    $(row2).find("[data-cell=3]").text(this.board.row2.cell3);

    $(row3).find("[data-cell=1]").text(this.board.row3.cell1);
    $(row3).find("[data-cell=2]").text(this.board.row3.cell2);
    $(row3).find("[data-cell=3]").text(this.board.row3.cell3);

    myGame.CheckWin();
}

$(document).ready(function(){
    $('div.tictac').click(ButtonPress);
    $('.reset').click(Reset);

    myGame = new TicTacToe(".TicTacToe-container");

});

function Reset() {
    myGame.board.row1.cell1 = "";
    myGame.board.row1.cell2 = "";
    myGame.board.row1.cell3 = "";
    myGame.board.row2.cell1 = "";
    myGame.board.row2.cell2 = "";
    myGame.board.row2.cell3 = "";
    myGame.board.row3.cell1 = "";
    myGame.board.row3.cell2 = "";
    myGame.board.row3.cell3 = "";

    rowId = "";
    cellID = "";
    win = false;
    running = true;
    changePlayer = false;

    myGame.Render();
    
}

function ButtonPress(e){
    if(!win && running) {
        let target = $(e.target);
        let returnValue = "";

        if(target.is('#1')) {
            returnValue = "1";
        }
        else if (target.is('#2')) {
            returnValue = "2";
        }
        else if (target.is('#3')) {
            returnValue = "3";
        }
        else if (target.is('#4')) {
            returnValue = "4";
        }
        else if (target.is('#5')) {
            returnValue = "5";
        }
        else if (target.is('#6')) {
            returnValue = "6";
        }
        else if (target.is('#7')) {
            returnValue = "7";
        }
        else if (target.is('#8')) {
            returnValue = "8";
        }
        else if (target.is('#9')) {
            returnValue = "9";
        }
    UpdateBoard(returnValue);
    }
 }

function UpdateBoard(targetCell) {

    if (myGame.turn === "player1") {
        switch(targetCell) {
            case "1":
                if(myGame.board.row1.cell1 === "") {
                    myGame.board.row1.cell1 = 'x';
                    changePlayer = true;
                }
            break;
            case "2":
                if(myGame.board.row1.cell2 === "") {
                    myGame.board.row1.cell2 = 'x';
                    changePlayer = true;
                }
                break;
            case "3":
                if(myGame.board.row1.cell3 === "") {
                    myGame.board.row1.cell3 = 'x';
                    changePlayer = true;
                }
                break;
            case "4":
                if(myGame.board.row2.cell1 === "") {
                    myGame.board.row2.cell1 = 'x';
                    changePlayer = true;
                }
                break;
            case "5":
                if(myGame.board.row2.cell2 === "") {
                    myGame.board.row2.cell2 = 'x';
                    changePlayer = true;
                }
                break;
            case "6":
                if(myGame.board.row2.cell3 === "") {
                    myGame.board.row2.cell3 = 'x';
                    changePlayer = true;
                }
                break;
            case "7":
                if(myGame.board.row3.cell1 === "") {
                    myGame.board.row3.cell1 = 'x';
                    changePlayer = true;
                } 
                break;
            case "8":
                if(myGame.board.row3.cell2 === "") {
                    myGame.board.row3.cell2 = 'x';
                    changePlayer = true;
                } 
            break;
            case "9":
                if(myGame.board.row3.cell3 === "") {
                    myGame.board.row3.cell3 = 'x';
                    changePlayer = true;
                } 
            break; 
            default:
                console.log("Not applicable.");
                break;
        }
        
    } 
    else {
        switch(targetCell) {
            case "1":
                if(myGame.board.row1.cell1 === "") {
                    myGame.board.row1.cell1 = 'o';
                    changePlayer = true;
                }
                break;
                case "2":
                    if(myGame.board.row1.cell2 === "") {
                    myGame.board.row1.cell2 = 'o'; 
                    changePlayer = true;
                }
                    break;
                case "3":
                    if(myGame.board.row1.cell3 === "") {
                    myGame.board.row1.cell3 = 'o';
                    changePlayer = true;
                    }
                    break;
                case "4":
                    if(myGame.board.row2.cell1 === "") {
                    myGame.board.row2.cell1 = 'o';
                    changePlayer = true;
                }
                    break;
                case "5":
                    if(myGame.board.row2.cell2 === "") {
                    myGame.board.row2.cell2 = 'o';
                    changePlayer = true;
                    }
                    break;
                case "6":
                    if(myGame.board.row2.cell3 === "") {
                        myGame.board.row2.cell3 = 'o';
                        changePlayer = true;
                    }
                    break;
                case "7":
                    if(myGame.board.row3.cell1 === "") {
                        myGame.board.row3.cell1 = 'o';
                        changePlayer = true;
                    } 
                    break;
                case "8":
                    if(myGame.board.row3.cell2 === "") {
                        myGame.board.row3.cell2 = 'o';
                        changePlayer = true;
                    } 
                    break;
                case "9":
                    if(myGame.board.row3.cell3 === "") {
                    myGame.board.row3.cell3 = 'o';
                    changePlayer = true;
                    } 
                    break; 
                default:
                    console.log("Not applicable.");
                    break;
        }
    }
    myGame.Render();
}
