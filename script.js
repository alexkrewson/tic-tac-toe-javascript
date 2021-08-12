

beginbutton = document.getElementById('begin-button');
beginbutton.setAttribute('onclick', 'Begin()');

var player1 = '';
var player2 = '';   
var currentplayer = '';

function Begin() {
    var p1name = document.getElementById('p1-name').value
    var p2name = document.getElementById('p2-name').value
    player1 = Player(p1name, 'X');
    player2 = Player(p2name, 'O');
    currentplayer = player1;
    return { player1, player2, currentplayer}
}

// currentplayer = Begin.currentplayer;


const Player = (name, symbol) => {
    return { name, symbol }
};



gridarray = [document.getElementById(0), document.getElementById(1), document.getElementById(2), document.getElementById(3), document.getElementById(4), document.getElementById(5), document.getElementById(6), document.getElementById(7), document.getElementById(8)];


function Render(square) {

    counterstring = 'Populate(' + square.id + ')';
    gameboardsquare = Gameboard.gameboard[square.id]


    if (gameboardsquare == '') {

        while (square.firstChild) {
            square.removeChild(square.lastChild);
        }

        // console.log('here')
        var newbutton = document.createElement('button');


        newbutton.setAttribute('onclick', counterstring);
        square.appendChild(newbutton)
    } else {
        square.innerHTML = gameboardsquare;
    };
};

var gridarray = [document.getElementById(0), document.getElementById(1), document.getElementById(2), document.getElementById(3), document.getElementById(4), document.getElementById(5), document.getElementById(6), document.getElementById(7), document.getElementById(8)];

function Check() {
    if (Gameboard.gameboard[0] == Gameboard.gameboard[1] &&
        Gameboard.gameboard[0] == Gameboard.gameboard[2] &&
        Gameboard.gameboard[0] == currentplayer.symbol ||
        Gameboard.gameboard[3] == Gameboard.gameboard[4] &&
        Gameboard.gameboard[3] == Gameboard.gameboard[5] &&
        Gameboard.gameboard[3] == currentplayer.symbol ||
        Gameboard.gameboard[6] == Gameboard.gameboard[7] &&
        Gameboard.gameboard[6] == Gameboard.gameboard[8] &&
        Gameboard.gameboard[6] == currentplayer.symbol ||
        Gameboard.gameboard[0] == Gameboard.gameboard[3] &&
        Gameboard.gameboard[0] == Gameboard.gameboard[6] &&
        Gameboard.gameboard[0] == currentplayer.symbol ||
        Gameboard.gameboard[1] == Gameboard.gameboard[4] &&
        Gameboard.gameboard[1] == Gameboard.gameboard[7] &&
        Gameboard.gameboard[1] == currentplayer.symbol ||
        Gameboard.gameboard[2] == Gameboard.gameboard[5] &&
        Gameboard.gameboard[2] == Gameboard.gameboard[8] &&
        Gameboard.gameboard[2] == currentplayer.symbol ||
        Gameboard.gameboard[0] == Gameboard.gameboard[4] &&
        Gameboard.gameboard[0] == Gameboard.gameboard[8] &&
        Gameboard.gameboard[0] == currentplayer.symbol ||
        Gameboard.gameboard[2] == Gameboard.gameboard[4] &&
        Gameboard.gameboard[2] == Gameboard.gameboard[6] &&
        Gameboard.gameboard[2] == currentplayer.symbol
    ) {
        console.log(currentplayer.name + ' wins!')
        // console.log("anything")
    } else if (!Gameboard.gameboard.includes('')) {
        console.log('tie?')
    }
}

function Populate(index) {

    Gameboard.gameboard[index] = currentplayer.symbol;
    gridarray.forEach(Render)

    Check()

    Switchplayer()

}

const Gameboard = (() => {
    // var gameboard = ['x', 'o', '', 'x', 'o', 'x', '', 'o', ''];
    var gameboard = ['', '', '', '', '', '', '', '', ''];
    return { gameboard }
})();


function Switchplayer() {
    if (currentplayer == player1) {
        currentplayer = player2;
    } else {
        currentplayer = player1;
    }
}



// console.log(gridarray)
gridarray.forEach(Render)









