


const Gameplay = () => {
    var currentplayer = {};
    var gameboard = ['', '', '', '', '', '', '', '', ''];
    var inputcontainer = document.getElementById('input-container');

    function ReplaceText(str) {
        while (inputcontainer.firstChild) {
            inputcontainer.removeChild(inputcontainer.lastChild);
        }
        newtext = document.createElement('h2')
        newtext.innerHTML = str
        inputcontainer.appendChild(newtext)
    }

    function Reset() {
        gameboard = ['', '', '', '', '', '', '', '', ''];
        gridarray.forEach(Update)
        currentplayer = player1;
        ReplaceText(player1.name + "'s turn")
    }

    function SetPlayers() {
        player1.name = document.getElementById('p1-name').value;
        player2.name = document.getElementById('p2-name').value;
        currentplayer = player1;

        ReplaceText(currentplayer.name + "'s turn")

        var buttoncontainer = document.getElementById('begin-button-container');
        while (buttoncontainer.firstChild) {
            buttoncontainer.removeChild(buttoncontainer.lastChild);
        }
        var newbutton = document.createElement('button')
        newbutton.innerHTML = 'Reset'
        newbutton.addEventListener("click", Reset, false);
        newbutton.setAttribute('id', 'begin-button')
        buttoncontainer.appendChild(newbutton)

    };

    const Player = (name, symbol) => {
        return { name, symbol }
    };

    var player1 = Player('', 'X');
    var player2 = Player('', 'O');

    var gridarray = [document.getElementById(0), document.getElementById(1), document.getElementById(2), document.getElementById(3), document.getElementById(4), document.getElementById(5), document.getElementById(6), document.getElementById(7), document.getElementById(8)];
    
    var beginbutton = document.getElementById('begin-button');
    beginbutton.addEventListener("click", SetPlayers, false);

    function Donothing() {

    }

    function Killbuttons(square) {
        var updatedsymbol = gameboard[square.id];

        if (updatedsymbol == '') {

            while (square.firstChild) {
                square.removeChild(square.lastChild);
            }

            var newbutton = document.createElement('button');
            newbutton.setAttribute('class', 'grey-button')
            newbutton.addEventListener("click", Donothing, false);
            square.appendChild(newbutton)


        }
    }


    function Populate() {
        currentsquare_index = document.activeElement.parentNode.id;
        gameboard[currentsquare_index] = currentplayer.symbol;
        gridarray.forEach(Update)

        if (AnybodyWin()) {
            ReplaceText(currentplayer.name + ' wins!')

            gridarray.forEach(Killbuttons)
            // Check()
        } else {
            Switchplayer()
            ReplaceText(currentplayer.name + "'s turn")



        }


    }


    function Switchplayer() {
        if (currentplayer == player1) {
            currentplayer = player2;
        } else {
            currentplayer = player1;
        }
    }

    function Update(square) {
        var updatedsymbol = gameboard[square.id];
        if (updatedsymbol == '') {
            while (square.firstChild) {
                square.removeChild(square.lastChild);
            }
            var newbutton = document.createElement('button');
            newbutton.setAttribute('class', 'green-button')
            newbutton.addEventListener("click", Populate, false);
            square.appendChild(newbutton)


        } else {
            square.innerHTML = updatedsymbol;
        };
    };

    function SameSymbols(a, b, c) {
        if (
            gameboard[a] == gameboard[b] &&
            gameboard[a] == gameboard[c] &&
            gameboard[a] == currentplayer.symbol) {
            return true
        }
    }

    function AnybodyWin() {
        if (
            SameSymbols(0, 1, 2) ||
            SameSymbols(3, 4, 5) ||
            SameSymbols(6, 7, 8) ||
            SameSymbols(0, 3, 6) ||
            SameSymbols(1, 4, 7) ||
            SameSymbols(2, 5, 8) ||
            SameSymbols(0, 4, 8) ||
            SameSymbols(2, 4, 6)) {
            console.log(currentplayer.name + ' wins!')
            return true
        } else if (!gameboard.includes('')) {
            console.log('tie?')
            return false
        }

    }

    gridarray.forEach(Update)
}

Gameplay()










