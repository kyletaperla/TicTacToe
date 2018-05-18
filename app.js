TicTacToe = function(target){
    this.board = [["","",""],["","",""],["","",""]];
    this.turn = "x";
    this.target = target;
    this.win = false;
    this.tie = false;
    this.running = true;
    this.changePlayer = false;
    this.reset = false;
    this.txt = null;
    this.name = "Kyle's Tic Tac Toe";
    let me = this;
    this.getGameDom().addEventListener("click", (e) => {
        me.buttonPress.call(me, e);
    });
    this.render();
}

TicTacToe.prototype.getGameDom = function(){
    return document.querySelector(this.target);
}

TicTacToe.prototype.render = function(){
    let win = this.win;
    let tie = this.tie;
    let game = this.getGameDom();
    if(!game) { return; }

    if(!win && !tie) {
        game.innerHTML = "";
        let newHtml = "";
        newHtml += "<h1 align='center' id='titlehead'>" + this.name + "</h1>";
        newHtml += "<h2 id='player-turn' align='center'>Turn: " + this.turn + "</h2>";
    
    
        for(let i = 1;i <= 3; i++) {
            
            newHtml += "<div class='row'>"
    
            for(let k = 1; k <= 3; k++) {
                newHtml +=  "<div class='col-4 tictac' data-row='" + i + "'data-cell='" + k + "' align='center'>" + this.board[i-1][k-1]  + "</div>";      
            }
    
           newHtml += "</div>"
        }
    
        newHtml += "<div class='row'><button class='col-12 reset'>reset</button></div>"
    
        game.innerHTML = newHtml;
    } else if (tie) {
        game.innerHTML = "";
        let newHtml = "";
        newHtml += "<h1 align='center' id='titlehead'>It's a tie!</h1>";
        newHtml += "<h2 id='player-turn' align='center'>Try again!</h2>";
        newHtml += "<div class='row'><button class='col-12 reset'>reset</button></div>"
        game.innerHTML = newHtml;
    } else {
        game.innerHTML = "";
        let newHtml = "";
        newHtml += "<h1 align='center' id='titlehead'>Game Over!</h1>";
        newHtml += "<h2 id='player-turn' align='center'> Player " + this.turn + " wins!</h2>";
        newHtml += "<div class='row'><button class='col-12 reset'>reset</button></div>"
        game.innerHTML = newHtml;
    }

}

TicTacToe.prototype.checkWin = function() {

    //Check rows
    for(let i = 0; i < 3; i++) {
        
        if(MyGame.board[i][0] != "" && MyGame.board[i][1] != "" && MyGame.board[i][2] != "") {    
            if(MyGame.board[i][0] === MyGame.board[i][1] && MyGame.board[i][1] === MyGame.board[i][2]) {
                MyGame.win = true;
            }
        }
        
    }

    //Check columns
    for(let i = 0; i < 3; i++) {

        if(MyGame.board[0][i] != "" && MyGame.board[1][i] != "" && MyGame.board[2][i] != "")
        {
            if(MyGame.board[0][i] === MyGame.board[1][i] && MyGame.board[1][i] === MyGame.board[2][i]) {
                MyGame.win = true;
            }
        }
        
    }

    //Check diagonals
    if(MyGame.board[2][0] != "" && MyGame.board[1][1] != "" && MyGame.board[0][2] != "")
    {
        if(MyGame.board[2][0] === MyGame.board[1][1] && MyGame.board[1][1] === MyGame.board[0][2]) {
            MyGame.win = true;
        }
    }

    if(MyGame.board[0][0] != "" && MyGame.board[1][1] != "" && MyGame.board[2][2] != "")
    {
        if(MyGame.board[0][0] === MyGame.board[1][1] && MyGame.board[1][1] === MyGame.board[2][2]) {
            MyGame.win = true;
        }
    }

    //Turn Change
    if(MyGame.win === false) {
        let count = 0;
        for(let i = 0; i < 3; i++) {
            
            for(let k = 0; k < 3; k ++)  {

                if(MyGame.board[i][k] != "") {
                    count++;
                }

            }

        }

        if(count === 9) {
            MyGame.tie = true;
            MyGame.render();
            MyGame.resetBoard();
        }
            
        if(MyGame.turn === "x") 
            MyGame.turn = "o";
        else 
            MyGame.turn = "x";
    }

    if(MyGame.win === true && MyGame.tie === false) {
        MyGame.render();
    }

}

TicTacToe.prototype.resetBoard = function(){
    MyGame.board = [["","",""],["","",""],["","",""]];
    MyGame.turn = "x";
    MyGame.win = false;

    MyGame.render();
}

TicTacToe.prototype.buttonPress = function(e){
    MyGame.render();

    let clickedId = e.target.className;
    let rowId, cellId;

    if(!clickedId) { return; }
    

    if(clickedId === "col-4 tictac") {
        rowId = e.target.getAttribute("data-row");
        cellId = e.target.getAttribute("data-cell");

    } else if (clickedId === "col-12 reset") {
        MyGame.resetBoard();
    }

    if(MyGame.board[rowId-1][cellId-1] != "") { return; }

    MyGame.board[rowId-1][cellId-1] = MyGame.turn;
    
    MyGame.checkWin();
    MyGame.render();
}

function UpdateBoard(targetCell) {
    MyGame.turn = 'player1' ? MyGame.txt = 'x': MyGame.txt = 'o';
    MyGame.board[targetCell-1] = MyGame.txt;

    MyGame.render();
}

MyGame = new TicTacToe(".TicTacToe-container");